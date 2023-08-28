# Swish Analytics FE Coding Assessment Readme

### This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**Version : 13.14.9 [Docs](https://nextjs.org/docs)**

This is an overview of the Swish Analytics FE Coding Assessment. Below you’ll find instructions on how to launch the app locally along with different ways to interact with the content. This table is a mock representation of NBA data provided in JSON

## Getting Started

Install Node Packages

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Goal

The main goal is to build a table that displays the data from `props.json`. Each row in the table represents a market along with the optimal line, low line, and high line for each market. Users should be able to filter the table based on position, stat type, and market status, as well as search for specific player or team names.

## Functionalities

1. **Filtering**: Users can filter the table based on position, stat type, and market status (suspended or not).

    - Filters can be combined in any configuration.
    - Selecting all filters within a category is equivalent to selecting none, and the entire list will be displayed.

2. **Search Bar**: Users can use the search bar to filter data based on player name or team name.

3. **Market Suspension Indication**: The table should indicate whether a market is suspended or not. A market can be suspended if any of the following conditions are true:

    - `marketSuspended` is set to 1 in `props.json`.
    - The market's optimal line does not exist in `alternates.json`.
    - The optimal line exists in `alternates.json`, but none of the under, push, and over probabilities are greater than 40%.

4. **Manual Suspension**: Users can manually suspend or release a market. If manually suspended, this value will override any calculated suspension status.
    - Manually Suspending a market will place a small indicator next to the stats value to notify the user that the original suspension has been overridden.

## Notes

1. The props data was provided in a JSON file which could be imported, but the data in the app is being fetched client side via a route handler to simulate a more realistic environment and to separate some of the logic to shape the data.

-   Read more about Route handlers in NEXT 13 here [Routing: Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
