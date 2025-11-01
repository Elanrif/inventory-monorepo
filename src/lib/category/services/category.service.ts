import environment from '@config/environment.config';
import apiClient from '@config/api.config';
import axios from 'axios';
import { CategoryDto, CategoryReqDTO } from '../models/category.model';

const {
  api: {
    rest: {
      endpoints: { categories: categoryUrl },
    },
  },
} = environment;

export const getAllCategories = async (
  order?: 'asc' | 'desc',
  token?: string,
): Promise<CategoryDto[]> => {
  return apiClient(token)
    .get<CategoryDto[]>(`${categoryUrl}`, { params: { order } })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur getAllCategories:', error);
      return [];
    });
};

export const getCategoryById = async (
  id: number,
): Promise<CategoryDto | null> =>
  apiClient()
    .get<CategoryDto>(`${categoryUrl}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error('Erreur getAllCategories:', error);
      return null;
    });

export const createCategory = async (
  categoryData: Partial<CategoryReqDTO>,
): Promise<CategoryDto> =>
  apiClient()
    .post<CategoryDto>(`${categoryUrl}`, categoryData)
    .then((response) => {
      console.log('Backend response:', response.data);
      return response.data;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((error: any) => {
      const err = error?.response?.data?.message;
      // Return Error
      throw new Error(err);
    });

export async function updateCategory(
  id: number,
  categoryData: Partial<CategoryReqDTO>,
): Promise<CategoryDto> {
  return axios
    .put<CategoryDto>(`${categoryUrl}/${id}`, categoryData)
    .then((res) => res.data);
}

export async function deleteCategory(id: number): Promise<void> {
  return axios.delete<void>(`${categoryUrl}/${id}`).then((res) => res.data);
}
