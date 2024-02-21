import { query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    const games = await ctx.db.query("games").collect();
    if (games.length === 0) throw new ConvexError("Игра не найдены");
    return games;
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
