import { PostViewProps } from "../PostView";

const TikTokPostView = ({ post: { url } }: PostViewProps) => {
  const id = new URL(url!).pathname.split("/").at(-1);

  return <iframe src={"https://www.tiktok.com/embed/" + id} />;
};

export default TikTokPostView;
