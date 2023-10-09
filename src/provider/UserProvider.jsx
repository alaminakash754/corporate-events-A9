import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const EventContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const eventInfo = {
        user,
        createUser,
        signInUser,


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