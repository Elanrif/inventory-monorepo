import environment from '@config/environment.config';
import { LoginReqDTO, UserDto, UserReqDTO } from '../models/user.model';
//import apiClient from "@config/api.config";
import axios, { AxiosRequestConfig } from 'axios';
import apiClient from '@/config/api.config';

const {
  api: {
    rest: {
      endpoints: { auth: authUrl, users: userUrl },
    },
  },
} = environment;

// Authorization: Bearer <token> in the request headers.
export const getAllUsers = async (
  order?: 'asc' | 'desc',
  token?: string,
): Promise<UserDto[]> => {
  const config: AxiosRequestConfig = {
    params: { order },
  };

  return apiClient(token)
    .get<UserDto[]>(`${userUrl}`, config)
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur getAllUsers:', error);
      return [];
    });
};

export const fetchAllUsers = (order?: string): Promise<UserDto[]> => {
  return axios
    .get<UserDto[]>(userUrl, { params: { order } })
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur fetchAllUsers:', error);
      return [];
    });
};

export const getUserById = async (
  id: number,
  token?: string,
): Promise<UserDto | null> =>
  apiClient(token)
    .get<UserDto>(`${userUrl}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error('Erreur getUserById:', error);
      return null;
    });

export const signUp = async (userData: Partial<UserReqDTO>): Promise<UserDto> =>
  axios
    .post<UserDto>(`${authUrl}/signup`, userData)
    .then((response) => {
      return response.data;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((error: any) => {
      const err = error?.response?.data?.message;
      // Return Error
      throw new Error(err);
    });

//LOGIN
export const signIn = async (
  loginData: Partial<LoginReqDTO>,
): Promise<UserDto> =>
  axios
    .post<UserDto>(`${authUrl}/signin`, loginData)
    .then((response) => {
      return response.data;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .catch((error: any) => {
      const err = error?.response?.data?.message || error.message;
      // Return Error
      throw new Error(err);
    });

export async function updateUser(
  id: number,
  userData: Partial<UserReqDTO>,
): Promise<UserDto> {
  return axios
    .put<UserDto>(`${userUrl}/${id}`, userData)
    .then((res) => res.data);
}

export async function deleteUser(id: number): Promise<void> {
  return axios.delete<void>(`${userUrl}/${id}`).then((res) => res.data);
}
