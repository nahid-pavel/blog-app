import React from "react";
import { Card, Button } from "react-bootstrap";
import Userpic from "./user.png";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const PostList = ({ post }) => {
  return (
    <>
      <Card style={{ width: "100%", height: "100px" }} className="mb-2">
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
            <div className="d-flex flex-column ">
              <img
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
        </Card.Body>
      </Card>
    </>
  );
};

export default PostList;
