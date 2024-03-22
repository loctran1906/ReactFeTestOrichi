import { DataTable, DescriptionList, LegacyCard, Text } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'

const Preview = ({ formData }) => {
  const [data, setData] = useState({})
  const [row, setRow] = useState([])
  useEffect(() => {
    setData(formData)
    setRow(formData.options
      .map(e => {
        return [e?.title, e?.discountType, e?.quantity, e?.amount == 0 ? '' : e?.amount,]
      })
    )

  }, [formData])




  return (

    <LegacyCard title="Preview" sectioned>
      <Text variant="headingLg" alignment='center' as="h3">{data?.title}</Text>
      <Text as="p">{data?.description}</Text>
      <DataTable
        columnContentTypes={[
          'text',
          'text',
          'number',
          'text',
        ]}
        headings={[
          'Title',
          'Discount Type',
          'Quantity',
          'Amount',
        ]}
        rows={row}
      />
    </LegacyCard>
  )
}

export default Preview