import React, {useContext, useState, useEffect} from 'react'
import firebase from 'firebase'

const AuthContext = React.createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    const signIn = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }

    const signOut = () => firebase.auth().signOut()

    const resetPassword = (email) => firebase.auth().sendPasswordResetEmail(email)

    useEffect(() => {
        const unsuscribe = firebase.auth().onAuthStateChanged(user => { 
            setCurrentUser(user)
            setLoading(false)
        }) 

        return unsuscribe
    }, []);

    const value = {
        currentUser,
        signUp, 
        signIn,
        signOut,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}