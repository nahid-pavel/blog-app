import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { createPost } from "../redux/actions/post.actions";

const CreatePost = ({ handleClose, createPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
    };
    createPost(data);
    setTitle("");
    setDescription("");
    handleClose();
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Create A New</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>title </Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Enter your title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmitHandler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

export default connect(null, { createPost })(CreatePost);
