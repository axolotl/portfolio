import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.css';

const AppWrapper = ({ children }) => (
  <div id='app'>
    <Helmet 
      title='Portfolio'
      link={[
        { rel:'stylesheet', type:'text/css', href:'https://fonts.googleapis.com/css?family=Josefin+Slab' },
        { rel:'stylesheet', type:'text/css', href:'https://fonts.googleapis.com/css?family=Open+Sans' },
        { rel:'stylesheet', type:'text/css', href:'https://fonts.googleapis.com/css?family=Josefin+Sans' }
      ]}
    />
    {children()}
  </div>
)

AppWrapper.propTypes = {
  children: PropTypes.func,
}

export default AppWrapper