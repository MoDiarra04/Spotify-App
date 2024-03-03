import { error } from "console";

//average earning per 1000 streams
const worldwideAverage = 3.31
const europeAverage = 2.38

export const calculateEarningsAvg = (streams: number) => {
    return (streams / 1000) * worldwideAverage;
}

export const calculateEarningsAvgEurope = (streams: number) => {
    return (streams / 1000) * europeAverage;
}


export const earningsPerSecond = (monthlyStreams: number, location: "worldwide" | "europe") => {
    switch (location) {
        case("worldwide"):
            return calculateEarningsAvg(monthlyStreams) / (30 * 24 * 60 * 60);
        case("europe"):
            return calculateEarningsAvgEurope(monthlyStreams) / (30 * 24 * 60 * 60);
        default:
            throw new Error("Invalid input");
    }
}

export const earningsPerYear = (monthlyStreams: number, location: "worldwide" | "europe") => {
    switch (location) {
        case("worldwide"):
            return calculateEarningsAvg(monthlyStreams) * 12
        case("europe"):
            return calculateEarningsAvgEurope(monthlyStreams) * 12
        default:
            throw new Error("Invalid input");
    }
}