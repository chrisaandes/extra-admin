import React, { Component } from 'react';
import {
  Create,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
  ImageInput,
  SelectInput,
  ImageField,
  RichTextInput
} from 'react-admin';

import { Config } from '../../config';

const UserCreateToolbar = ({ ...props }) => (
  <Toolbar {...props}>
    <SaveButton
      label="Save"
      redirect="show"
      submitOnEnter={true}
    />
  </Toolbar>
);

class CompanyCreate extends Component {
  componentDidMount () {
    document.title = Config.app.name + ' - Crear Empresa';
  }

  render () {
    return (
      <Create {...this.props}>
        <SimpleForm
          toolbar={<UserCreateToolbar />}
          defaultValue={{ role: 'user' }}
        >
          <TextInput source='name' label='nombre' validate={[required()]} />
          <SelectInput source='main' choices={[
            { id: 'programming', name: 'Programming' },
            { id: 'lifestyle', name: 'Lifestyle' },
            { id: 'photography', name: 'Photography' }
          ]} />
          <TextInput source='address' validate={[required()]} />
          <TextInput source='coords' validate={[required()]} />
          <TextInput source='phone' validate={[required()]} />
          <TextInput source='email' validate={[required()]} />
          <RichTextInput source='extra' />
          <TextInput source='status' validate={[required()]} />
        </SimpleForm>
      </Create>
    )
  }
}

export default CompanyCreate;