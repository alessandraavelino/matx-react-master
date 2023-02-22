import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Funcionarios = Loadable(lazy(() => import('./Funcionarios')));
const AgendarCliente = Loadable(lazy(() => import('./agendar-cliente/AgendarCliente')));

const pagesRoutes = [
  { path: '/funcionarios', element: <Funcionarios />, auth: authRoles.admin },
  { path: '/agendarcliente', element: <AgendarCliente />, auth: authRoles.admin },
];

export default pagesRoutes;
