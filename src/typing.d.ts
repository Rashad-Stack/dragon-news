interface Route {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: Route[];
}

export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

export type Book = {
  color: string;
  description: string;
  id: number;
  name: string;
  price: number;
};

export type InitialState = {
  user: User | null;
  books: Book[];
  isLoading: boolean;
};

export type Action = "SET_USER" | "SET_BOOKS";

export type ActionsType = {
  type: Action;
  payload: unknown;
};
