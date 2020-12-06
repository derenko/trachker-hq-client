import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Menu,
  Icon,
  Header
} from 'semantic-ui-react'

import logo from '../static/img/logo.svg';

const Navigation = () => {
  return (
    <Menu secondary>
      <Container>
        <Menu.Item as='div' header>
          <Header as='h2'><img src={logo} alt={'Tracker HQ'} />  Tracker HQ</Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={NavLink} to='/' exact><Icon name='home' /> Дім</Menu.Item>
          <Menu.Item as={NavLink} to='/products'><Icon name='zip' /> Товари</Menu.Item>
          <Menu.Item as={NavLink} to='/orders'><Icon name='clipboard list' /> Замовлення</Menu.Item>
          <Menu.Item as={NavLink} to='/logout'><Icon name='sign-out' /> Вихід</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navigation;