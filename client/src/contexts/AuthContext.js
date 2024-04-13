import React, { useContext, createContext, useState, useEffect} from 'react';
import {auth } from '../firebase'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}


//provider function
export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email,password) {
        
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email,password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function logout() {
        auth.signOut();
    }

    useEffect(() => {
        //get current user signed-in
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        
        return unsubscribe;
   }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
// end provider function
