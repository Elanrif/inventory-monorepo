import { Card } from '@/components/ui/card'
import React from 'react'
import HeaderCardBody from './header-card-body'
import { BodyTable } from './table/table'

export default function CardBody() {
  return (
    <Card className='mt-6'>
        <HeaderCardBody />
        <BodyTable/>
    </Card>
  )
}
