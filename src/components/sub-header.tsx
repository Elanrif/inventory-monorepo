import React from 'react'

export default function SubHeader() {
  return (
    <>
      <div className='flex justify-between'>
        <h1 className='font-bold'>eCommerce</h1>
        <div className='flex items-center gap-10'>
          <p>Commencer</p>
          <p>Vendre</p>
          <p>Gérer</p>
          <p>Découvrir</p>
          <p>Tarifs</p>
          <button 
          className='bg-blue-500 text-white rounded-full px-5 py-2'>Créer la boutique</button>
        </div>
      </div>
    </>
  );
}
