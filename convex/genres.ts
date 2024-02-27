import { query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getAll = query({
  args: {},
  handler: async (ctx, args) => {
    const genres = await ctx.db.query("genres").collect();
    if (!genres) throw new ConvexError("Жанры не получены");
    return genres;
  },
});
