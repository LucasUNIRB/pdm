import Login from './src/pages/Login';
import LoginP from './src/pages/LoginP';
import Cadastro from './src/pages/Cadastro';
import LoginA from './src/pages/LoginA';
import Consulta from './src/pages/Consulta';
import Esqueceu from './src/pages/Esqueceu';
import Mapa from './src/pages/Mapa';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login: Login,
    LoginA: LoginA,
    LoginP: LoginP,
    Cadastro: Cadastro,
    Consulta: Consulta,
    Esqueceu: Esqueceu,
    Mapa: Mapa,
  })
);

export default Routes;
