import environment from "@/config/environment.config";
import { Category, CategoryReq,  } from "../models/category.model";
import axios from "axios";

const {
    api: {
        rest: {
            endpoints: { categories: categoryUrl },
        },
    },
} = environment;

export const getAllCategories = async (): Promise<Category[]> => {
    return axios
    .get<Category[]>(`${categoryUrl}`)
    .then((res) => res.data)
    .catch((error) => {
        console.error("Erreur getAllCategories:", error);
        return [];
    });
};

export const getCategoryById = async (id: number): Promise<Category | null> =>
  axios
    .get<Category>(`${categoryUrl}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error("Erreur getCategoryById:", error);
      return null;
    });

export const createCategory = async (
  categoryData: Partial<CategoryReq>
): Promise<Category> =>
  axios
    .post<Category>(`${categoryUrl}`, categoryData)
    .then((response) => response.data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((error: any) => {
      const err = error?.response?.data?.message;
      throw new Error(err);
    });


export async function updateCategory(
  id: number,
  categoryData: Partial<CategoryReq>
): Promise<Category> {
  return axios
    .put<Category>(`${categoryUrl}/${id}`, categoryData)
    .then((res) => res.data);
}

export async function deleteCategory(id: number): Promise<void> {
  return axios.delete<void>(`${categoryUrl}/${id}`).then((res) => res.data);
}
