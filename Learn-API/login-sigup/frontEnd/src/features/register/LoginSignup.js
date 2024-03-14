import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import { Link, useNavigate } from "react-router-dom";
import LoginGoogle from "../loginGoogle";
import Input from "../../components/Input/Input";

axios.defaults.withCredentials = true;

export const LoginSignup = () => {
  const [message, setMessage] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate("/");

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
      .then((res) => {
        console.log("Sign up successful:", res.data);
        setMessage("Registration successful");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Sign up failed:", err);
        setMessage("An error occurred");
      });
  };

  const handleSignIn = () => {
    // Kiểm tra xem người dùng đã nhập đủ thông tin hay không
    if (!values.email || !values.password) {
      setMessage("Please enter email and password");
      return; // Không thực hiện chuyển hướng nếu thiếu thông tin
    }

    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:8088/login", values)
      .then((res) => {
        console.log("Sign in successful:", res.data);
        setMessage("Login successful");
        navigate("/home");
      })
      .catch((err) => {
        console.error("Sign in failed:", err);
        setMessage("Wrong email or password!");
      });
  };

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={handleSignUp}>
              <div className='text-2xl font-semibold'>Get started.</div>
              <Input
                name='email'
                
                type='email'
                className='mt-8'
                
                placeholder='Email'
                autoComplete='on'
                onChange={handleInputChange}
              />
              <Input
                name='password'
                
                type='password'
                className='mt-2'
                
                placeholder='Password'
                autoComplete='on'
                onChange={handleInputChange}
              />
              <Input
                name='confirm_password'
                
                type='password'
                className='mt-2'
               
                placeholder='Confirm Password'
                autoComplete='on'
                onChange={handleInputChange}
              />
              <div>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white  text-sm hover:bg-red-600'>
                  Register
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-slate-400'>Already have an account? </span>
                  <Link className='text-red-400 ml-2' to='/login'>
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
