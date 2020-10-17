import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import Userpic from "./user.png";
import { Trash } from "react-bootstrap-icons";

import "./PostList.scss";
import { connect } from "react-redux";
import { deletePost } from "../../redux/actions/post.actions";

const PostList = ({ post, deletePost }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleClose = () => {
    setShowDeleteModal(false);
  };
  const onDeleteHandler = (postId) => {
    deletePost(postId);
    setShowDeleteModal(false);
  };
  return (
    <>
      <Card
        style={{ width: "100%", height: "100px" }}
        className="card-item mb-3"
      >
        <Card.Body className="d-flex">
          <div
            style={{
              border: "2px solid black",
              padding: "5px",
              borderRadius: "5px",
              color: "grey",
              fontSize: "2rem",
              width: "10%",
              height: "100%",
            }}
          >
            <h1 className="text-center">
              {post.title.split("")[0].toUpperCase()}
            </h1>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <div className="d-flex flex-column ml-2">
              <Card.Text>
                <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  {post.title}
                </span>
              </Card.Text>
              <Card.Text>
                <span>Published on : {post.date}</span>
              </Card.Text>
            </div>

            <div className="d-flex  ">
              <div
                className="delete-item  mr-2"
                onClick={() => setShowDeleteModal(true)}
              >
                <Trash />
              </div>
              <div classNmae="d-flex flex-column">
                <img
                  alt="user_picture"
                  src={Userpic}
                  style={{ width: "20%", borderRadius: "50px" }}
                />
                <p>
                  {" "}
                  Written By;{" "}
                  <span className="text-success">
                    {post.author ? post.author : "Anonymous"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Modal show={showDeleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => onDeleteHandler(post._id)}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(null, { deletePost })(PostList);
