import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Header, Icon, Divider } from 'semantic-ui-react';

import { addProductAction } from '../../actions/products';

const AddProductForm = () => {
  const [title, setTitle] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [submited, setSubmited] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    setSubmited(true);

    dispatch(addProductAction({
      _id: new Date().toISOString(),
      title,
      purchasePrice,
      sellingPrice,
    }));

    setSubmited(false);
  }

  return (
    <Form loading={submited} onSubmit={onSubmit}>
      <Form.Field>
        <Header as='h2'><Icon name='add' /> Додати товар</Header>
      </Form.Field>
      <Form.Input
        label='Назва товару'
        placeholder='Назва товару'
        name='title'
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Form.Input
        label='Закупівельна ціна'
        placeholder='Закупівельна ціна'
        type='number'
        name='purchasePrice'
        id='purchasePrice'
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
      />

      <Form.Input
        label='Ціна за якою продаватимемо'
        placeholder='Ціна за якою продаватимемо'
        type='number'
        name='sellingPrice'
        id='sellingPrice'
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
      />

      <Button primary type='submit'>Додати</Button>

      <Divider />
    </Form>
  )
}

export default AddProductForm;