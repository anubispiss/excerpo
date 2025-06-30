import Logo from '@/components/Logo'
import React,{ReactNode} from 'react'

function layout({children}:{chidlren:ReactNode} ) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
        <Logo/>
      {children}
    </div>
  )
}

export default layout
