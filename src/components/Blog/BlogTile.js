import React from "react"
import { Badge, Stack } from "react-bootstrap";
import {
    FaArrowRight
} from "react-icons/fa";

function BlogTile({ data, content, readTime }) {
    console.log(data.title)
    return (
        <div className='blog'>
            <div className="blogheader">
                <p>{data.title}</p>
            </div>
            <div className='blogcontent'>
                <p>
                    {data.description}            
                </p>
            </div>
            <Stack direction="horizontal" gap={3} className="badges">
                {
                    data.tag_list.map((tag)=>(
                        <Badge pill key={tag} bg="secondary">{tag}</Badge>
                    ))
                }
            </Stack>
            <div className="moredetail">
                {console.log(data.link)}
                <a href={data.url} target="_blank" style={{textDecoration:"none",   color: "#623686"}}>Learn more <FaArrowRight/> </a>
            </div>
        </div>     
    );
}

export default BlogTile;