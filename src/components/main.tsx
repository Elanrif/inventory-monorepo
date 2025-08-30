import React from "react";

export default function Main() {

  return (
    <div className="flex flex-col gap-10">
      <div className="relative h-[500px] bg-blue-300">
        <div className="absolute inset-x-20 -bottom-40">
          <div className="mb-3 flex flex-col gap-10 items-center">
            <h1 className="text-5xl text-center w-5xl">
              Créez une boutique en ligne et développez votre activité eCommerce
            </h1>
            <button className="px-10 py-4 bg-black text-white rounded-full text-lg">
              Créer une boutique en ligne
            </button>
            <p>Essayez Wix, Aucune carte de crédit n&apos;est requise</p>
          </div>
          <div className="flex flex-col bg-orange-200 justify-center items-center h-[300px] rounded-xl">
            <h1 className="text-8xl uppercase font-semibold">wix</h1>
            <p>Lancer votre entreprise en ligne aujourd&apos;hui</p>
          </div>
        </div>
      </div>
      {/* liens */}
      <div className="mt-48 flex justify-center gap-5">
        <p>Vendre en ligne</p>
        <p>Témoignages</p>
        <p>Infrastructure</p>
        <p>Fonctionnalité</p>
        <p>MultiCanal</p>
        <p>Développer sa boutique</p>
        <p>Template</p>
      </div>

      <div className="flex justify-center bg-slate-100 py-20 px-30 gap-20">
        <h1 className="w-1/3 text-4xl font-semibold">
          Une plateforme <br/>e-commerce tout-en-un pour développer votre entreprise
        </h1>
        <div className="w-2/3">
          <p>
            Wix e-commerce est la solution idéale pour les entrepreneurs qui
            créent leur société en ligne, les commerçants qui décident de passer
            à la vente en ligne ou les entreprises dont le chiffre d&apos;affaire
            dépasse déjà 1 million d&apos;euros. Notre solution pour vendre en ligne
            vous permet de développer votre site e-commerce efficacement.
            Profitez en effet de fonctionnalités avancées pour promouvoir votre
            boutique en ligne et booster vos ventes.
          </p>
          <button className="px-4 mt-5 py-2 rounded-full bg-black text-white">
            Créer une boutique en ligne
          </button>
        </div>
      </div>
    </div>
  );
}
