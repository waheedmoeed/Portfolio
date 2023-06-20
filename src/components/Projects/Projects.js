import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cashero"
              description="Cashero is a multi-currency high-yields, currency exchange, and instant cross-border payments. Worked on backend side built various microservices using Go by following event driven architecture and modern tools like kafka, docker."
              demoLink="https://www.cashero.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CrowdZap Chain"
              description="A personal project to to learn blockchain at core level. CrowdZap is basically a crowdfunding platform and market place for investors to buy and sell both crypto and ERC20 tokens. Developed chain from scratch using Cosmos SDK and Tendermint."
              ghLink="https://github.com/waheedmoeed/crowdzapchain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Waafi"
              description="Waafi is a super app have many features like mobile money, bill payments, online payments, calls over VOIP and many more. Joined the team during revamping of backend services, helped my team to shift to micro services architecture and rewrite the services written in Node.JS  to GO."
              ghLink="#"
              demoLink="https://www.waafi.com/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
