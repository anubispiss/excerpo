import BreadcrumbHeader from '@/components/BreadcrumbHeader'
import DesktopSiderbar from '@/components/Siderbar'
import { ModeToggle } from '@/components/ThemeModeToggle'
import { Separator } from '@radix-ui/react-context-menu'
import React from 'react'

function layout({children}: {children:React.ReactNode}) {
  return (
    <div className="flex h-screen">
        <DesktopSiderbar/>
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
            <BreadcrumbHeader/>
            <div className="gap-1 flex items-center">
              <ModeToggle></ModeToggle>
            </div>
        </header>
        <Separator/>
        <div className="overflow-auto"> 
            <div className="flex-1 container py-4 text-accent-foreground"> 
                {children}
            </div>
        </div>
      </div>
    </div>
  )
}

export default layout
