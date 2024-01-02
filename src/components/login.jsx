import React, { useState, useCallback, useEffect } from "react";
import { Input, Hint, Submit } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import { emailValidation, passwordValidation } from "../validations";
import AuthServices from "../services/auth";

const Login = () => {
    // INITIAL STATES
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.auth);
    const [validateMsg, setValidateMsg] = useState("");
    const [msgClass, setMsgClass] = useState("invalid");

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(signUserStart());
        const user = { email, password };
        try {
            const data = await AuthServices.loginUser(user);
            dispatch(signUserSuccess(data.user));
        } catch (e) {
            dispatch(signUserFailure());
            setMsgClass("danger");
            setValidateMsg("Email yoki parol xato");
        }
    };

    useEffect(() => {
        if (msgClass.length > 1 && validateMsg.length > 1) {
            setTimeout(() => {
                setValidateMsg("");
                setMsgClass("");
            }, 3000);
        }
    }, [msgClass, validateMsg]);

    const passwordValidate = useCallback(() => {
        return passwordValidation(password);
    }, [password]);

    const emailValidate = useCallback(() => {
        return emailValidation(email);
    }, [email]);

    const checkForm = useCallback(() => {
        if (emailValidate() === "valid" && passwordValidate() === "valid")
            return true;
        return false;
    }, [emailValidate, passwordValidate]);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border-warning border-3 mt-5">
                        <div className="card-body">
                            <h3 className="text-center mb-3">Kirish</h3>
                            <label className={`text-${msgClass}`}>
                                {validateMsg}
                            </label>
                            <form>
                                <Input
                                    label={"Email manzilini kiriting"}
                                    state={email}
                                    setState={setEmail}
                                    type="email"
                                    valid={emailValidate()}
                                />
                                <Input
                                    type={"password"}
                                    label={"Parolni kiriting"}
                                    state={password}
                                    setState={setPassword}
                                    valid={passwordValidate()}
                                />
                                <Submit
                                    isLoading={isLoading}
                                    clickHandler={loginHandler}
                                    label={"Kirish"}
                                    valid={checkForm()}
                                />
                                <Hint
                                    a={"yarating"}
                                    href={"/register"}
                                    warning={"Agrar hisobingiz bo'lmasa uni"}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
