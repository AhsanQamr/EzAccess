import React, {useState} from "react";
import info from "../../../src/Assets/auth_img/info.svg";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../helper/index";

const SignUp = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const { fullName, email, password } = formData;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await registerUser({ fullName, email, password });
            if (!response) {
                alert("Can not reach Server");
            }
            if (response.status === 200) {
                navigate("/login");
            }
            else {
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
                <img className={styles.lock__img} src={info} alt="wave"/>
                <form className={styles.form__card} onSubmit={handleSubmit}>
                    <h3>SignUp</h3>
                    <hr />
                    <div className={styles.input__container}>
                        <label className={styles.label__text}>Full Name</label>
                        <input className={styles.input__text}
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onChange={onChange}
                            required
                            placeholder="Full Name"   />
                    </div>
                    <div className={styles.input__container}>
                        <label className={styles.label__text}>Email</label>
                        <input className={styles.input__text} 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                            placeholder="Enter Email"
                        
                          />
                    </div>
                    <div className={styles.input__container}>
                        <label className={styles.label__text}>Password</label>
                        <input className={styles.input__text} 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                            placeholder="Enter Password"
                        
                         />
                    </div>
                    <div className={styles.input__button}>
                        <button className={styles.button__text} type="submit"> {isLoading ? <div className="loader"></div> : "Create Account"}</button>
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