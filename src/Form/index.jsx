import React, { useCallback, useState } from 'react'
import General from './components/General'
import Volume from './components/Volume'
import Preview from './components/Preview'
import './style.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button, Frame, Grid, Page } from '@shopify/polaris'
import { Toast } from '@shopify/polaris'
const schema = yup
  .object({
    camp: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    options: yup.array(),
  })
  .required()

const Main = () => {
  const [active, setActive] = useState('');
  const toggleActive = useCallback(() => setActive(''), []);

  const toastMarkup = active ? (
    <Toast content={active} onDismiss={toggleActive} />
  ) : null;

  const methods = useForm({
    resolver: yupResolver(schema), defaultValues: {
      camp: '',
      title: '',
      description: '',
      options: [{
        title: '',
        subtitle: '',
        label: '',
        quantity: 0,
        discountType: '',
        amount: 0,
      }],
    }
  })

  const fetchData = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000)
    });
  };

  const onSubmit = async (data) => {
    try {
      const res = await fetchData(data);
      console.table('Dữ liệu form:', res);
      setActive('Call Api Process. Please see data in console log')
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    }
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Page fullWidth>
          <Grid gap={'20px'}>
            <Grid.Cell columnSpan={{ xs: 8, sm: 4, md: 4, lg: 8, xl: 8 }}>
              <General control={methods.control} errors={methods.formState.errors} />
              <Volume control={methods.control} errors={methods.formState.errors} />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
              <Preview formData={methods.watch()} />
            </Grid.Cell>
          </Grid>
        </Page>
        <Button
          submit
          variant="primary"
          tone="success"
        >
          Submit
        </Button>
      </form>
      <Frame>
        {toastMarkup}
      </Frame>
    </FormProvider>
  )
}

export default Main