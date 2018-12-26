import React, { Component } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton
} from 'react-admin'

import { Config } from '../../config'

class CompanyList extends Component {
  componentDidMount () {
    document.title = Config.app.name + ' - Empresas';
  }

  render () {
    return (
      <List {...this.props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source='name' />
          <TextField source='address' />
          <TextField source='phone' />
          <TextField source='email' />
          <TextField source='status' />
          <EditButton />
          <ShowButton />
        </Datagrid>
      </List>
    )
  }
}

export default CompanyList
