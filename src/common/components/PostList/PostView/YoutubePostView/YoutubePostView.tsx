import { PostViewProps } from "../PostView";

const YoutubePostView = ({ post: { url } }: PostViewProps) => {
  const id = new URL(url!).searchParams.get("v");

  console.log({ url, id });

  return (
    <iframe
      src={"https://www.youtube.com/embed/" + id}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};

export default YoutubePostView;
