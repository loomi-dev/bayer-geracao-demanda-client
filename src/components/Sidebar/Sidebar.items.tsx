import {
  CalendarIcon,
  CardIcon,
  ChartIcon,
  ComputerIcon,
  ImageIcon,
  PackageSmallIcon,
  UserGroupIcon,
} from '../icons';

export const managerMenuItens = [
  { label: 'Clientes', src: '/clientes', leftIcon: <UserGroupIcon /> },
  {
    label: 'Planejamento',
    src: '/planejamento',
    leftIcon: <CalendarIcon />,
  },
  {
    label: 'Comprovantes',
    src: '/comprovantes',
    leftIcon: <ImageIcon />,
  },
  {
    label: 'Simulador',
    src: '/simulador',
    leftIcon: <ComputerIcon />,
  },
  {
    label: 'Dashboard',
    src: '/dashboard',
    leftIcon: <ChartIcon />,
  },
];

export const farmerMenuItens = [
  { label: 'Carteira', src: '/carteira', leftIcon: <CardIcon /> },
  {
    label: 'Planejamento',
    src: '/planejamento',
    leftIcon: <CalendarIcon />,
  },
  {
    label: 'Comprovantes',
    src: '/comprovantes',
    leftIcon: <ImageIcon />,
  },
  {
    label: 'Simulador',
    src: '/simulador',
    leftIcon: <ComputerIcon />,
  },
  { label: 'Enxoval', src: '/enxoval', leftIcon: <PackageSmallIcon /> },
];
