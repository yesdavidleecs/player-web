import { useContext, useState } from "react";
import AuthContext from "../AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import Navbar from '../Navbar';
import { addRoutine } from "../handles/handleroutine"

const Routine = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState("");

    const addRoutineHandler = async (e) => {
        e.preventDefault();
        if(name) {
            await addRoutine({
                name: name
            });
        }
    }
  
    if (!user) {
      return <Navigate replace to="/login" />;
    }
    return (
      <>
        <Navbar />
        <h1>Routine</h1>
        <form onSubmit={addRoutineHandler} className="add-routine">
            <input
            type="text"
            name="name"
            value={name}
            placeholder="New Routine Name"
            onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" value="submit" />
        </form>
      </>
    );
  };
  
  export default Routine;
  