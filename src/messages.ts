import { defineMessages } from 'react-intl';

export const scope = 'study.global';

export default defineMessages({
  Header: {
    id: `${scope}.header`,
    defaultMessage: 'Registrujte se',
  },
  yesterday: {
    id: `${scope}.yesterday`,
    defaultMessage: 'Juce',
  },
  today: {
    id: `${scope}.today`,
    defaultMessage: 'danas',
  },
  tomorrow: {
    id: `${scope}.tomorrow`,
    defaultMessage: 'sutra',
  },
  lastWeekday: {
    id: `${scope}.lastWeekday`,
    defaultMessage: 'prosle sedmice',
  },
});
