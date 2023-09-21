import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
const{id,title} = post;
const navigate = useNavigate()
const PostStyle = {
    border: '2px solid yellow',
    padding: '10px',
    borderRadius:'20px'
}
const handleShowDetails = () =>{
  navigate(`/post/${id}`);
}
    return (
        <div style={PostStyle}>
            <h4>Post of id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>ShowDetails</button></Link>
            <button onClick={handleShowDetails} >Click me see details</button>
        </div>
    );
};

export default Post;