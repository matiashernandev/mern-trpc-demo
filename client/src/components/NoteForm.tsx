import { ChangeEvent, FormEvent, useState } from "react"
import { trpc } from "../trpc"


export default function NoteForm() {

    const addNote = trpc.note.create.useMutation()

    const [note, setNote] = useState({
        title: "",
        description: ""
    })


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(note)
        addNote.mutate(note, {
            onSuccess: () => {
                console.log("note added successfully")
            }
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNote({ ...note, [e.target.name]: [e.target.value] })
    }

    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} type="text" placeholder="title" name="title" autoFocus />
            <textarea onChange={handleChange} name="description" placeholder="description"></textarea>
            <button>Save</button>
        </form>
    )
}