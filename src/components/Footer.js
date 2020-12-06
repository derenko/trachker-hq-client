import React from 'react';

import { Header, Divider, Container } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Divider />
        <Header as='h3'>© {new Date().getFullYear()}</Header>
      </Container>
    </div>
  )
}

export default Footer;