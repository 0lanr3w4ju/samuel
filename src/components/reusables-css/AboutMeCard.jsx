import styled from '@emotion/styled';

export const BaseCard = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.1);
    width: 80%;
    height: 80%;
    display: flex;
    z-index: 0;
    border-radius: 0.9em;

    @media (max-width: 425px) {
        margin-top: 15px;
        width: 304px;
        height: 465px;
    }
`;

export const ProfilePic = styled.img`
    width: 38%;
    height: 94%;
    border-radius: 0.9em;
    z-index: 1;
    margin-top: 80px;
    margin-left: 80px;
    filter: grayscale(90%) brightness(150%);
    box-shadow: 0 12px 41px black;

    @media (max-width: 425px) {
        display: none;
    }
`;

export const AboutMe = styled.div`
    width: 38%;
    height: 94%;
    background-color: transparent;
    z-index: 1;
    margin-top: 80px;
    margin-left: 80px;
    align-items: left;

    @media (max-width: 425px) {
        width: 100%;
        padding: 25px;
        margin-left: 0px;
        margin-top: 0px;   
    }
`;

export const HeaderText = styled.h1`
    font-family: 'Noto Sans Mono, monospace';
    font-weight: bold;
    font-size: 45px;
    color: powderblue;
    filter: opacity(81%);
    border-top: 2px solid bisque;
    padding-top: 20px;
    padding-bottom: 12px;
    span {
        font-size: 21px;
        color: bisque;
        filter: opacity(81%);
    }

    @media (max-width: 425px) {
        font-size: 16px;
        span {
            font-size: 17px;
        }
    }
`;

export const Text = styled.p`
  font-size: 18px;
  color: powderblue;
  font-family: 'Noto Sans Mono, monospace';
  filter: opacity(81%);

  @media (max-width: 425px) {
      font-size: 15px;
  }
`;

export const SocialIcons = styled.div`
    display: flex;
    span {
        padding-right: 30px;
    };
    a {
        color: bisque;
        filter: opacity(81%);
    }

    @media (max-width: 425px) {
        margin-left: 83px;
        span {
            padding-right: 11px;
        }
        a {
            font-size: 14px;
        }
    }
`;