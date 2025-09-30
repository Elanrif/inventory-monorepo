import React from 'react'

import { Calendar, ChevronDown, Search } from 'lucide-react'

export default function ContentFiter() {
    return (
        <div className='flex justify-between items-center bg-white h-18 px-2 rounded-lg'>
            <div className="border border-gray-300 justify-between w-50 font-medium px-4 py-1 rounded-lg flex items-center gap-2 text-sm">
                Search
                <Search size={16} />
            </div>
            <div className='flex space-x-2'>
                <p className="border border-gray-300 font-medium px-4 py-1 rounded-lg flex items-center gap-2 text-xs">
                    <Calendar size={20} className="text-gray-500" />
                      12 Sept - 18 Oct 2024
                </p>
                <p className="border border-gray-300 font-medium px-4 py-1 rounded-lg flex items-center gap-2 text-xs">
                    <ChevronDown size={20} />
                    Amount Status
                </p>
                <p className="border border-gray-300 font-medium px-4 py-1 rounded-lg flex items-center gap-2 text-xs">
                    <ChevronDown size={20} />
                    Status
                </p>
            </div>
        </div>
    )
}





