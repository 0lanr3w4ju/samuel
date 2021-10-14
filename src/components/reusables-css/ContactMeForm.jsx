import styled from "@emotion/styled";

export const FormStyle = styled.div`
    text-align: left;
    width: 750px;
    padding: 1em;
    border: 2px solid #d3d3d3;
    border-radius: .5em;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
`

export const InnerFormStyle = styled.div`
    padding: 1em;
`

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
`