import { publicProcedure, router } from "../trpc"

const getNotes = publicProcedure.query(() => {
  return ["this", "is", "a", "test"]
})

export const notesRouter = router({
  get: getNotes
})
