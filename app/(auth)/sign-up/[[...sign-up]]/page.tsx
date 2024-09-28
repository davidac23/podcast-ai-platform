import { SignUp } from '@clerk/nextjs'
import React from 'react'

function Page() {
  return (
    <div className='flex-center gassmorphism-auth h-screen w-full'>
      <SignUp/>
    </div>
  )
}

export default Page