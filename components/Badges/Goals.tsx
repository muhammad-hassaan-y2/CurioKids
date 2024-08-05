import React from 'react'
import Badge from '.'
import { CalendarCheck } from 'lucide-react'

const Goals = () => {
  return (
    <div>
        <Badge className='bg-[#E8F4FF] text-[#31A8FF]'>
        <CalendarCheck  size={40} />
        </Badge>
    </div>
  )
}

export default Goals