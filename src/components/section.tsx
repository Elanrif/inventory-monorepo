import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';

export default function Section() {
    return (
        <div className="space-y-2 px-2 mb-12 text-center flex flex-col items-center">
            <Image
                src="/images/cat.jpg"
                alt="Placeholder"
                width={200}
                height={200}
                className="w-[80px] h-[80px] object-cover"
            />
            <p className="font-bold">First steps</p>
            <span className="text-gray-500 opacity-60">
                Customize your dashboard and <br /> learn about our features
            </span>
            <Button className="text-green-700 bg-white font-bold mt-2">Get Started</Button>
        </div>

    )
}
