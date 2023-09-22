import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

// const User = ({ match }) => {
//   return <h1>user {match.params.fname} Page</h1>;
// };
const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  // const history = useHistory();
  console.log(location);

  return (
    <>
      <h1>
        User {fname}
        {lname} Page
      </h1>
      <p>My current location is {location.pathname}</p>
      {/* {location.pathname === `/user/Pradyumna/KumarNaik` ? (
        <button onClick={() => alert("Click Kar Le bhai")}>Click ME</button>
      ) : null} */}


{/* 
      {location.pathname === `user/Pradyumna/KumarNaik` ? (
        <button onClick={() => history.goBack()}>ClickMe</button>
      ) : null} */}
    </>
  );
};
export default User;
