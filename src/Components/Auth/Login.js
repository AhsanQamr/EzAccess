import React from "react";
import unlock from "../../../src/Assets/auth_img/unlock.svg";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <>
            <div className={styles.background__image} />
            <h1 className={styles.heading}>EzAccess</h1>
            <div className={styles.container}>
                <img className={styles.lock__img} src={unlock} alt="wave"/>
                <form className={styles.form__card}>
                    <h3>Login</h3>
                    <hr />
                    <div className={styles.input__container}>
                        <label className={styles.label__text}>Email</label>
                        <input className={styles.input__text} type="email" placeholder="Enter Email"  />
                    </div>
                    <div className={styles.input__container}>
                        <label className={styles.label__text}>Password</label>
                        <input className={styles.input__text} type="password" placeholder="Enter Password" />
                    </div>

                    <div className={styles.input__button}>
                        <button className={styles.button__text} type="submit">Login</button>
                    </div>
                    <div className={styles.new__user}>
                        <p>New User? <a href="/signup">Create Account</a></p>
                    </div>
                    <hr />
                </form>
            </div>
        </>
    );
};

export default Login;