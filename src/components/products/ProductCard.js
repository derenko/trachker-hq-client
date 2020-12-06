import React, { useState } from 'react';

import { Card, Button, Icon, Segment, Label, Popup, Statistic, Divider } from 'semantic-ui-react';

const ProductCard = ({ _id, title, sellingPrice, purchasePrice, views, orders }) => {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(_id);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Card fluid className="product-card">
      <Card.Content>
        {
          copied
            ?
            <Label prompt attached='top' color='blue'>
              <span>Скопійовано</span>
            </Label>
            :
            null
        }
        <Segment>
          <Card.Header>
            <div className="product-card__row">
              <Statistic size='tiny' >
                <Statistic.Label>Назва</Statistic.Label>
                <Statistic.Value ><Icon name='zip' /> {title}</Statistic.Value>
              </Statistic>

              <Popup
                position='top center'
                positionFixed
                trigger={
                  <Button color='facebook' size='large' onClick={onClick} disabled={copied}>
                    <Icon name='copy' />
                    {_id}
                  </Button>
                }>
                <Popup.Content>
                  <span>Натисніть щоб скопіювати ідентифікатор товару</span>
                </Popup.Content>
              </Popup>
            </div>

            <Divider />

            <div className='product-card__stats'>
              <Statistic size='tiny' >
                <Statistic.Label>Ціна продажу</Statistic.Label>
                <Statistic.Value><Icon name='dollar' /> {sellingPrice}</Statistic.Value>
              </Statistic>

              <Statistic size='tiny' >
                <Statistic.Label>Закупівельна ціна</Statistic.Label>
                <Statistic.Value><Icon name='dollar' /> {purchasePrice}</Statistic.Value>
              </Statistic>

              <Statistic size='tiny' >
                <Statistic.Label>Прибуток з одиниці товару</Statistic.Label>
                <Statistic.Value><Icon name='dollar' /> {sellingPrice - purchasePrice}</Statistic.Value>
              </Statistic>

              <Statistic size='tiny' >
                <Statistic.Label>Перегляди</Statistic.Label>
                <Statistic.Value><Icon name='eye' /> {views}</Statistic.Value>
              </Statistic>

              <Statistic size='tiny' >
                <Statistic.Label>Замовлення</Statistic.Label>
                <Statistic.Value><Icon name='clipboard list' /> {orders}</Statistic.Value>
              </Statistic>
            </div>

            <Divider />

            <div className='product-card__controls'>
              <Button size='large' >
                <Icon name='setting' />
                <span>Деталі товару</span>
              </Button>
            </div>
          </Card.Header>
        </Segment>
      </Card.Content>
    </Card >
  )
}

export default ProductCard;