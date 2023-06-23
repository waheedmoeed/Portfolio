import {Card, Container} from 'react-bootstrap';

function BlogTile({ data, content, readTime }) {
    console.log(data.title)
    return (
            <div className='blog'>
                <div>
                    <h6 className="blogheader">Header</h6>
                </div>
                <div>
                <div>Primary Card Title</div>
                <div>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </div>
                </div>
            </div>     
    );
}

export default BlogTile;