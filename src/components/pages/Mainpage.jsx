import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { MainpageStyle, FormStyle } from '../pages-css/Mainpage';
import axios from "axios";

const Mainpage = () => {

    const clientCredential = {
        fullname: "",
        email: "",
        comment: ""
    };
    
    const [credential, setCredential] = useState(clientCredential);

    const onInputChange = e => {
        const { name, value } = e.target;
        setCredential({ ...credential, [name]: value });
    };

    const onSubmit = event => {
        event.preventDefault();
        const { fullname, email, comment } = credential;

        axios.post('http://localhost:8000/contact/', { fullname, email, comment })
            .then((result) => { console.log(result) })
            .catch((result) => { console.log(result)}); // to check this later..
    };

    return (
        <MainpageStyle>
            <Form>
                <FormStyle>
                    <FormGroup>
                        <Input
                            type="comment"
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
                                    type="email"
                                    name="email" placeholder="please enter your email"
                                    onChange={onInputChange}
                                />
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