import styled from "@emotion/styled";

export const FormStyle = styled.div`
    text-align: left;
    width: 750px;
    padding: 1em;
    border: 1px solid #d3d3d3;
    border-radius: .4em;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, 0.1);

    @media (max-width: 425px) {
        width: 304px;
        padding: 2px;
        margin-top: 15px;
    }
`;

export const InnerFormStyle = styled.div`
    padding: 1em !important;
`;

export const ButtonStyle = styled.button`
    display: block;
    width: 100%;
    border-radius: .25rem;
    background: #007bff;
    padding: .375rem .75rem;
    font-weight: 400;
    text-align: center;
    border: none;
    color: #fff;
    -webkit-transition: background .15s ease-out;
    -moz-transition: background .15s ease-out;
    -o-transition: background .15s ease-out;
    transition: background .15s ease-out;
    &:hover {
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
        cursor: pointer;
        opacity: 70%;
        }
`;

export const FormFeedbackStyle = styled.p`
    color: white;
`;

export const FormInputStyle = styled.div`
    fontFamily: 'Noto Sans Mono, monospace',

    @media (max-width: 425px) {
        font-size: 13px;
    }
`;