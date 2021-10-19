import React, { useState } from 'react';

// style import
import { MainpageStyle } from '../pages-css/Mainpage';
import styled from "@emotion/styled";

// custom component import
import Navigationbar from '../reusables/Navbar';

// animation import
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Mainpage = () => {

    const [selectedNavOption, setSelectedNavOption] = useState('');

    const transitionName = `fade`;
    const appearDuration = 500;
    const enterAndLeaveTimeout = 800;


    const DynamicSectStyle = styled.div`

        height: 100%;

        &.${transitionName}-appear {
            opacity: 0.01;
        }

        &.${transitionName}-appear-active {
            opacity: 1;
            transition: opacity ${appearDuration}ms ease-out;
        }

        &.${transitionName}-enter {
            opacity: 0.01;
        }

        &.${transitionName}-enter-active {
            opacity: 1;
            transition: opacity ${enterAndLeaveTimeout}ms;
        }

        &.${transitionName}-leave {
            opacity: 1;
        }

        &.${transitionName}-leave-active {
            opacity: 0;
            transition: opacity ${enterAndLeaveTimeout}ms;
    }`;
    
    const DynamicSect = () => {
        return (
            <ReactCSSTransitionGroup
                transitionName={transitionName}
                transitionAppear={true}
                transitionAppearTimeout={appearDuration}
                // transitionEnter={true}
                // transitionEnterTimeout={enterAndLeaveTimeout}
                // transitionLeave={true}
                // transitionLeaveTimeout={enterAndLeaveTimeout}
            >
                <DynamicSectStyle>
                    {selectedNavOption}
                </DynamicSectStyle>
            </ReactCSSTransitionGroup>
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