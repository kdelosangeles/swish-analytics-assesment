import { createContext } from "react";
import { Stat } from "../_types/types";

interface HomePageContextProps {
    stats: Stat[];
    setStats: any;
    searchFilter: string;
    setSearchFilter: (search: string) => void;
    statFilters: string[];
    setStatFilters: (stats: string[]) => void;
    positionFilters: string[];
    setPositionFilters: (positions: string[]) => void;
    marketSuspendedFilter: number[];
    setMarketSuspendedFilter: any;
}

export const HomePageContext = createContext<HomePageContextProps>({
    stats: [],
    setStats: () => {},
    searchFilter: "",
    setSearchFilter: () => {},
    statFilters: [],
    setStatFilters: () => {},
    positionFilters: [],
    setPositionFilters: () => {},
    marketSuspendedFilter: [],
    setMarketSuspendedFilter: () => {},
});
