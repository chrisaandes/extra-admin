import React, { Component } from 'react';
import {
  DisabledInput,
  Edit,
  FormTab,
  TabbedForm,
  TextInput,
  required,
} from 'react-admin';

import { Config } from '../../config';

class CompanyEdit extends Component {
  componentDidMount() {
    document.title = Config.app.name + ' - Editar Empresa';
  }

  render() {
    return (
      <Edit title="Editar Empresa" {...this.props}>
        <TabbedForm defaultValue={{ role: 'user' }}>
          <FormTab label="Empresa" path="">
            <DisabledInput source="id" />
            <TextInput source="name" validate={[required()]} />
            <TextInput source="address" validate={[required()]} />
            <TextInput source="coords" validate={[required()]} />
            <TextInput source="phone" validate={[required()]} />
            <TextInput source="email" validate={[required()]} />
            <TextInput source="extra" validate={[required()]} />
            <TextInput source="status" validate={[required()]} />
          </FormTab>
        </TabbedForm>
      </Edit>
    );
  }
}

export default CompanyEdit;