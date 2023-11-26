import { useContext } from "react";
import AuthContext from "../AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import { logOut } from "../handles/handleauth";
import Navbar from '../Navbar';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
      console.log("logout");
      await logOut();
  
    };
  
    if (!user) {
      return <Navigate replace to="/login" />;
    }
    return (
      <>
        <Navbar />
        <h1>Profile</h1>

        <button onClick={handleLogout}>Logout</button>
      </>
    );
  };
  
  export default Profile;
  