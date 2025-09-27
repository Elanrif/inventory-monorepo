import React from 'react'
import Image from 'next/image';

export default function UserFooter() {
    return (
        <div className='flex px-2 gap-4 items-center m-4'>
            <Image
                src="/images/loginImage.jpg"
                alt="Placeholder"
                width={200}
                height={200}
                className="w-[40px] h-[40px] object-cover rounded-full"
            />
            <div className='flex flex-col'>
                <h1 className='font-bold'> Sylwia Weller</h1>
                <span>Admin</span>
            </div>
        </div>
    )
}
