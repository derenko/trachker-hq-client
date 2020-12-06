import React from 'react';

import { Container, Grid, Header, Divider, Icon } from 'semantic-ui-react';

import HomeCard from '../components/home/HomeCard';
import TotalStatsCard from '../components/home/TotalStatsCard';
import AllMonthsStatsChart from '../containers/home/StatsByAllMonthsChart';
import PageTitle from '../components/PageTitle';

const Home = () => {
  return (
    <Container>
      <Grid className="margin-vertical">
        <Grid.Row className="margin-vertical">
          <Grid.Column>
            <PageTitle title='Дім' icon='home' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Header as='h1'><Icon name='info circle' />Загальна статистика</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3} >
          <Grid.Column>
            <TotalStatsCard value={12} icon={'box'} title={'Всього товарів'} />
          </Grid.Column>
          <Grid.Column>
            <TotalStatsCard value={3000} icon={'dollar'} title={'Всього зароблено'} />
          </Grid.Column>
          <Grid.Column>
            <TotalStatsCard value={435} icon={'clipboard list'} title={'Всього замовлень'} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Divider />
            <Header as='h1'><Icon name='info circle' />Статистика по місяцях</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <AllMonthsStatsChart />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Divider />
            <Header as='h1' ><Icon name='info circle' /> Статистика за поточний місяць</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            <HomeCard title={'Замовлення'} value={4000} icon={'clipboard list'} />
          </Grid.Column>
          <Grid.Column>
            <HomeCard title={'Прибуток'} value={1000} icon={'dollar'} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <HomeCard title={'Кількість відвідувачів'} value={54000} icon={'eye'} />
          </Grid.Column>
          <Grid.Column>
            <HomeCard title={'Клієнтів'} value={4000} icon={'users'} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Home;