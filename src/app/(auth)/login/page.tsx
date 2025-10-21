import Login from '@/components/auth/login';
import { UserLock } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex min-h-[100vh] overflow-hidden rounded-3xl">
      <div className="relative h-screen w-1/3">
        <Image
          src="/images/imageLogin.png"
          alt="Description de l'image"
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 flex flex-col items-center justify-center p-8 text-white">
            <h1 className="mb-3 text-2xl font-bold">
              Simplement tous les outils que <br />
              mon équipe et moi avons besoin.
            </h1>
            <p className="">
              <span className="font-bold">Karen Yue</span>
              <br />
              Directeur des technologies de marketing numérique
            </p>
          </div>
          <div className="absolute top-5 left-10 m-4 flex items-center gap-2">
            <p>
              <UserLock className="text-2xl text-white" />
            </p>
            <p className="text-2xl text-white">Nucleus</p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-2/3 flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-start">
          <h2 className="mb-6 text-3xl font-bold">Bienvenue à Nucleus</h2>
          <p className="text-center text-slate-600">
            Créez votre système de design sans effort avec notre <br />{' '}
            puissante bibliothèque de composants.
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
}
