import React, {Components} from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
class Header extends Components {
    render() {
        return(
         <>
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the world's best cuisines, and crate a uniquw fusion experience. Our lipsmacking...</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
         </>
        );
    }
}

export default Header;