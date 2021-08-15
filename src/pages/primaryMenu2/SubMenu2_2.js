import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import Layout from '../../components/layout/Index'
import {Typography} from '@material-ui/core'
const SubMenu2_2 = ({title,list}) => {

  return (
    <Layout>
      <PageTitle list={list}/>
      <Typography variant='h6'>
      {title}
      </Typography>
    </Layout>
  )
}

export default SubMenu2_2
