import React from 'react';
import { Header, Icon, Card, Segment, Button } from 'semantic-ui-react'

const TotalStatsCard = ({ title, icon, value }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Segment textAlign='center'>
          <Header as='h2' textAlign={'center'}>
            <Icon name={icon} /> {title}
          </Header>
          <Button color='facebook' size={'huge'} fluid >
            {value}
          </Button>
        </Segment>
      </Card.Content>
    </Card>
  )
}

export default TotalStatsCard;