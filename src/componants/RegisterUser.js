import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


    
         
          
            var RegisterUser = function () {
                return React.createElement('div', { 'className': 'container' }, React.createElement('form', {
                    'className': 'text-center border border-light p-5',
                    'action': '#!'
                }, React.createElement('p', { 'className': 'h4 mb-4' }, 'Sign up'), React.createElement('div', { 'className': 'form-row mb-4' }, React.createElement('div', { 'className': 'col' }    /*  First name  */, React.createElement('input', {
                    'type': 'text',
                    'id': 'defaultRegisterFormFirstName',
                    'className': 'form-control',
                    'placeholder': 'First name'
                })), React.createElement('div', { 'className': 'col' }    /*  Last name  */, React.createElement('input', {
                    'type': 'text',
                    'id': 'defaultRegisterFormLastName',
                    'className': 'form-control',
                    'placeholder': 'Last name'
                }))), React.createElement('input', {
                    'type': 'email',
                    'id': 'defaultRegisterFormEmail',
                    'className': 'form-control mb-4',
                    'placeholder': 'E-mail'
                }), React.createElement('input', {
                    'type': 'password',
                    'id': 'defaultRegisterFormPassword',
                    'className': 'form-control',
                    'placeholder': 'Password',
                    'aria-describedby': 'defaultRegisterFormPasswordHelpBlock'
                }), React.createElement('small', {
                    'id': 'defaultRegisterFormPasswordHelpBlock',
                    'className': 'form-text text-muted mb-4'
                }, '\n        At least 8 characters and 1 digit\n    '), React.createElement('input', {
                    'type': 'text',
                    'id': 'defaultRegisterPhonePassword',
                    'className': 'form-control',
                    'placeholder': 'Phone number',
                    'aria-describedby': 'defaultRegisterFormPhoneHelpBlock'
                }), React.createElement('small', {
                    'id': 'defaultRegisterFormPhoneHelpBlock',
                    'className': 'form-text text-muted mb-4'
                }, '\n        Optional - for two step authentication\n    '), React.createElement('div', { 'className': 'custom-control custom-checkbox' }, React.createElement('input', {
                    'type': 'checkbox',
                    'className': 'custom-control-input',
                    'id': 'defaultRegisterFormNewsletter'
                }), React.createElement('label', {
                    'className': 'custom-control-label',
                    'htmlFor': 'defaultRegisterFormNewsletter'
                }, 'Subscribe to our newsletter')), React.createElement('button', {
                    'className': 'btn btn-info my-4 btn-block',
                    'type': 'submit'
                }, 'Sign in'), React.createElement('p', {}, 'or sign up with:'), React.createElement('a', {
                    'href': '#',
                    'className': 'mx-2',
                    'role': 'button'
                }, React.createElement('i', { 'className': 'fab fa-facebook-f light-blue-text' })), React.createElement('a', {
                    'href': '#',
                    'className': 'mx-2',
                    'role': 'button'
                }, React.createElement('i', { 'className': 'fab fa-twitter light-blue-text' })), React.createElement('a', {
                    'href': '#',
                    'className': 'mx-2',
                    'role': 'button'
                }, React.createElement('i', { 'className': 'fab fa-linkedin-in light-blue-text' })), React.createElement('a', {
                    'href': '#',
                    'className': 'mx-2',
                    'role': 'button'
                }, React.createElement('i', { 'className': 'fab fa-github light-blue-text' })), React.createElement('hr', {}), React.createElement('p', {}, 'By clicking\n        ', React.createElement('em', {}, 'Sign up'), ' you agree to our\n        ', React.createElement('a', {
                    'href': true,
                    'target': '_blank'
                }, 'terms of service'))));
            };
            export default RegisterUser;