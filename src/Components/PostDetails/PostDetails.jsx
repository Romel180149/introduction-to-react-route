import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    const{id,title,body}= post;
    const handleGoBack = ()=>{
    navigate(-1)
    }
    return (
        <div>
            <h1>Post details about it: {id}</h1>
            <p>Title:{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;