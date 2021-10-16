// styling imports
import {
    BaseCard,
    ProfilePic,
    AboutMe,
    HeaderText,
    Text,
    SocialIcons
} from '../reusables-css/AboutMeCard';

// media import
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
                    I am an enthusiastic, nonstop learner, that's what I consider life to be all about,
                    I also love to play chess. I enjoy thinking fast and random when brainstorming or being creative,
                    I love asking questions, especially those that leads to talks of solution processes people would wish was available to get tasks done,
                    this kind of discussions gives me a human-centered software type of design perspective,
                    which I use in my development phases. This and more attributes makes me a better and faster developer of
                    quality and working software programmes.
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