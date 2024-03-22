import React from 'react'
import { Button, LegacyCard, } from '@shopify/polaris'
import '../style.scss'
import Option from './Option'
import { PlusCircleIcon } from '@shopify/polaris-icons';
import { useFieldArray } from 'react-hook-form';


const Volume = ({ control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });


  const handleAddOption = () => {
    append({
      title: '',
      subtitle: '',
      label: '',
      quantity: fields[fields.length - 1].quantity + 1,
      discountType: '',
      amount: 0,
    })
  }

  const handleDeleteOption = (idx) => {
    remove(idx)
  }

  return (
    <LegacyCard title="Volume discount rule" sectioned>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 10 }}>
        {fields && fields?.map((field, idx) =>
          <Option
            key={field.id}
            control={control}
            errors={errors}
            deleteOption={handleDeleteOption}
            idx={idx}
          />
        )}
      </div>

      <Button
        fullWidth
        onClick={handleAddOption}
        icon={PlusCircleIcon}
        variant="primary"
        tone="success"
      >
        Add option
      </Button>
    </LegacyCard>
  )
}

export default Volume