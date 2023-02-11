import usePosts from "../../hooks/usePosts";
import PostView from "./PostView";

import style from "./PostList.module.css";
import { motion } from "framer-motion";

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
          {canLoadMore && (
            <motion.button
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className={style.loadAllButton}
              onClick={loadRest}
            >
              Cargar todos
            </motion.button>
          )}
        </div>
      )}
    </>
  );
};

export default PostList;
