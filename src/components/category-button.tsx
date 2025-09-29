import {FileText, Plus, Upload } from 'lucide-react'
import React from 'react'

export function CategoryButton() {
    return (
        <div className="flex justify-between items-center">
            <p className='font-medium text-2xl'>Inventory</p>
            <div className="flex flex-wrap items-center gap-2 md:flex-row bg-white">
                <button className="flex items-center gap-2 border border-gray-400 py-1 px-3 rounded-lg font-medium">
                    <Upload size={15}/> Import</button>
                <button className="flex items-center gap-2 border border-gray-400 py-1 px-3 rounded-lg font-medium">
                     <FileText size={15}/>Export</button>
                <button className="flex items-center gap-2 border border-gray-400 py-1 px-3 bg-blue-700 text-white rounded-lg font-medium">
                    <Plus size={15}/> Add Category</button>
            </div>
        </div>
    )
}
