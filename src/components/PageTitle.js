import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const PageTitle = ({ title, icon }) => {
  return (
    <Header as='h1' icon textAlign='center'>
      <Icon name={icon} circular />
      <Header.Content>{title}</Header.Content>
    </Header>
  )
}

export default PageTitle;