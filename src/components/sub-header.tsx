import { Search } from 'lucide-react'
import React from 'react'

export default function SubHeader() {
    return (
            <div className='flex justify-between items-center border-2 border-gray-300 m-4 py-1 px-2 rounded-md'>
                <p className="flex items-center gap-2 text-gray-700">
                    <Search size={16} />
                    Search
                </p>
                <p className='flex items-center'>⌘K</p>
            </div>
    )
}
