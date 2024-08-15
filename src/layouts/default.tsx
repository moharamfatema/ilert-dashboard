import React from 'react'
import Navbar from '@/modules/Navbar'

const DefaultLayout = ({children}) => {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}

export default DefaultLayout
