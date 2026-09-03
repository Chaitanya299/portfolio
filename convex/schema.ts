import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    timestamp: v.number(),
  }).index("by_timestamp", ["timestamp"]),
});
