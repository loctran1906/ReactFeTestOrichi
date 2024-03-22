import { Button, FormLayout, Select, TextField } from '@shopify/polaris'
import { DeleteIcon } from '@shopify/polaris-icons';
import React, { useCallback, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Icon } from '@shopify/polaris';

const PolarisSelectWrapper = ({ field, options, setActive }) => {
  const [selected, setSelected] = useState(field.value);

  useEffect(() => {
    field.onChange(selected);
    setActive(selected)
  }, [selected]);

  return (
    <Select
      label="Discount type"
      options={options}
      onChange={(value) => setSelected(value)}
      value={selected}
    />
  );
};

const Option = ({ control, errors, deleteOption, idx }) => {
  const [active, setActive] = useState('')
  const options = [
    { label: 'None', value: '' },
    { label: '% discount', value: 'percent' },
    { label: 'USD discount', value: 'usd' },
  ];

  const unitMatch = (value) => {
    switch (value) {
      case 'percent':
        return '%'
      default:
        return '$'
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ background: '#ff6000', color: '#fff', width: 'fit-content', padding: '5px 10px', borderBottomRightRadius: 10 }}>Option {idx + 1}</div>
        <Button onClick={() => deleteOption(idx)}><Icon source={DeleteIcon} tone="base" /></Button>
      </div>
      <FormLayout>
        <FormLayout.Group condensed>
          <Controller
            control={control}
            name={`options.${idx}.title`}
            render={({ field }) => {
              return (
                <TextField
                  inputMode='text'
                  {...field}
                  label="Title"
                  autoComplete="off"
                />
              )
            }}
          />
          <Controller
            control={control}
            name={`options.${idx}.subtitle`}
            render={({ field }) => {
              return (
                <TextField
                  inputMode='text'
                  {...field}
                  label="Subtitle"
                  autoComplete="off"
                />
              )
            }}
          />
          <Controller
            control={control}
            name={`options.${idx}.label`}
            render={({ field }) => {
              return (
                <TextField
                  inputMode='text'
                  {...field}
                  label="Label (optional)"
                  autoComplete="off"
                />
              )
            }}
          />
        </FormLayout.Group>
        <FormLayout.Group condensed>
          <Controller
            control={control}
            name={`options.${idx}.quantity`}
            render={({ field }) => {
              return (
                <TextField
                  type="number"
                  {...field}
                  label="Quantity"
                  autoComplete="off"
                />
              )
            }}
          />
          <Controller
            control={control}
            name={`options.${idx}.discountType`}
            render={({ field }) => {
              return (
                <PolarisSelectWrapper field={field} options={options} setActive={setActive} />
              )
            }}
          />

          {active && <Controller
            control={control}
            name={`options.${idx}.amount`}
            render={({ field }) => {
              return (
                <TextField
                  type="number"
                  {...field}
                  label="Amount"
                  autoComplete="off"
                  suffix={unitMatch(active)}
                />
              )
            }}
          />}
        </FormLayout.Group>
      </FormLayout>
    </div>
  )
}

export default Option