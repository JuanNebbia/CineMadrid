import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user){
            setUser(JSON.parse(user))
        }
    }, [])

    const login = (loginUser) => {
        localStorage.setItem('user', JSON.stringify(loginUser));
        setUser(loginUser);
    }
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}  

export const useAuth = () => useContext(AuthContext);