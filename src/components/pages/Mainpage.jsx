import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Input, Button, FormFeedback } from 'reactstrap';
import { MainpageStyle, FormStyle } from '../pages-css/Mainpage';
import axios from "axios";

const Mainpage = () => {

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
        validateEmail(e);
    };

    const onSubmit = event => {
        event.preventDefault();
        const { fullname, email, comment } = credential;

        axios.post('http://localhost:8000/contact/', { fullname, email, comment })
            // .then((result) => { console.log(result) })
    };

    const validateEmail = (e) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRegex.test(e.target.value)) {
            setEmailState('has-success');
        } else setEmailState('has-danger');
    }

    return (
        <MainpageStyle>
            <Form>
                <FormStyle>
                    <FormGroup>
                        <Input
                            type="textarea"
                            name="comment"
                            placeholder="Hello! what will you like me to do for you? 😇"
                            onChange={onInputChange}
                        />
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Input
                                    type="fullname" name="fullname" placeholder="please enter your fullname"
                                    onChange={onInputChange}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email" placeholder="please enter your email"
                                    onChange={onInputChange}
                                    valid={emailState === 'has-success'}
                                    invalid={emailState === 'has-danger'}
                                />
                                <FormFeedback >
                                    Looks like there is an issue with your email. Please input a correct email.
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                </FormStyle>

                <Button onClick={onSubmit}>
                    Send
                </Button>
            </Form>
        </MainpageStyle>
    )
}

export default Mainpage