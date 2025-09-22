import React from "react";
import Image from "next/image";

export default function pageJson() {
  return (
    <div className="grid grid-cols-3 gap-10 px-20 my-10">
      {/* Section Catégorie 1 : Électronique */}
      <div className="p-6 border border-blue-500 rounded-lg shadow bg-white">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/images/categories/category-1.jpeg"
            alt="Électronique"
            width={64}
            height={64}
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h2 className="text-xl font-bold">Électronique</h2>
            <p className="text-gray-600">
              Appareils électroniques et high-tech
            </p>
          </div>
        </div>
        <h3 className="font-semibold mb-2">Produits phares :</h3>
        <div className="grid grid-cols-1 gap-4">
          {/* Produit 1 */}
          <div className="flex items-center gap-4 p-2 border border-red-500 rounded">
            <Image
              src="/images/products/iphone-1.jpg"
              alt="iPhone 15 Pro"
              width={56}
              height={56}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <div className="font-medium">iPhone 15 Pro</div>
              <div className="text-sm text-gray-500">1299 €</div>
            </div>
          </div>
          {/* Produit 2 */}
          <div className="flex items-center gap-4 p-2 border border-red-500 rounded">
            <Image
              src="/images/products/iphone-2.jpg"
              alt="Samsung Galaxy S24"
              width={56}
              height={56}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <div className="font-medium">Samsung Galaxy S24</div>
              <div className="text-sm text-gray-500">1099 €</div>
            </div>
          </div>
          {/* Produit 3 */}
          <div className="flex items-center gap-4 p-2 border border-red-500 rounded">
            <Image
              src="/images/products/iphone-1.jpg"
              alt="MacBook Air M3"
              width={56}
              height={56}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <div className="font-medium">MacBook Air M3</div>
              <div className="text-sm text-gray-500">1599 €</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Catégorie 2 : Mobilier */}
      <div className="p-6 border border-blue-500 rounded-lg shadow bg-white">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/images/categories/category-1.jpeg"
            alt="Mobilier"
            width={64}
            height={64}
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h2 className="text-xl font-bold">Mobilier</h2>
            <p className="text-gray-600">
              Meubles et équipements d&apos;ameublement
            </p>
          </div>
        </div>
        <h3 className="font-semibold mb-2">Produits phares :</h3>
        <div className="grid grid-cols-1 gap-4">
          {/* Produit 1 */}
          <div className="flex items-center gap-4 p-2 border border-red-500 rounded">
            <Image
              src="/images/products/iphone-2.jpg"
              alt="Canapé d'angle"
              width={56}
              height={56}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <div className="font-medium">Canapé d&apos;angle</div>
              <div className="text-sm text-gray-500">899 €</div>
            </div>
          </div>
          {/* Produit 2 */}
          <div className="flex items-center gap-4 p-2 border border-red-500 rounded">
            <Image
              src="/images/products/iphone-1.jpg"
              alt="Table basse"
              width={56}
              height={56}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <div className="font-medium">Table basse</div>
              <div className="text-sm text-gray-500">199 €</div>
            </div>
          </div>
          {/* Produit 3 */}
          <div className="flex items-center gap-4 p-2 border border-red-500 rounded">
            <Image
              src="/images/products/iphone-2.jpg"
              alt="Fauteuil relax"
              width={56}
              height={56}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <div className="font-medium">Fauteuil relax</div>
              <div className="text-sm text-gray-500">299 €</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Catégorie 3 : Vêtements */}
      <div className="p-6 border border-blue-500 rounded-lg shadow bg-white">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/images/categories/category-1.jpeg"
            alt="Vêtements"
            width={64}
            height={64}
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h2 className="text-xl font-bold">Vêtements</h2>
            <p className="text-gray-600">Vêtements et accessoires de mode</p>
          </div>
        </div>
        <h3 className="font-semibold mb-2">Produits phares :</h3>
        <div className="grid grid-cols-1 gap-4">
          {/* Produit 1 */}
          <div className="flex items-center gap-4 p-2 border border-red-500 rounded">
            <Image
              src="/images/products/iphone-1.jpg"
              alt="T-shirt coton"
              width={56}
              height={56}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <div className="font-medium">T-shirt coton</div>
              <div className="text-sm text-gray-500">29 €</div>
            </div>
          </div>
          {/* Produit 2 */}
          <div className="flex items-center gap-4 p-2 border border-red-500 rounded">
            <Image
              src="/images/products/iphone-2.jpg"
              alt="Jean slim"
              width={56}
              height={56}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <div className="font-medium">Jean slim</div>
              <div className="text-sm text-gray-500">59 €</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
