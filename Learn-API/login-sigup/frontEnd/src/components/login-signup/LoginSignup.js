import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import "./LoginSignup.css";
import facebook_icon from "../Asset/fb.png";
import google_icon from "../Asset/Logo Google.png";
import x_icon from "../Asset/text.png";
import { useNavigate } from "react-router-dom"

axios.defaults.withCredentials = true;

export const LoginSignup = () => {
  const [message, setMessage] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate('/')

  const [action, setAction] = useState("Sign up");
  const [haveAccountText, setHaveAccountText] = useState(
    "Don’t have an account?"
  );

  const toggleAction = () => {
    if (action === "Sign up") {
      setAction("Sign in");
      setHaveAccountText("Have an account?");
    } else {
      setAction("Sign up");
      setHaveAccountText("Don’t have an account?");
    }
  };

  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8088/signup", values)
      .then(res => {
        console.log("Sign up successful:", res.data);
        setMessage("Registration successful");
        navigate('/login')
         // Chuyển hướng đến đường dẫn '/' sau khi đăng ký thành công
      })
      .catch((err) => {
        console.error("Sign up failed:", err);
        setMessage("An error occurred");
        // Xử lý lỗi khi đăng ký không thành công, ví dụ: hiển thị thông báo lỗi
      });
  };

  const handleSignIn = () => {
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:8088/login", values)
      .then((res) => {
        console.log("Sign in successful:", res.data);
        setMessage("Login successful");
        navigate('/home');
        // Đăng nhập thành công, bạn có thể thực hiện các hành động khác ở đây, chẳng hạn chuyển hướng trang
      })
      .catch((err) => {
        console.error("Sign in failed:", err);
        setMessage("Wrong email or password!");
        // Xử lý lỗi khi đăng nhập không thành công, ví dụ: hiển thị thông báo lỗi
      });
  };
 

  return (
    <div>
      <div className="container">
        <header className="heading">
          <h2>Get’s started.</h2>
          <span className="heading-content">
            {haveAccountText}{" "}
            <span className="sign-up" onClick={toggleAction}>
              {action}
            </span>
          </span>
        </header>
        <div className="social">
          <button className="fb">
            <img src={facebook_icon} alt="Facebook" />
          </button>
          <button className="google">
            <img src={google_icon} alt="Google" />
          </button>
          <button className="X">
            <img src={x_icon} alt="Close" />
          </button>
        </div>
        <div className="middle">
          <div className="rectangle"></div>
          <span>or login with email</span>
          <div className="rectangle"></div>
        </div>

        <div className="content">
          {action === "Sign in" && (
            <div className="input">
              <span className="text">Name</span>
              <input
                className="text-input"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                autoFocus
                required
              />
            </div>
          )}
          <div className="input">
            <span className="text">Email</span>
            <input
              className="text-input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              autoFocus
              required
            />
          </div>
          <div className="input">
            <span className="text">Password</span>
            <input
              className="text-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="check-box">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        </div>
        <div className="summit-container">
          {action === "Sign in" ? (
            <button type="button" className="sign-in" onClick={handleSignUp}>
              Sign up
            </button>
          ) : (
            <button type="button" className="sign-in" onClick={handleSignIn}>
              Sign in
            </button>
          )}
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};
