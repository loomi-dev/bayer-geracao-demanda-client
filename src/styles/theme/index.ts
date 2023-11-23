import { extendTheme } from '@chakra-ui/react';

import * as components from './components';
import { config } from './config';
import * as foundations from './foundations';
import { styles } from './globalStyles';

export const theme = extendTheme({
  config,
  styles,
  ...foundations,
  components: { ...components },
});
