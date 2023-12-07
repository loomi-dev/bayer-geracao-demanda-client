import { ReasonInput } from './ReasonInput';
import { ValidatorTable } from './ValidatorTable';

type PlanningValidatorProps = {
  isApproving: boolean;
  actionsToEvaluate: PlanningAction[];
};

export const PlanningValidator = ({ actionsToEvaluate, isApproving }: PlanningValidatorProps) => (
  <>
    <ValidatorTable actions={actionsToEvaluate} isApproving={isApproving} />
    <ReasonInput />
  </>
);
