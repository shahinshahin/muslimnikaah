import React from 'react';
import ReactDOM from 'react-dom';
import '../componants/bundles/css/bootstrap.css';
import '../componants/bundles/css/style.css';
import '../componants/bundles/css/fontawesome-all.min.css';
import '../componants/bundles/css/fontawesome-all.min.css';
import { HomePage } from '../HomePages/HomePage';
var IndexPage = function () {
  return React.createElement('div', {
      'id': 'page',
      'className': 'page'
  }, React.createElement('div', {
      'className': 'banner bg bg2',
      'style': {
          outline: 'none',
          outlineOffset: '-2px',
          cursor: 'inherit'
      }
  }, React.createElement('headermain', {}, React.createElement('nav', { 'className': 'mnu navbar-light' }, React.createElement('div', {
      'className': 'logo',
      'id': 'logo'
  }, React.createElement('h1', {}, React.createElement('a', {
      'className': 'editContent',
      'href': '/home',
      'style': {
          outline: 'none',
          cursor: 'inherit'
      }
  }, 'NIKAH-PLANNER'))), React.createElement('label', {
      'htmlFor': 'drop',
      'className': 'toggle'
  }, React.createElement('span', {
      'className': 'fa fa-bars',
      'style': {
          outline: 'none',
          cursor: 'inherit'
      }
  })), React.createElement('input', {
      'type': 'checkbox',
      'id': 'drop'
  }), React.createElement('ul', { 'className': 'menu' }, React.createElement('li', { 'className': 'active' },
   React.createElement('a', {
      'href': '/home',
      'style': {
          outline: 'none',
          cursor: 'inherit'
      }
  }, 'Home')), React.createElement('li', { 'className': 'active' }, React.createElement('a', {
    'href': '/register',
    'style': {
        outline: 'none',
        cursor: 'inherit'
    }
}, 'Register')),React.createElement('li', { 'className': 'active' }, React.createElement('a', {
    'href': '/login',
    'style': {
        outline: 'none',
        cursor: 'inherit'
    }
}, 'Login')),React.createElement('li', {}, React.createElement('a', {
      'href': '/about',
      'style': {
          outline: 'none',
          cursor: 'inherit'
      }
  }, 'About')), 
  React.createElement('li', {}, React.createElement('label', {
      'htmlFor': 'drop-2',
      'className': 'toggle'
  }, 'Drop Down ', React.createElement('span', {
      'className': 'fa fa-angle-down',
      'aria-hidden': 'true',
      'style': {
          outline: 'none',
          cursor: 'inherit'
      }
  })),  
  React.createElement('ul', {}, React.createElement('li', {}, React.createElement('a', {
      'href': '/contact',
      'style': {
          outline: 'none',
          cursor: 'inherit'
      }
  }, 'Services')), React.createElement('li', {}, React.createElement('a', {
      'href': 'gallery.html',
      'style': {
          outline: 'none',
          cursor: 'inherit'
      }
  }, 'Gallery')))), React.createElement('li', {}, React.createElement('a', { 'href': '/componants/index.html' }, 'Contact Us'))))), React.createElement('div', { 'className': 'container' }, React.createElement('div', { 'className': 'banner-text' }, React.createElement('div', { 'className': 'slider-info' }, React.createElement('h3', {
      'className': 'editContent medium-editor-element',
      'contentEditable': 'true',
      'spellCheck': 'true',
      'data-medium-editor-element': 'true',
      'role': 'textbox',
      'aria-multiline': 'true',
      'data-medium-editor-editor-index': '2',
      'medium-editor-index': 'ccda3c12-28df-a409-0ef9-8d34242f66aa',
      'data-placeholder': 'Type your text'
  }, 'Muslim-Al-Nikah'), React.createElement('a', {
      'href': 'about.html',
      'className': 'banner-button btn mt-md-5 mt-4'
  }, 'Know More'),)))));
};
export default IndexPage;