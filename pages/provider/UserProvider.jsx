import React, { createContext, useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router';


export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
     const userData = JSON.parse(localStorage.getItem('insurance-login'));
        setUser(userData);
    }, [setUser, router])
    
    
    const login = (userData) => {
        localStorage.setItem('insurance-login',JSON.stringify(
            {
                username : userData.users.username,
                role : userData.users.role,
                id : userData.users.id
            }
            ));
    }

    const handleLogout = () => {
        localStorage.removeItem('insurance-login');
        setUser(null);
        router.push('/Login');
    };

    return (
        <UserContext.Provider value={{login, handleLogout, user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

export const useUserContext = () => {
    return useContext(UserContext);
};