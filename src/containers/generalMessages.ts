import { defineMessages } from 'react-intl';

export const scope = 'study.containers';

export default defineMessages({

  // User Registration/Edit
  FirstName: {
    id: `${scope}.firstName`,
    defaultMessage: 'First Name'
  },
  LastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last Name'
  },
  Email: {
    id: `${scope}.Email`,
    defaultMessage: 'E-mail'
  },
  InputUsername: {
    id: `${scope}.inputUsername`,
    defaultMessage: 'Username'
  },
  InputPassword: {
    id: `${scope}.inputPassword`,
    defaultMessage: 'Password'
  },
  InputRetypePassword: {
    id: `${scope}.inputRetypePassword`,
    defaultMessage: 'Retype Password'
  },
  // General
  UsersHeader: {
    id: `${scope}.header`,
    defaultMessage: 'Users',
  },
  Delete: {
    id: `${scope}.delete`,
    defaultMessage: 'Delete',
  },
  Edit: {
    id: `${scope}.edit`,
    defaultMessage: 'Edit',
  },
  Save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
  Close: {
    id: `${scope}.close`,
    defaultMessage: 'Close',
  },
  Role: {
    id: `${scope}.role`,
    defaultMessage: 'Role',
  },
  Process: {
    id: `${scope}.Process`,
    defaultMessage: 'Process',
  },
  LoremPlaceholder: {
    id: `${scope}.loremPlaceholder`,
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis vehicula bibendum. Proin rhoncus egestas risus, et condimentum augue suscipit eu. Etiam diam purus, congue sit amet luctus at, tempor eu tortor.'
  },
  LoremPlaceholderShort: {
    id: `${scope}.loremPlaceholder`,
    defaultMessage: 'Lorem ipsum dolor sit amet'
  },
  AreYouSure: {
    id: `${scope}.areYouSure`,
    defaultMessage: 'Are you sure?'
  },
  AreYouSureDelete: {
    id: `${scope}.areYouSureDelete`,
    defaultMessage: 'Are you sure that you want to delete this user?'
  },
  Options: {
    id: `${scope}.options`,
    defaultMessage: 'Options'
  },
  Comment: {
    id: `${scope}.comment`,
    defaultMessage: 'Upiši komentar'
  },
  SearchByKeyName: {
    id: `${scope}.searchByKeyName`,
    defaultMessage: 'Pretraga po ključnoj reči'
  },
  Search: {
    id: `${scope}.search`,
    defaultMessage: 'Pretraži'
  },
  KeyName: {
    id: `${scope}.keyName`,
    defaultMessage: 'Keyword'
  },

  // Domains Page
  AddNew: {
    id: `${scope}.addNew`,
    defaultMessage: 'Add Domains',
  },
  AddDomainNames: {
    id: `${scope}.addDomainNames`,
    defaultMessage: 'Enter domain names, comma separated',
  },
  DomainPlaceholder: {
    id: `${scope}.domainPlaceholder`,
    defaultMessage: 'domain.com',
  },

  // Pagination
  Next: {
    id: `${scope}.next`,
    defaultMessage: 'Next'
  },
  Previous: {
    id: `${scope}.previous`,
    defaultMessage: 'Previous'
  },
  // Saga Messages / Notifications
    // Standard
  SomethingNotRight: {
    id: `${scope}.somethingNotRight`,
    defaultMessage: 'Something is not right.'
  },
  StepNotif: {
    id: `${scope}.stepNotif`,
    defaultMessage: 'Step populated successfully'
  },
  DeleteNotif: {
    id: `${scope}.deleteNotif`,
    defaultMessage: 'Successfully deleted.'
  },
  // Users
  EditUserNotif: {
    id: `${scope}.editUserNotif`,
    defaultMessage: 'Successfully edited.'
  },
  CreateUserNotif: {
    id: `${scope}.createUserNotif`,
    defaultMessage: 'Successfully created'
  },
  Update: {
    id: `${scope}.update`,
    defaultMessage: 'Update'
  }
});
