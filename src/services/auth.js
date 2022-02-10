import React, { useEffect, useState } from "react";


export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        name: "",
        avatar: "",
        token: ""
    })

    useEffect(() => {
        const userStorage = localStorage.getItem("user")

        if(userStorage){
            setUser(JSON.parse(userStorage));
        }

    }, [])


    return (
        <AuthContext.Provider value = {{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useUser = () => React.useContext(AuthContext);