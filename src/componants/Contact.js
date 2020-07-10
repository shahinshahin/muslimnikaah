import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import ReactDOM from 'react-dom';
import '../componants/bundles/css/bootstrap.css';
import '../componants/bundles/css/style.css';
import '../componants/bundles/css/fontawesome-all.min.css';
import '../componants/bundles/css/fontawesome-all.min.css';

    var Contact = function () {
        return React.createElement('div', { 'className': 'container' }    /*  contact  */, React.createElement('section', {
            'className': 'banner-bottom-w3ls pt-lg-5 pt-md-3 pt-3 editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('div', { 'className': 'inner-sec-wthreelayouts pt-md-5 pt-md-3 pt-3' }, React.createElement('h2', {
            'className': 'heading-agileinfo text-center  mb-4 editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, 'Get In Touch'), React.createElement('div', { 'className': 'container pt-sm-5' }, React.createElement('div', { 'className': 'address row mb-5' }, React.createElement('div', {
            'className': 'col-lg-4 address-grid-w3l editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('div', { 'className': 'row address-info' }, React.createElement('div', { 'className': 'col-3 address-left text-center' }, React.createElement('span', {
            'className': 'fa fa-map',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        })), React.createElement('div', { 'className': 'col-9 address-right text-left' }, React.createElement('h6', {
            'className': 'ad-info text-uppercase mb-2 editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, 'Address'), React.createElement('p', {
            'className': 'editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, ' California, USA\n\n                                ')))), React.createElement('div', {
            'className': 'col-lg-4 address-grid-w3l editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('div', { 'className': 'row address-info' }, React.createElement('div', { 'className': 'col-3 address-left text-center' }, React.createElement('span', {
            'className': 'fa fa-envelope',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        })), React.createElement('div', { 'className': 'col-9 address-right text-left' }, React.createElement('h6', {
            'className': 'ad-info text-uppercase mb-2 editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, 'Email'), React.createElement('p', {
            'className': 'editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, 'Email :\n                                    ', React.createElement('a', {
            'className': 'editContent',
            'href': 'mailto:example@email.com',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, ' mail@example.com'))))), React.createElement('div', {
            'className': 'col-lg-4 address-grid-w3l editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('div', { 'className': 'row address-info' }, React.createElement('div', { 'className': 'col-3 address-left text-center' }, React.createElement('span', {
            'className': 'fa fa-mobile',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        })), React.createElement('div', { 'className': 'col-9 address-right text-left' }, React.createElement('h6', {
            'className': 'ad-info text-uppercase mb-2 editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, 'Phone'), React.createElement('p', {
            'className': 'editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, '+1 234 567 8901')))))), React.createElement('div', { 'className': 'container-fluid' }, React.createElement('div', { 'className': 'row' }, React.createElement('div', {
            'className': 'col-md-6 map editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('iframe', {
            'src': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27404345275!2d-118.69191921441556!3d34.02016130939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1522474296007',
            'allowFullScreen': true
        })), React.createElement('div', {
            'className': 'col-md-6 main_grid_contact editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('div', { 'className': 'form' }, React.createElement('h4', { 'className': 'mb-4 text-left' }, 'Send us a message'), React.createElement('form', {
            'action': '#',
            'method': 'post'
        }, React.createElement('div', {
            'className': 'form-group editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('label', { 'className': 'my-2' }, 'Name'), React.createElement('input', {
            'className': 'form-control',
            'type': 'text',
            'name': 'Name',
            'placeholder': true,
            'required': true
        })), React.createElement('div', {
            'className': 'form-group editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('label', {}, 'Email'), React.createElement('input', {
            'className': 'form-control',
            'type': 'email',
            'name': 'Email',
            'placeholder': true,
            'required': true
        })), React.createElement('div', {
            'className': 'form-group editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('label', {}, 'Message'), React.createElement('textarea', {
            'id': 'textarea',
            'placeholder': true
        })), React.createElement('div', {
            'className': 'input-group1 editContent',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, React.createElement('button', {
            'className': 'form-control btn',
            'type': 'submit',
            'style': {
                outline: 'none',
                cursor: 'inherit'
            }
        }, 'Submit'))))))))));
    };


export default Contact;