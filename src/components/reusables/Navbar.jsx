// styling imports
import { Navbar, NavbarBrand } from 'reactstrap';
import { TaglineStyle, NavOptions, NavOption } from '../reusables-css/Navbar';
import '../reusables-css/Gen.css';

import ContactMeForm from '../reusables/ContactMeForm';
import AboutMeCard from '../reusables/AboutMeCard';

const Navigationbar = ({ setSelectedNavOption }) => {

    const clickOption = (e) => {    

        if (e.target.name === 'navbarButton1') {
            setSelectedNavOption(<AboutMeCard />);
        }

        if (e.target.name === 'navbarButton2') {
            setSelectedNavOption(<ContactMeForm />);
        }
    }

    return (
        <div>
            <Navbar
                fixed="top"
                className="navbarStyle"
            >
                <NavbarBrand href="https://0lanr3w4ju.github.io/samuel/" >
                    <TaglineStyle>
                        [0lanr3w4ju]: Lag05 based Software Engineer<span> = Ethical Hacker</span>
                    </TaglineStyle>
                </NavbarBrand>

                <NavOptions>
                    <NavOption name="navbarButton1" type="button" onClick={clickOption}>
                        About me
                    </NavOption>

                    <NavOption name="navbarButton2" type="button" onClick={clickOption}>
                        Contact me
                    </NavOption>
                </NavOptions>
            </Navbar>
        </div>
    )
}

export default Navigationbar

