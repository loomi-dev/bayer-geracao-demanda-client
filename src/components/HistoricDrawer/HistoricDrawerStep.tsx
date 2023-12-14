import { Step, StepIndicator, StepSeparator, StepStatus } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { ClockRegularIcon } from '../icons';

type HistoricDrawerStepProps = {
  children: ReactNode;
  incomplete?: ReactNode;
  active?: ReactNode;
  complete?: ReactNode;
};

export const HistoricDrawerStep = ({
  children,
  incomplete = <ClockRegularIcon />,
  active = <ClockRegularIcon />,
  complete = <ClockRegularIcon />,
}: HistoricDrawerStepProps) => (
  <Step>
    <StepIndicator>
      <StepStatus incomplete={incomplete} active={active} complete={complete} />
    </StepIndicator>

    {children}

    <StepSeparator />
  </Step>
);
