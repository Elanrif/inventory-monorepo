import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <Card className='mx-20 mb-10 h-110 relative overflow-hidden border rounded-4xl'>
        <Image src="/images/salon1.jpg" alt="Banner Image" fill className='absolute object-cover brightness-80' />
        <div className='absolute z-50 text-white flex flex-col justify-center items-center pt-20 ps-32 space-y-5'>
            <h1 className='text-5xl text-center font-bold capitalize w-[850px]'>build your home with a comfortable room by using our interior</h1>
            <p className='text-center text-md text-stone-100'>Looking for quality design furniture? then your choice is right have visited our website. <br /> We have furniture with reverse quality ready to be sent to you</p>
            <Button className='text-lg bg-stone-100 hover:bg-stone-100 text-black capitalize px-10 py-7 border rounded-full'>shop now</Button>
        </div>
    </Card>
  )
}
