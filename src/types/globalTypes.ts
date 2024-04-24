export interface IUserInfo {
  // id: string,
  email: string,
  // name: string
}

export interface IUser {
  userInfo: IUserInfo | null;
  // accessToken: string | null
}