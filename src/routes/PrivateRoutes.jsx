import { useContext } from "react";
import { EventContext } from "../provider/UserProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(EventContext)
    if(loading){
        return <span className="loading loading-ring loading-lg text-orange-400"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to ='/login'></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes ={
    children: PropTypes.node
}