// import React from 'react';
// import axios from 'axios';

// export default class UserList extends React.Component {
//   state = {
//     users: []
//   }

//   componentDidMount() {
//     axios.get(`https://demo.sonicjs.com/v1/users`)
//       .then(res => {
//         debugger;
//         const users = res.data;
//         this.setState({ users });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         {
//           this.state.users
//             .map(user =>
//               <li key={user.id}>{user.firstName}</li>
//             )
//         }
//       </ul>
//     )
//   }
// }

// import { playSweep } from "../../../library/tone-player";
// import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios({
        method:"get", 
        url: "https://demo.sonicjs.com/v1/users?limit=20",
      });
      // debugger;
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
