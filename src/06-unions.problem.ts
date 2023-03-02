type Role = "admin" | "user" | "super-admin";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
