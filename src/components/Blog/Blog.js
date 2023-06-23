import  React from "react";
import axios from "axios";
import BlogTile from "./BlogTile";
import Particles from "react-tsparticles";
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
            <Row>
        {
            posts?
                Array.isArray(posts)?
                    posts.map((post)=>
                        (
                            <>
                            <Col md={4}>
                            <BlogTile data={post} key={post.id} content={post.content} readTime={post.text} />
                            </Col>
                            <Col md={4}>
                            <BlogTile data={post} key={post.id} content={post.content} readTime={post.text} />
                            </Col>
                            </>
                        )
                    )
                    :
                    <>
                        <h1>NO Blogs founded</h1>
                    </>
                :
                <>
                    <Particles/>
                </>
        }
        </Row>
        </Container>
    )


}

export default Blogs