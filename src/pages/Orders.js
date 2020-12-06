import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import PageTitle from '../components/PageTitle';

const Orders = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row className="margin-vertical">
          <Grid.Column>
            <PageTitle title='Замовлення' icon='clipboard list' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
};

export default Orders