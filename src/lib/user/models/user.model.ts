export type UserDto = {
  id: number;
  username: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

export interface UserReqDTO {
  username: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

export interface LoginReqDTO {
  email: string;
  password: string;
}
