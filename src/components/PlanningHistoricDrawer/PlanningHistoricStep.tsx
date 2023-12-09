import { Step, StepIndicator, StepStatus, HStack, StepSeparator, Box } from '@chakra-ui/react';

import { Historic } from '../Historic';
import { ClockRegularIcon } from '../icons';

type PlanningHistoricStepProps = Historic;

export const PlanningHistoricStep = ({
  status,
  description,
  creation_date,
  related,
}: PlanningHistoricStepProps) => (
  <Step>
    <StepIndicator>
      <StepStatus
        incomplete={<ClockRegularIcon />}
        active={<ClockRegularIcon />}
        complete={<ClockRegularIcon color="#fff" />}
      />
    </StepIndicator>

    <Historic.Container>
      <Historic.Header status={status} date={creation_date} />

      <Historic.Title>Você enviou o planejamento para aprovação</Historic.Title>

      <Box w="full" bg="surface.primary" boxShadow="fifth" borderRadius="1.6rem">
        <Historic.Accordion planningActions={[]} />

        <Historic.Footer totalValue="1200">
          <HStack spacing="1rem">
            <Historic.CancelButton />
            <Historic.DoneButton />
          </HStack>
        </Historic.Footer>
      </Box>

      <Historic.Table data={[]} />

      <Historic.TextInput label="Insira uma mensagem para explicar o motivo das recusas" />

      {description && <Historic.Message author={related.username} description={description} />}
    </Historic.Container>

    <StepSeparator />
  </Step>
);
