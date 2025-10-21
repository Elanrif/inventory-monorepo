import environment from '@config/environment.config';
import { LoginReqDTO, UserDto, UserReqDTO } from '../models/user.model';
//import apiClient from "@config/api.config";
import axios from 'axios';

const {
  api: {
    rest: {
      endpoints: { users: userUrl },
    },
  },
} = environment;

export const getAllUsers = async (): Promise<UserDto[]> => {
  return axios
    .get<UserDto[]>(`${userUrl}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error('Erreur getAllUsers:', error);
      return [];
    });
};

export const getUserById = async (id: number): Promise<UserDto | null> =>
  axios
    .get<UserDto>(`${userUrl}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error('Erreur getUserById:', error);
      return null;
    });

export const createUser = async (
  userData: Partial<UserReqDTO>,
): Promise<UserDto> =>
  axios
    .post<UserDto>(`${userUrl}/register`, userData)
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
export const loginUser = async (
  loginData: Partial<LoginReqDTO>,
): Promise<UserDto> =>
  axios
    .post<UserDto>(`${userUrl}/login`, loginData)
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
