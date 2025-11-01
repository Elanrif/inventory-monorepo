'use client';

import { CategoryDto } from '@/lib/category/models/category.model';
import { getAllCategories } from '@/lib/category/services/category.service';
import { UserDto } from '@/lib/user/models/user.model';
import { getAllUsers } from '@/lib/user/services/user.service';
import { useEffect, useState } from 'react';

export function useCategory() {
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategoriesData();
  }, []);

  const getAllCategoriesData = async () => {
    const token = sessionStorage.getItem('accessToken') ?? undefined;
    console.log('user token: ', token);

    try {
      const u = await getAllCategories('desc', token);
      setCategories(u);
    } catch (e) {
      console.error('Erreur fetch categories', e);
    } finally {
      setLoading(false);
    }
  };

  return { categories, loading };
}

export function useUser() {
  const [users, setUsers] = useState<UserDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllUsersData();
  }, []);

  const getAllUsersData = async () => {
    const token = sessionStorage.getItem('accessToken') ?? undefined;
    console.log('user token: ', token);

    try {
      const u = await getAllUsers('desc', token);
      setUsers(u);
    } catch (e) {
      console.error('Erreur fetch users', e);
    } finally {
      setLoading(false);
    }
  };

  return { users, loading };
}
