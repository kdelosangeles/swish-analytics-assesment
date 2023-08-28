import { NextResponse } from "next/server";
import propsData from "../../_data/props.json";
import alternateData from "../../_data/alternates.json";
import { Stat } from "@/app/_types/types";

const highProbabilityThreshold = 0.4;

export const GET = async () => {
    const stats = propsData.map((stat: Stat) => {
        // return an array of all alternates that match the stat
        const matchingAlternates = alternateData
            .filter((a) => a.statType === stat.statType && a.playerId === stat.playerId)
            .map((b) => ({
                line: b.line,
                probabilities: [b.underOdds, b.overOdds, b.pushOdds],
            }));

        const allLines = [...new Set(matchingAlternates.map((a) => a.line))];
        // checks that the optimal line exists in alternates
        const hasOptimalLine = allLines.includes(stat.line);

        // gets the probabilities for the optimal line
        const optimalProbabilities = hasOptimalLine ? matchingAlternates.find((a) => a.line === stat.line).probabilities : null;
        // checks that the optimal line has a probability greater than the threshold
        const highProbability = optimalProbabilities ? optimalProbabilities.some((a) => a > highProbabilityThreshold) : false;

        // high and low lines for the stat
        const highLine = Math.max(...allLines);
        const lowLine = Math.min(...allLines);

        // runs 3 checks to determine if the market should be suspended
        const suspensionCheck = () => {
            if (stat.marketSuspended || !hasOptimalLine || (matchingAlternates.length > 0 && !highProbability)) {
                return 1;
            }
            return 0;
        };

        // a value to compare the initial suspension status to the current suspension status
        const initialSuspensionStatus = stat.marketSuspended;
        const shouldBeSuspended = suspensionCheck();

        return {
            ...stat,
            highLine,
            lowLine,
            marketSuspended: suspensionCheck(),
            initialSuspensionStatus,
            shouldBeSuspended,
        };
    });

    return NextResponse.json(stats);
};

export default GET;
