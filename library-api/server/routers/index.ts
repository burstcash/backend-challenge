import { router } from "../trpc"
import { bookRouter } from "./book"
import { borrowerRouter } from "./borrower"

export const appRouter = router({
  book: bookRouter,
  borrower: borrowerRouter,
})

export type AppRouter = typeof appRouter
