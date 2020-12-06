import React from 'react';

import { Container, Grid, Header, Icon } from 'semantic-ui-react';

import PageTitle from '../components/PageTitle';
import AddProductForm from '../containers/products/AddProductForm';
import ProductsList from '../containers/products/ProductsList';
import ProductsRevenueChart from '../containers/products/ProductsRevenueChart';
import ProductsSalesChart from '../containers/products/ProductsSalesChart';

const Products = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row className="margin-vertical">
          <Grid.Column>
            <PageTitle title='Товари' icon='boxes' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <AddProductForm />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className='margin-vertical'>
          <Grid.Column>
            <Header as='h2'><Icon name='info circle' />Діаграма замовлень товарів</Header>
            <ProductsSalesChart />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className='margin-vertical'>
          <Grid.Column>
            <Header as='h2'><Icon name='info circle' />Діаграма заробітку з товарів</Header>
            <ProductsRevenueChart />
          </Grid.Column>
        </Grid.Row>


        <Grid.Row className='margin-vertical'>
          <Grid.Column>
            <Header as='h2'><Icon name='boxes' /> Товари</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className='margin-vertical'>
          <Grid.Column>
            <ProductsList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Products;