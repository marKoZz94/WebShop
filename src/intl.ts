import {createIntl, createIntlCache} from 'react-intl';

const cache = createIntlCache();
const intl = createIntl(
  {
    locale: 'sr',
    messages: {},
  },
  cache,
);

export default intl;
