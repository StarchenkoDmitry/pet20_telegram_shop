export class SignUpRequest {
  name!: string;
  email!: string;
  password!: string;
}

export class SignInRequest {
  email!: string;
  password!: string;
}

export class IsEmailRegisteredRequest {
  email!: string;
}

export type SignUpResponse = { userId: string };
export type SignInResponse = { userId: string };
export type LogoutResponse = boolean;
export type IsEmailRegisteredResponse = boolean;
