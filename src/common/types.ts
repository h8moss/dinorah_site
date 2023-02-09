import { Timestamp } from "firebase/firestore";

export type PostType = "blog" | "youtube" | "tik-tok";

export type PostData = {
  body: string | null;
  url: string | null;
  tags: string[];
  title: string;
  type: PostType;

  created: Timestamp;
};

export type Post = PostData & {
  id: string;
};
