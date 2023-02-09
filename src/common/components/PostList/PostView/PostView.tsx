import { Post, PostType } from "../../../types";
import BlogPostView from "./BlogPostView";
import TikTokPostView from "./TiktokPostView";
import YoutubePostView from "./YoutubePostView/YoutubePostView";

import style from "./PostView.module.css";
import { ReactNode, useMemo } from "react";

export interface PostViewProps {
  post: Post;
}

const PostView = ({ post }: PostViewProps) => {
  const children: Record<PostType, ReactNode> = useMemo(
    () => ({
      "tik-tok": <TikTokPostView post={post} />,
      blog: <BlogPostView post={post} />,
      youtube: <YoutubePostView post={post} />,
    }),
    [post]
  );

  const { created, id, tags, title, type } = post;

  const child = children[type];
  const specificStyle = style[type];

  return (
    <div key={id} className={`${style.card} ${specificStyle}`}>
      <div>
        <h3>{title}</h3>{" "}
        <p className={style.date}>{created.toDate().toDateString()}</p>
      </div>
      {child}
      <div className={style.tags}>
        {tags.map((v) => (
          <p>{v}</p>
        ))}
      </div>
    </div>
  );
};

export default PostView;
