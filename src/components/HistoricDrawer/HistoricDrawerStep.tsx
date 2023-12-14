import {
  Step,
  StepIndicator,
  StepIndicatorProps,
  StepSeparator,
  StepStatus,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { ClockRegularIcon } from '../icons';

type HistoricDrawerStepProps = {
  children: ReactNode;
  incomplete?: ReactNode;
  active?: ReactNode;
  complete?: ReactNode;
} & StepIndicatorProps;

export const HistoricDrawerStep = ({
  children,
  incomplete = <ClockRegularIcon />,
  active = <ClockRegularIcon />,
  complete = <ClockRegularIcon />,
  ...restProps
}: HistoricDrawerStepProps) => (
  <Step>
    <StepIndicator {...restProps}>
      <StepStatus incomplete={incomplete} active={active} complete={complete} />
    </StepIndicator>

    {children}

    <StepSeparator />
  </Step>
);
