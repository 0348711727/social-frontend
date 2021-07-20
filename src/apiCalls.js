import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {

        const respond = await axios.post("auth/login", userCredential);
        // await userCredential.storage.setItem("email", respond.data.email)

        dispatch({ type: "LOGIN_SUCCESS", payload: respond.data })
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error})
    }
}