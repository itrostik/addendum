import { query } from "./_generated/server";
import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const getAll = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db.query("games").paginate(args.paginationOpts);
  },
});

export const getById = query({
  args: { game_id: v.id("games") },
  handler: async (ctx, args) => {
    const game = await ctx.db.get(args.game_id);
    if (!game) throw new ConvexError("Игра не найдена");
    return game;
  },
});

export const getByName = query({
  args: { paginationOpts: paginationOptsValidator, name: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("games")
      .withSearchIndex("by_name", (q) => q.search("name", args.name))
      .paginate(args.paginationOpts);
  },
});
