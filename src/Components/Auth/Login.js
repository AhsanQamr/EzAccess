import React, { useState } from "react";
import unlock from "../../../src/Assets/auth_img/unlock.svg";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../helper/index";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await loginUser({ email, password });
      if (!response) {
        alert("Can not reach Server");
      }
      if (response.status === 200) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("email", response.email);
        console.log(`name ${response.name}`)
        localStorage.setItem("name", response.name);
        navigate("/");
      } else {
        alert(response.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.background__image} />
      <Link to="/" style={{textDecoration: 'none'}}>
      <h1 className={styles.heading}>EzAccess</h1>
      </Link>
      <div className={styles.container}>
        <img className={styles.lock__img} src={unlock} alt="wave" />
        <form className={styles.form__card} onSubmit={handleSubmit}>
          <h3>Login</h3>
          <hr />
          <div className={styles.input__container}>
            <label className={styles.label__text}>Email</label>
            <input
              className={styles.input__text}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className={styles.input__container}>
            <label className={styles.label__text}>Password</label>
            <input
            onKeyDown={onChange}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.input__button}>
            <button className={styles.button__text} type="submit">
              {isLoading ? <div className={styles.loader}></div> : "Login"}
            </button>
          </div>
          <Link to="/signup">
            <div className={styles.new__user}>
              <p>New User? Create Account</p>
            </div>
          </Link>
          <hr />
        </form>
      </div>
    </>
  );
};

export default Login;
