import { Equal, Expect } from "./helpers/type-utils";

interface Model {
  id: string;
}

interface User extends Model {
  firstName: string;
  lastName: string;
}

interface Post extends Model {
  title: string;
  body: string;
}

interface Comment extends Model {
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>
];
