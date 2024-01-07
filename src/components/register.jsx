import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Hint, Input, Submit } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
    signUserFailure,
    signUserStart,
    signUserSuccess,
} from "../slice/auth";
import AuthServices from "../services/auth";
import {
    emailValidation,
    passwordValidation,
    usernameValidation,
} from "../validations";
import { useNavigate } from "react-router-dom";

const Register = () => {
    // INITIAL STATES
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validateMsg, setValidateMsg] = useState("");
    const [msgClass, setMsgClass] = useState("invalid");
    const navigate = useNavigate()
    // REDUX STATES
    const dispatch = useDispatch();
    const { isLoading, isAuth } = useSelector((state) => state.auth);
    // HANDLERS
    const registerHandler = async (e) => {
        e.preventDefault();
        dispatch(signUserStart());
        const user = { username, email, password };
        try {
            const data = await AuthServices.registerUser(user);
            dispatch(signUserSuccess(data.user));
            setMsgClass("success");
            setValidateMsg("Muvaffaqiyatli ro'yxatdan o'tdingiz");
            setEmail("");
            setUsername("");
            setPassword("");
            navigate("/")
        } catch (e) {
            if (e.response.data.errors.email) {
                setValidateMsg("Bu email allaqachon ro'yxatdan o'tgan");
                setMsgClass("danger");
            } else if (e.response.data.errors.username) {
                setValidateMsg(
                    "Bu foydalanuvchi nomi allaqachon ro'yxatdan o'tgan"
                );
                setMsgClass("danger");
            }
            dispatch(signUserFailure());
        }
    };
    // VALIDATIONS
    const passwordValidate = useCallback(() => {
        return passwordValidation(password);
    }, [password]);

    const usernameValidate = useCallback(() => {
        return usernameValidation(username);
    }, [username]);

    const emailValidate = useCallback(() => {
        return emailValidation(email);
    }, [email]);

    const checkForm = useCallback(() => {
        if (
            usernameValidate() === "valid" &&
            emailValidate() === "valid" &&
            passwordValidate() === "valid"
        )
            return true;
        return false;
    }, [usernameValidate, emailValidate, passwordValidate]);

    useEffect(() => {
        if (msgClass.length > 1 && validateMsg.length > 1) {
            setTimeout(() => {
                setValidateMsg("");
                setMsgClass("");
            }, 3000);
        }
    }, [msgClass, validateMsg]);

    useEffect(()=>{if(isAuth){navigate('/')}},[isAuth])

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border-warning border-3 mt-5">
                        <div className="card-body">
                            <h3 className="text-center mb-3">
                                Ro'yxatdan o'tish
                            </h3>
                            <label className={`text-${msgClass}`}>
                                {validateMsg}
                            </label>
                            <form>
                                <Input
                                    type={"email"}
                                    label={"Email mainzilini kiriting"}
                                    state={email}
                                    setState={setEmail}
                                    valid={emailValidate()}
                                />
                                <Input
                                    label={"Foydalanuvchi nomi"}
                                    state={username}
                                    setState={setUsername}
                                    valid={usernameValidate()}
                                />
                                <Input
                                    type={"password"}
                                    label={"Parol"}
                                    state={password}
                                    setState={setPassword}
                                    valid={passwordValidate()}
                                />
                                <Submit
                                    isLoading={isLoading}
                                    valid={checkForm()}
                                    clickHandler={registerHandler}
                                    label={"Ro'yxatdan o'tish"}
                                />
                                <Hint
                                    a={"kiriting"}
                                    href={"/login"}
                                    warning={"Agar hisobingiz bo'lsa uni"}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
