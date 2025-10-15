import environment from "@config/environment.config";
//import apiClient from "@config/api.config";
import axios from "axios";
import { CategoryDto } from "../models/category.model";

const {
  api: {
    rest: {
      endpoints: { categories: categoryUrl },
    },
  },
} = environment;

export const getCategoryById = async (
  id: number
): Promise<CategoryDto | null> => {
  return axios
    .get<CategoryDto>(`${categoryUrl}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("Erreur getCategoryById:", error);
      return null;
    });
};

export async function getAllCategories(): Promise<CategoryDto[]> {
  return axios
    .get<CategoryDto[]>(`${categoryUrl}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Erreur getAllCategories:", error);
      return [];
    });
}

export const createCategory = async (
  categoryData: Partial<CategoryDto>
): Promise<CategoryDto> =>
  axios
    .post<CategoryDto>(`${categoryUrl}`, categoryData)
    .then((response) => response.data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((error: any) => {
      const err = error?.response?.data?.message;
      throw new Error(err);
    });

export async function updateCategory(
  categoryData: Partial<CategoryDto>
): Promise<CategoryDto> {
  return axios
    .put<CategoryDto>(`${categoryUrl}/${categoryData.id}`, categoryData)
    .then((res) => res.data);
}

export const deleteCategory = async (id: number): Promise<void> => {
  return axios.delete<void>(`${categoryUrl}/${id}`).then((res) => res.data);
}
