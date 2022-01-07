import React from 'react'
import FooterComponent from './footer'
import HeaderComponent from './header'

function LayoutComponent({ title, children }) {
  return (
    <>
      <HeaderComponent title={title} />
      <main className='font-mont'>{children}</main>
      <FooterComponent />
    </>
  )
}

export default LayoutComponent
