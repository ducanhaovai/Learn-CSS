import React, { useEffect, useState } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const Indexs = () => {
  const [auth, setAuth] = useState(false);
  const [name, setname] = useState('');
  const [message, setMessage] = useState('')
 

  useEffect(() => {
    axios.get('http://localhost:8088/home')
    .then(res => {
        if(res.data.Status === "Success"){
            setAuth(true);
            setname(res.data.name)
        } else {
            setAuth(false);
           setMessage(res.data.Message);
        }

    })
  }, [])
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.get('http://localhost:8088/logout')
    .then( res => {
        if(res.data.Status === "Success"){
            // Sử dụng useNavigate để điều hướng lại trang
            
            navigate('/login', { replace: true }); // Thay thế trang hiện tại trong history
        } else {
            alert("error");
        }
    }).catch(err => console.log(err));
};
  return (
    <div>
      {auth ? (
        
        <div className="summit-container">
          <h3>Da xac nhan{name}</h3>
          <button className="sign-in" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="summit-container">
            <h3>chua xac nhan: {message}</h3>
            <button className="sign-in" >Login in </button>
        </div>
      )}
    </div>
  );
};
