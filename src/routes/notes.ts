import { publicProcedure, router } from "../trpc"
import { z } from "zod"

const getNotes = publicProcedure.query(() => {
  return ["this", "is", "a", "test"]
})

const createNote = publicProcedure.input(z.object({
  title: z.string(), description: z.string()
})).mutation(({ input }) => {
  console.log(input)
  return "received"
})

export const notesRouter = router({
  create: createNote,
  get: getNotes
})
