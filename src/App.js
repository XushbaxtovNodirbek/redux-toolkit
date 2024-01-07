import { Route, Routes } from "react-router-dom";
import { Main, Navbar, Login, Register } from "./components";
import { useDispatch } from "react-redux";
import AuthServices from "./services/auth";
import { signUserFailure, signUserSuccess } from "./slice/auth";
import { useEffect } from "react";
import { getItem } from "./helpers/peresistance-storage";

const App = () => {
    const dispatch = useDispatch();

    const getUser = async () => {
        try {
            const { user } = await AuthServices.getUser();
            dispatch(signUserSuccess(user));
        } catch (error) {
            dispatch(signUserFailure())
        }
    };

    useEffect(() => {
        if(getItem("token"))
            getUser();
    },[])

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;
