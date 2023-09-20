import { Link } from "react-router-dom";


const Post = ({post}) => {
const{id,title} = post;
const PostStyle = {
    border: '2px solid yellow',
    padding: '10px',
    borderRadius:'20px'
}
    return (
        <div style={PostStyle}>
            <h4>Post of id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>ShowDetails</button></Link>
        </div>
    );
};

export default Post;