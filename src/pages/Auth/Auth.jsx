import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { mutationLogin } from './Mutation'


export const Auth = () => {

    const handleLogin = () => {
    const {} = useMutation({mutationKey: ["login"], mutationFn: mutationLogin})
     }
  return (
    <div>
        <div className='flex items-center justify-center w-screen h-screen'>
        <button onClick={handleLogin} className='text-4xl border hover:bg-slate-300 border-black rounded-md p-2 text-black'>LOGIN</button>
        </div>
            
            
            
    </div>
  )
}
