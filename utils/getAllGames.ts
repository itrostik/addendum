import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";

const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getAllGames(count: number) {
  let continueCursor = null;
  let isDone = false;
  let page;
  let countPage = 1;
  const results = [];

  while (!isDone) {
    ({ continueCursor, isDone, page } = await client.query(
      api.games.getByPage,
      {
        paginationOpts: { numItems: count, cursor: continueCursor },
      },
    ));
    results.push({ data: [...page], page: countPage });
    countPage++;
  }

  return results;
}
