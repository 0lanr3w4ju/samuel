import React, { useState } from "react";

// styling imports
import { Row, Col, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import { FormStyle, InnerFormStyle, ButtonStyle } from '../reusables-css/ContactMeForm';

// http requests
import axios from "axios";


const ContactMeForm = () => {
    const clientCredential = {
        fullname: '',
        email: '',
        comment: ''
    };

    const [emailState, setEmailState] = useState('');
    
    const [credential, setCredential] = useState(clientCredential);

    const onInputChange = e => {
        const { name, value } = e.target;
        setCredential({ ...credential, [name]: value });
        console.log(credential);
        if (e.target.type === "email") validateEmail(e);
    };

    const validateEmail = (e) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRegex.test(e.target.value)) {
            setEmailState('has-success');
        } else setEmailState('has-danger');
    }

    const onSubmit = event => {
        event.preventDefault();
        const { fullname, email, comment } = credential;
        
        axios.post('http://localhost:8000/contact/', { fullname, email, comment })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else if (err.request) {
                    console.log(err.request);
                } else console.log('Error', err.message);
            });
        setEmailState("");
        setCredential(clientCredential);
    };

    return (
        <FormStyle>
                <Form
                    onSubmit={onSubmit}
                >
                    <InnerFormStyle>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="comment"
                                placeholder="Hello! what will you like me to do for you? 😇"
                                onChange={onInputChange}
                                style={{ height: 300, fontFamily: 'Noto Sans Mono, monospace' }}
                                value={credential.comment}
                            />
                        </FormGroup>

                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                        type="fullname" name="fullname" placeholder="please enter your fullname"
                                        onChange={onInputChange}
                                        value={credential.fullname}
                                        style={{ fontFamily: 'Noto Sans Mono, monospace' }}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email" placeholder="please enter your email"
                                        onChange={onInputChange}
                                        valid={emailState === 'has-success'}
                                        invalid={emailState === 'has-danger'}
                                        value={credential.email}
                                        style={{ fontFamily: 'Noto Sans Mono, monospace' }}
                                    />
                                    <FormFeedback >
                                        Looks like there is an issue with your email. Please input a correct email.
                                    </FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>

                        <ButtonStyle
                            type="submit"
                            style={{ fontFamily: 'Noto Sans Mono, monospace', fontWeight: 'bold' }}
                        >
                            Submit
                        </ButtonStyle>

                    </InnerFormStyle>
                </Form>
            </FormStyle>
    )
}

export default ContactMeForm;