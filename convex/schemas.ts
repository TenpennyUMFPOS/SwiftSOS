import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  message: defineTable({
    body: v.string(),
    sender: v.id("users"),
    channelId: v.id("channels"),
  }).index("by_id", ["channelId"]),
  users: defineTable({
    userId: v.string(),
    positionX: v.number(),
    positionY: v.number(),
  }).index("by_id", ["userId"]),
  ambulances: defineTable({
    positionX: v.number(),
    positionY: v.number(),
  }),
  channels: defineTable({
    userId: v.id("users"),
  }),
});
