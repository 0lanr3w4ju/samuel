import { MainpageStyle } from '../pages-css/Mainpage';
import ContactMeForm from '../reusables/ContactMeForm';
import Navigationbar from '../reusables/Navbar';
import AboutMeCard from '../reusables/AboutMeCard';

const Mainpage = () => {

    return (
        <MainpageStyle>
            <Navigationbar />
            <AboutMeCard />
            {/* <ContactMeForm /> */}
        </MainpageStyle>
    )
}

export default Mainpage;