import axios from "./api";

const AuthServices = {
    async registerUser(user) {
        const { data } = await axios.post("/users", { user });
        return data;
    },
    async loginUser(user) {
        const { data } = await axios.post("/users/login", { user });
        return data;
    },
    async getUser() {},
};

export default AuthServices;
