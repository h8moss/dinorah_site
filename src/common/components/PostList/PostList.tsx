import usePosts from "../../hooks/usePosts";
import PostView from "./PostView";

import style from "./PostList.module.css";

const PostList = () => {
  const { posts, loadRest, canLoadMore } = usePosts();

  if (posts === null) {
    return (
      <div>
        <h2>Ve lo que he creado</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {posts.length !== 0 && (
        <div>
          <h2>Ve lo que he creado</h2>
          <div className={style.content}>
            {posts.map((v) => (
              <PostView post={v} />
            ))}
          </div>
          {canLoadMore && <button onClick={loadRest}>Cargar todos</button>}
        </div>
      )}
    </>
  );
};

export default PostList;
