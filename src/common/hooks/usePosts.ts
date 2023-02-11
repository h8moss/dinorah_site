import { useCallback, useEffect, useMemo, useState } from "react";
import { Post, PostData } from "../types";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { firestore } from "../firebase";

const usePosts = (maxPosts: number = 10) => {
  const [postsSn, setPostsSn] = useState<
    QueryDocumentSnapshot<DocumentData>[] | null
  >(null);
  const [total, setTotal] = useState<number | null>(null);

  const posts: Post[] | null = useMemo(() => {
    if (!postsSn) return null;
    return postsSn.map((v) => {
      const data = v.data();

      return {
        id: v.id,
        ...(data as PostData),
      };
    });
  }, [postsSn]);

  useEffect(() => {
    getCountFromServer(collection(firestore, "/posts")).then((v) =>
      setTotal(v.data().count)
    );
  }, []);

  const fetchPosts = useCallback(async () => {
    const snapshot = await getDocs(
      query(
        collection(firestore, "/posts"),
        orderBy("created", "desc"),
        limit(maxPosts)
      )
    );

    setPostsSn(snapshot.docs);
  }, []);

  const canLoadMore = useMemo(
    () => (postsSn?.length || 0) < (total || 0),
    [postsSn, total]
  );

  const loadRest = async () => {
    if (postsSn && postsSn.length && total && canLoadMore) {
      const last = postsSn.at(-1);

      const docs = await getDocs(
        query(
          collection(firestore, "/posts"),
          orderBy("created", "desc"),
          startAfter(last)
        )
      );

      setPostsSn((v) => [...(v || []), ...docs.docs]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loadRest,
    canLoadMore,
  };
};

export default usePosts;
