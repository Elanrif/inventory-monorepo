import React from 'react'

export default function Header() {
  return (
    <>
      <div className="flex my-5 justify-between border-b-2 border-slate-300">
        <div className="flex items-center gap-10">
          <h1 className="text-4xl uppercase font-bold">wix</h1>
          <p>Produit</p>
          <p>solutions</p>
          <p>resources</p>
          <p>wix studio</p>
          <p>entreprises</p>
        </div>
        <p>icon</p>
      </div>
    </>
  );
}
