// styling imports
import {
    BaseCard,
    ProfilePic,
    AboutMe,
    HeaderText,
    Text,
    SocialIcons
} from '../reusables-css/AboutMeCard';
import olanrewaju from '../../assets/imgs/DSC09324.jpg';

// icons imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

const AboutMeCard = () => {
    return (
        <BaseCard>
            <ProfilePic src={olanrewaju} alt="olanrewaju"></ProfilePic>

            <AboutMe>
                <HeaderText>
                    Alawode Olanrewaju<br/><span>Software Engineer / Designer</span>
                </HeaderText>

                <Text>
                    I am an enthusiastic and a nonstop learner, that's what I consider life to be all about, I am also a lover of
                    chess. I think fast and random when it is time to brainstorm or be creative, I love asking people
                    questions, especially questions that leads to discussions about solution processes people would
                    imagine was available to get a task done because their answers help give me a human-centered
                    software design perspective, which aids into development. This attribute have made me a better and
                    faster developer of quality and working codes. I currently know how to use Django, react, and spring boot
                    web development frameworks comfortably and am conversant with various software testing techniques
                    and tools.
                </Text>
                
                <SocialIcons>
                    <a href="https://www.linkedin.com/in/olanrewaju-samuel-alawode-05374516b/">
                        <FontAwesomeIcon icon={faLinkedin} size={'lg'} />
                    </a>
                    
                    <span></span>
                    <a href="https://github.com/0lanr3w4ju?tab=repositories">
                        <FontAwesomeIcon icon={faGithub} size={'lg'} />
                    </a>

                    <span></span>
                    <a href="https://dribbble.com/OlanrewajuDribble">
                        <FontAwesomeIcon icon={faDribbble} size={'lg'} spin />
                    </a>
                </SocialIcons>
            </AboutMe>
        </BaseCard>
    )
}

export default AboutMeCard;