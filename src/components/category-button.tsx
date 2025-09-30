import {FileText, Plus, Upload } from 'lucide-react'
import React from 'react'

export function CategoryButton() {
    return (
        <div className="flex justify-between items-center">
            <p className='font-medium text-2xl'>Inventory</p>
            <div className="flex flex-wrap items-center gap-2 md:flex-row text-sm">
                <button className="flex items-center gap-2 border border-gray-200 py-1 px-2 rounded-md font-medium bg-white">
                    <Upload size={15}/> Import</button>
                <button className="flex items-center gap-2 border border-gray-200 py-1 px-2 rounded-md bg-white font-medium">
                     <FileText size={15}/>Export</button>
                <button className="flex items-center gap-2 border py-1 px-2 bg-blue-700 text-white rounded-md font-medium">
                    <Plus size={15}/> Add Category</button>
            </div>
        </div>
    )
}
