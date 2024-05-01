/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    Default_Post_List
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const Default_Post_List = [
  {
    id: "1",
    title: "Go to Mountain",
    body: "Hey Everyone, I am at Everest",
    reactions: 7,
    userId: "user-9",
    tags: ["vacation", "trekking", "framewithrk"],
  },
  {
    id: "2",
    title: "Go to Beach",
    body: "Hey Everyone, I am at Goa beach",
    reactions: 20,
    userId: "user-10",
    tags: ["vacation", "sunset", "framewithrk"],
  },
];

export default PostListProvider;
