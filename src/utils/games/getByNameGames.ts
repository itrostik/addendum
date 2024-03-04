import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";

const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getByNameGames(searchValue: string, count: number) {
  let continueCursor = null;
  let isDone = false;
  let page;
  let countPage = 1;
  const results = [];

  while (!isDone) {
    ({ continueCursor, isDone, page } = await client.query(
      api.games.getByName,
      {
        name: searchValue,
        paginationOpts: { numItems: count, cursor: continueCursor },
      },
    ));
    const data = [...page];
    if (data.length > 0) {
      results.push({ data, page: countPage });
      countPage++;
    }
  }

  return results;
}
