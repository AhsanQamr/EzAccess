import React from "react";
import info from "../../../src/Assets/auth_img/info.svg";
import styles from "./SignUp.module.css";

const SignUp = () => {
    return (
        <>
            <div className={styles.background__image} />
            <h1 className={styles.heading}>EzAccess</h1>
            <div className={styles.container}>
                <img className={styles.lock__img} src={info} alt="wave"/>
                <form className={styles.form__card}>
                    <h3>SignUp</h3>
                    <hr />
                    <div className={styles.input__container}>
                        <label className={styles.label__text}>Email</label>
                        <input className={styles.input__text} type="email" placeholder="Enter Email"  />
                    </div>
                    <div className={styles.input__container}>
                        <label className={styles.label__text}>Password</label>
                        <input className={styles.input__text} type="password" placeholder="Enter Password" />
                    </div>
                    <div className={styles.input__container}>
                        <label className={styles.label__text}>Re-enter Password</label>
                        <input className={styles.input__text} type="password" placeholder="Re enter Password" />
                    </div>

                    <div className={styles.input__button}>
                        <button className={styles.button__text} type="submit">Sign Up</button>
                    </div>
                    <div className={styles.new__user}>
                        <p>Alreay a User? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;