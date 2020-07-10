import React, { Component } from 'react';


import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class LoginUser extends Component {

    constructor() {

        super();


        this.state = {

            Email: '',

            Password: ''

        }


        this.Password = this.Password.bind(this);

        this.Email = this.Email.bind(this);

        this.login = this.login.bind(this);

    }


    Email(event) {

        this.setState({ Email: event.target.value })

    }

    Password(event) {

        this.setState({ Password: event.target.value })

    }

    login(event) {

        debugger;

        fetch('http://localhost:51282/Api/login/Login', {

            method: 'post',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({

                Email: this.state.Email,

                Password: this.state.Password

            })

        }).then((Response) => Response.json())

            .then((result) => {

                console.log(result);

                if (result.Status == 'Invalid')

                    alert('Invalid User');

                else

                    this.props.history.push("/home");

            })

    }


    render() {


        return (

            <div class="container">


                           

                                        <Form>

                                            <div >

                                                <div class="col-sm- btn btn-primary">

                                                    Login

                             </div>

                                            </div>

                                           


                                                <Input type="text" onChange={this.Email} placeholder="Enter Email" />

                                           

                                            


                                                <Input type="password" onChange={this.Password} placeholder="Enter Password" />

                                          

                                            <Button onClick={this.login} color="success" block>Login</Button>

                                        </Form>

                                  
            </div>

        );

    }

}

export default LoginUser;
