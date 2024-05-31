export interface UserData {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

export interface UsersReponse {
  users: UserData[];
}

export interface Pagination {
  page: number;
  usersPerPage: number;
}
