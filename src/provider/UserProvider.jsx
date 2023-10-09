import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const EventContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name)
    }

    const signInUser = (email, password, name) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password, name)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])


    const eventInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signWithGoogle,
        


    }
    return (
        <EventContext.Provider value={eventInfo}>
            {children}
        </EventContext.Provider>
    );
};

export default UserProvider;

UserProvider.propTypes ={
    children: PropTypes.node
}