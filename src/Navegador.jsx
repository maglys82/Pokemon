import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";



const Navigation = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return (
        <Navbar
            bg="secondary"
            variant="dark"
        >
            <Container className="justify-content-start">
                <i className="fa-sharp fa-solid fa-location-dot "></i>
                <div className="ms-auto ">
                    <NavLink className={setActiveClass}
                        to="/"
                    >
                        Home
                        {" - "}
                    </NavLink>
                    <NavLink className={setActiveClass}
                        to="/pokemon"
                    >
                        Pokemon
                    </NavLink>

                </div>
            </Container>
        </Navbar>
    );
};
export default Navigation;

