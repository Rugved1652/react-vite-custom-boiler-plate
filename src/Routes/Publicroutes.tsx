import React, { useEffect } from 'react'
import { getCookie } from '../Utils/cookies';
import { useNavigate } from 'react-router-dom';

type Props = {
    children : React.ReactNode
}

const publicRoute = ({children}: Props) => {
    const navigate = useNavigate();
    const accessToken = getCookie("accessToken");
    useEffect(() => {
        if (accessToken) {
          navigate("/home");
        } else {
        }
      },[ accessToken, navigate]);

  return (
    
    <>{children}</>
  )
}

export default publicRoute