import { httpBatchLink } from '@trpc/react-query'
import {trpc} from './trpc'
import { useState } from 'react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import NotesList from './components/NotesList'

export default function App() {
const [queryClient ] = useState(()=> new QueryClient())

const [trpcClient ] = useState(()=>{
  return trpc.createClient({
     links: [
       httpBatchLink({
         url: "http://localhost:3000/trpc"
       })
     ]
   })
})



  return (

<trpc.Provider client={trpcClient} queryClient={queryClient}>
<QueryClientProvider client={queryClient}>

  <div>App</div>
  <NotesList/>
</QueryClientProvider>
</trpc.Provider>

  )
}