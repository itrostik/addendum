import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  games: defineTable({
    name: v.string(),
    description: v.string(),
    rating: v.number(),
    image: v.string(),
    genre: v.array(v.string())
  })
});