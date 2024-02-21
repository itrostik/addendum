import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  games: defineTable({
    description: v.string(),
    genre: v.array(v.string()),
    image: v.string(),
    name: v.string(),
    rating: v.float64(),
  }),
  users: defineTable({
    email: v.string(),
    avatar: v.string(),
    name: v.string(),
    like_genres: v.array(v.string()),
  }),
  genres: defineTable({
    name: v.string(),
  }),
  chat: defineTable({
    first_user: v.id("users"),
    second_user: v.id("users"),
    messages: v.array(v.id("messages")),
  }),
  messages: defineTable({
    user_id: v.id("users"),
    chat_id: v.id("chats"),
    text: v.string(),
    date: v.string(),
  }),
  advertisements: defineTable({
    description: v.string(),
    game_id: v.id("games"),
    image: v.string(),
    seller: v.id("users"),
    price: v.float64(),
  }),
});
