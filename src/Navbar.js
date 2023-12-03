import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activestyle="true">
                        Home
                    </NavLink>
                    <NavLink to="/login" activestyle="true">
                        Sign In
                    </NavLink>
                    <NavLink to="/signup" activestyle="true">
                        Sign Up
                    </NavLink>
                    <NavLink to="/profile" activestyle="true">
                        Profile
                    </NavLink>
                    <NavLink to="/routine" activestyle="true">
                        Routine
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
  };
  
  export default Navbar;