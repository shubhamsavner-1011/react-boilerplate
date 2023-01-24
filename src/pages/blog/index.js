import React, { useEffect, useState } from 'react';
import { Post } from '../../service';

export const Blog = () => {
  // throw new Error ('Not Validate')
  const [data, setData] = useState();
  const [error, setError] = useState();
  console.log(data, 'data/error', error);

  useEffect(() => {
    Post.getPosts()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      });
    return () => {};
  }, []);

  return <div>Blog</div>;
};
