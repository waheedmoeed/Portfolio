import  React from "react";
import axios from "axios";
import BlogTile from "./BlogTile";
import Particle from "../Particle";
import { Col, Container, Row } from "react-bootstrap";

function Blogs(){
    const [posts, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get("https://dev.to/api/articles?username=waheed38").then((response) => {
            setPost(response.data);
        });
    }, []);

    return (
            <Container className="blogs">
                <Row style={{justifyContent:"space-between"}} className="row-eq-height">
                {
                    posts?
                        Array.isArray(posts)?
                            posts.map((post)=>
                                (
                                    <Col md={4} sm={6} xs={12}>
                                    <BlogTile data={post} content={post.content} readTime={post.text} />
                                    <br/>
                                    <br/>
                                    </Col>     
                                                  
                                )
                            )
                            :
                            <>
                                <h1>NO Blogs founded</h1>
                            </>
                        :
                        <>
                            <Particle/>
                        </>
                }
                </Row>
            </Container>
    )


}

export default Blogs