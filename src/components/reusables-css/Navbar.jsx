import styled from '@emotion/styled';

export const TaglineStyle = styled.div`
    font-weight: bold;
    font-size: 22px;
    color: white;
    font-family: 'Noto Sans Mono', monospace;
    span {display: none;}
    &:hover {
        span {
            display: initial;
            color: black;
        }
        cursor: pointer;
    }
`;

export const NavLinkStyle = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: white;
`;

 /* content: 'Ethical Hacker'; */