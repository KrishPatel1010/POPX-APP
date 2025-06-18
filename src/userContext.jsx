import React, { createContext, useState } from "react";

export const UserContext = createContext({
    name: "",
    email: "",
    setName: () => { },
    setEmail: () => { },
});

export const UserProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <UserContext.Provider value={{ name, setName, email, setEmail }}>
            {children}
        </UserContext.Provider>
    );
}; 