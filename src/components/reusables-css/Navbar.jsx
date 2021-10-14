import styled from '@emotion/styled';

export const TaglineStyle = styled.div`
    font-weight: bold;
    font-size: 22px;
    color: #f7fbff;
    font-family: 'Noto Sans Mono', monospace;
    span {display: none;}
    &:hover {
        span {
            display: initial;
            color: black;
        }
        cursor: pointer;
    }

    @media (max-width: 425px) {
        font-size: 13px;
    }
`;

export const NavLinkStyle = styled.div`
    font-weight: bold;
    font-size: 20px;
    font-family: 'Noto Sans Mono', monospace;
`;