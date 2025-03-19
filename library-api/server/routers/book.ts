// server/routers/book.ts
import { router, publicProcedure } from "../trpc"
import { z } from "zod"

export const bookRouter = router({
  create: publicProcedure
    .input(
      z.object({
        // define your input
      })
    )
    .mutation(async ({ input }) => {
      // Implement creation logic
    }),

  // define other procedures: get, list, update, delete
})
