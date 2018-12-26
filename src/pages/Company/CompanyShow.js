import React, { Component } from 'react'
import {
  Show,
  Tab,
  TabbedShowLayout,
  TextField
} from 'react-admin'

import { Config } from '../../config'

class CompanyShow extends Component {
  componentDidMount () {
    document.title = Config.app.name + ' - Empresas'
  }

  render () {
    return (
      <Show title='Detalle Empresa' {...this.props}>
        <TabbedShowLayout>
          <Tab label='Empresa'>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='address' />
            <TextField source='coords' />
            <TextField source='phone' />
            <TextField source='email' />
            <TextField source='extra' />
            <TextField source='status' />
          </Tab>
        </TabbedShowLayout>
      </Show>
    )
  }
}

export default CompanyShow;