import { Timestamp } from "firebase/firestore";

export type PostData = {
  body: string | null;
  url: string | null;
  tags: string[];
  title: string;
  type: "blog" | "youtube" | "tik-tok";

  created: Timestamp;
};

export type Post = PostData & {
  id: string;
};
