import { FormLayout, LegacyCard, Text, TextField } from '@shopify/polaris'
import React from 'react'
import { Controller } from 'react-hook-form'
import '../style.scss'


const General = ({ control, errors }) => {
  return (
    <LegacyCard title="General" sectioned>
      <FormLayout>
        <Controller
          control={control}
          name="camp"
          render={({ field }) => (
            <TextField
              className="campaign-field"
              inputMode='text'{...field}
              label="Campaign"
              autoComplete="off"
              helpText={
                <p style={{ color: 'red' }}>{errors?.camp?.message}</p>
              }
            />
          )}
        />

        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              inputMode='text'{...field}
              label="Title"
              autoComplete="off"
              helpText={
                <p style={{ color: 'red' }}>{errors?.title?.message}</p>
              }
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <TextField
              inputMode='text'{...field}
              label="Description"
              autoComplete="off"
              helpText={
                <p style={{ color: 'red' }}>{errors?.description?.message}</p>
              }
            />
          )}
        />
      </FormLayout>
    </LegacyCard>
  )
}

export default General