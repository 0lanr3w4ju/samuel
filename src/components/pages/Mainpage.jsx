import { MainpageStyle } from '../pages-css/Mainpage';
import ContactMeForm from '../reusables/ContactMeForm';
import Navigationbar from '../reusables/Navbar';

const Mainpage = () => {

    return (
        <MainpageStyle>
            <Navigationbar />
            <ContactMeForm />
        </MainpageStyle>
    )
}

export default Mainpage;