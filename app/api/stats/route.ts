import { NextResponse } from "next/server";
import propsData from "../../_data/props.json";
import alternateData from "../../_data/alternates.json";
import { Stat } from "@/app/_types/types";

interface AlternateDataMapping {
    [key: string]: number[];
}

export const GET = async () => {
    const alternateDataMapping: AlternateDataMapping = {};

    // Create a mapping of the alternate data so that we dont have to iterate over it multiple times
    alternateData.forEach((alt) => {
        // key using the playerId and statTypeId
        const key = `${alt.playerId}-${alt.statTypeId}`;
        //   create a mapping for the key if it doesnt exist
        if (!alternateDataMapping[key]) {
            alternateDataMapping[key] = [];
        }
        //   otherwise push the line to the mapping
        alternateDataMapping[key].push(alt.line);
    });

    //  map over the props data and add the high and low values
    const stats = propsData.map((stat: Stat) => {
        const key = `${stat.playerId}-${stat.statTypeId}`;
        const alternates = alternateDataMapping[key] || [];
        const hasValues = alternates.length > 0;

        const highLine = hasValues ? Math.max(...alternates) : null;
        const lowLine = hasValues ? Math.min(...alternates) : null;

        // create new object with the high and low values
        return { ...stat, highLine, lowLine };
    });

    return NextResponse.json([...stats]);
};
