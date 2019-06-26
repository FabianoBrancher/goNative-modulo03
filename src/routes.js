import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import login from '~/pages/login';
import repositories from '~/pages/repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    login,
    repositories,
  }),
);

export default Routes;
