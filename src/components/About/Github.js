import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        DevOps isn’t a toolset — <strong className="purple">it’s a mindset of continuous improvement.</strong>
      </h1>
    </Row>
  );
}

export default Github;
