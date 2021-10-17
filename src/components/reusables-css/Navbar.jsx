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

export const NavOptions = styled.div`

`;

export const NavOption = styled.button`
    height: 43px;
    font-family: 'Noto Sans Mono', monospace;
    font-weight: bold;
    padding: 0.6em 1.6em;
    margin: 0.6em;
    border-style: solid;
    border-width: 1px;
    border-color: #f7fbff;
    transition: all 0.2s ease;
    background: transparent;
    color: #f7fbff;
    z-index: 1;
    &:hover {
        color: bisque;
        text-shadow: 0 0 1px rgb(255 255 255 / 40%);
        box-shadow: 0 0 0px 1px rgb(255 255 255 / 50%), 2px 2px 6px rgb(49 188 184 / 40%), -2px -2px 6px rgb(251 131 250 / 40%);
        }
`;