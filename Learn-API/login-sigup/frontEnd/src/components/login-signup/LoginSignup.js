import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import facebook_icon from "../Asset/fb.png";
import google_icon from "../Asset/Logo Google.png";
import x_icon from "../Asset/text.png";

export const LoginSignup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  const handleSignUp = () => {
    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => {
        console.log("Sign up successful:", res.data);
        // Đăng ký thành công, bạn có thể thực hiện các hành động khác ở đây, chẳng hạn chuyển hướng trang
      })
      .catch((err) => {
        console.error("Sign up failed:", err);
        // Xử lý lỗi khi đăng ký không thành công, ví dụ: hiển thị thông báo lỗi
      });
  };

  const handleSignIn = () => {
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        console.log("Sign in successful:", res.data);
        // Đăng nhập thành công, bạn có thể thực hiện các hành động khác ở đây, chẳng hạn chuyển hướng trang
      })
      .catch((err) => {
        console.error("Sign in failed:", err);
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
      </div>
    </div>
  );
};
