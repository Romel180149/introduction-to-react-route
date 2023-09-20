import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = ({user}) => {
    const users = useLoaderData()
    // console.log(users);
    return (
        <div>
          <h1>Our users:{users.length}</h1> 
          <p>Fantastic and vodro users</p> 
          <div>
           {
            users.map(user=><User key={user.id} user={user}></User>)
           }
          </div>
        </div>
    );
};

export default Users;