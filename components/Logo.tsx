import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.png'

const Logo = () => {
  return (
    <div>
        <Image src={logo} alt={'CurioKids'}  />
    </div>
  )
}

export default Logo