import { PostViewProps } from "../PostView";

const BlogPostView = ({ post: { body } }: PostViewProps) => {
  return (
    <>
      <p>{body}</p>
    </>
  );
};

export default BlogPostView;
