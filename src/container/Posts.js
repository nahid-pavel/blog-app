import React, { useEffect, useState } from "react";
import PostLists from "../component/Posts/PostLists";
import { Modal, Button } from "react-bootstrap";
import CreatePost from "./CreatePost";

const Posts = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-success  mb-2 "
          style={{ width: "15%" }}
          onClick={handleShow}
        >
          {" "}
          + Add New Post
        </button>
      </div>

      <div className="d-flex justify-content-center flex-column">
        <PostLists />
      </div>
      <Modal
        show={showModal}
        animation={true}
        onHide={handleClose}
        size="lg"
        centered
      >
        <CreatePost handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default Posts;
