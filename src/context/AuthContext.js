import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";

// const INIT_STATE = {
//     user: {
//         _id: "60b75f778c33900a7845cd7b",
//         profilePicture: "/landscape.jpeg",
//         coverPicture: "",
//         followers: [],
//         isAdmin: false,
//         username: "QUAssNG",
//         email: "coccc@gmail.com",
//         password:"$2b$10$RhOPgZ.voYhshYsb2t39pOICgDnUK4wF9XDYFinNphVb0GoKQvtci",
//         createdAt:"2021-06-02T10:37:31.747+00:00",
//         updatedAt:"2021-06-29T14:16:53.753+00:00",
//         city: "Ho Chi Minh",
//         from: "Viet Nam",
//         relationship: 1
//     },
//     isFetching: false,
//     error: false
// }
const INIT_STATE = []
export const AuthContext = createContext(INIT_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INIT_STATE);
    return (
        <AuthContext.Provider value={{user: state.user, 
        isFetching: state.isFetching, 
        error: state.error, 
        dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    ) 
}