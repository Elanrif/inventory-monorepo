import React from 'react'

export function CategoryButton() {
    return (
        <div className="flex justify-between items-center">
            <p className='font-medium text-2xl'>Inventory</p>
            <div className="flex flex-wrap items-center gap-2 md:flex-row bg-white">
                <button className="border border-gray-400 py-1 px-4 rounded-lg font-medium">Import</button>
                <button className="border border-gray-400 py-1 px-4 rounded-lg font-medium">Export</button>
                <button className="border border-gray-400 py-1 px-4 bg-purple-800 text-white rounded-lg font-medium">Add Category</button>
            </div>
        </div>
    )
}
