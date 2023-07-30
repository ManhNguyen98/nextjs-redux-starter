import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <aside
        className="w-[300px] bg-slate-100 border-r h-full"
        style={{ height: 'calc(100vh - 48px)' }}
      >
        Sidebar 2
      </aside>
      {children}
    </div>
  )
}

export default Layout
