import { Register } from '@/components/auth/register';
import { getAllUsers } from '@/lib/user/services/user.service';
import { ROUTES } from '@/utils/route';
import { Atom } from 'lucide-react';
import Image from 'next/image';

export default function RegisterPage() {
  getAllUsers();

  return (
    <div className='flex h-[100vh] overflow-hidden rounded-2xl'>
      <div className='relative w-1/3 space-y-8'>
        <Image
          src='/images/image2register.jpg'
          alt='Placeholder'
          width={200}
          height={200}
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-black opacity-30' />
        <div className='absolute top-6 left-8 flex items-center gap-2'>
          <Atom size={30} className='text-white' />
          <p className='text-2xl font-bold text-white'>Nucleus</p>
        </div>
        <div className='absolute bottom-4 left-10 space-y-2 text-white'>
          <p className='text-lg font-bold'>
            Simplement tous les outils dont mon équipe et moi avons besoin
          </p>
          <div>
            <p className='font-bold'>Karen Yue</p>
            <p>Directrice de la technologie de marketing numérique</p>
          </div>
        </div>
      </div>
      <div className='mt-10 flex w-2/3 flex-col items-center justify-center gap-5'>
        <div className='flex flex-col items-center justify-start'>
          <h2 className='mb-6 text-3xl font-bold'>Bienvenue à Nucleus</h2>
          <p className='text-center text-slate-600'>
            Créez votre système de design sans effort avec notre <br />{' '}
            puissante bibliothèque de composants.
          </p>
        </div>
        <Register
          labelBtn='Créer un compte'
          isDisplay={true}
          navigateUrl={ROUTES.DASHBOARD}
        />
      </div>
    </div>
  );
}
