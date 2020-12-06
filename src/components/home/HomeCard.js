import React from 'react';
import { Card, Icon, Segment, Statistic } from 'semantic-ui-react'

const HomeCard = ({ icon, title, value }) => {
  return (
    <Card fluid className="home-card">
      <Card.Content>
        <Segment>
          <Statistic size='small'>
            <Statistic.Value> <Icon name={icon} /> {value}</Statistic.Value>
            <Statistic.Label> {title}</Statistic.Label>
          </Statistic>
        </Segment>
      </Card.Content>
    </Card>
  )
}

export default HomeCard;