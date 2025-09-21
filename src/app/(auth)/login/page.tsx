
import Login from '@/components/auth/login';
import { getAllUsers } from '@/lib/user/services/user.service';
import React from 'react';

export default function LoginPage() {
  getAllUsers();
  return (
    <div className='rounded-3xl'>
      <Login/>
    </div>
  );
}
