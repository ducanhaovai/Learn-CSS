import React, { useEffect, useState } from "react";
import "./LoginSignup.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Indexs = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('')
  const navigate = useNavigate();
 

  useEffect(() => {
    // Kiểm tra xác thực mỗi khi component được render
    axios.get('http://localhost:8088/home', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    .then(res => {
        if(res.data.Status === "Success"){
            setAuth(true);
            setName(res.data.name)
        } else {
            setAuth(false);
            setMessage(res.data.Message);
        }
    }).catch(err => console.log(err));
  }, []);
  
  
  

  const handleLogout = () => {
    axios.get('http://localhost:8088/logout')
    .then( res => {
        if(res.data.Status === "Success"){
            navigate('/login', { replace: true }); 
        } else {
            alert("error");
        }
    }).catch(err => console.log(err));
  };

  const handleLogin = () => {
    navigate('/login', { replace: true });
  };

  return (
    <div>
      
      {auth ? (
        <div className="summit-container">
          <h3>Đã xác nhận: {name}</h3>
          <button className="sign-in" onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <div className="summit-container">
          <h3>Chưa xác nhận: {message}</h3>
          <button className="sign-in" onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  );
};
