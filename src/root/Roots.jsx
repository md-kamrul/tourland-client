import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Roots = () => {
    return (
        <div>

            <Outlet></Outlet>

            <Footer></Footer>
            
        </div>
    );
};

export default Roots;