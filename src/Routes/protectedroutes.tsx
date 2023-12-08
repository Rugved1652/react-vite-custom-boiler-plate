import React, { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie} from "../Utils/cookies";
import Home from "../Pages/Home";

type Props = {
    children : ReactNode
}

const ProtectedRoute = React.memo(() => {
  const navigate = useNavigate();
  const accessToken = getCookie("accessToken");

  // console.log(currentUser);
  // console.log(accessToken);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    } else {

    }
  },[ accessToken, navigate]);

  return (
    <>
    <Home/>
    </>
  )

});

export default ProtectedRoute;
