import React, { useState } from 'react';

// style import
import { MainpageStyle } from '../pages-css/Mainpage';

// component import
import Navigationbar from '../reusables/Navbar';

// animation import
// import ReactCSSTransitionGroup from 'react-transition-group';

const Mainpage = () => {

    const [selectedNavOption, setSelectedNavOption] = useState('');
    
    const DynamicSect = () => {
        return (
                selectedNavOption
        );
    }

    return (
        <MainpageStyle>
            <Navigationbar setSelectedNavOption={setSelectedNavOption} />
            <DynamicSect />
        </MainpageStyle>
    )
}

export default Mainpage;