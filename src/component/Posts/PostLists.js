import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./PostList";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const PostLists = ({ allPosts }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(allPosts);
  }, [allPosts]);

  if (posts.length > 0) {
    return posts.map((post) => <PostList post={post} />);
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" size="lg" />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    allPosts: state.post.allPosts,
  };
};

export default connect(mapStateToProps)(PostLists);
