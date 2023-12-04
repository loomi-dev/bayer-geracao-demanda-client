import { Flex, Grid, GridItem, HStack, Skeleton, Text } from '@chakra-ui/react';

import { Balance, GridCard } from '@/components';
import { centsToCompactValue } from '@/utils';

type CustomerStatisticsSectionProps = {
  isLoading: boolean;
  summary?: PlanningSummary;
};
export const CustomerStatisticsSection = ({
  summary,
  isLoading,
}: CustomerStatisticsSectionProps) => {
  const plannedActions = summary?.planned_actions ?? 0;
  const plannedKit = centsToCompactValue(summary?.farmk_kit_in_cents ?? 0);
  const plannedRelationship = centsToCompactValue(summary?.relationship_action_in_cents ?? 0);
  const plannedTask = centsToCompactValue(summary?.farm_task_in_cents ?? 0);
  const planningValue = centsToCompactValue(summary?.planned_budget_in_cents ?? 0);
  const totalValue = centsToCompactValue(summary?.total_budget_in_cents ?? 0);

  return (
    <Grid
      as="section"
      w="full"
      gridTemplateColumns="repeat(5,1fr)"
      gridTemplateRows="repeat(2,1fr)"
      gap="1.6rem"
    >
      <GridItem rowSpan={2} colSpan={2}>
        <Balance.Container h="100%" farmerId={summary?.id ?? 0}>
          <Balance.Label>O parceiro ainda possui</Balance.Label>
          <Balance.Value />
          <HStack w="full" align="center" justify="space-between">
            <Balance.ExpirationDate />
          </HStack>
        </Balance.Container>
      </GridItem>

      <GridItem colSpan={1}>
        <GridCard
          value={plannedActions}
          label="Ações planejadas"
          skeletonStyles={{ w: '4rem' }}
          isLoading={isLoading}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Flex layerStyle="card" p="2.4rem" align="center" justify="space-between" gridArea="stat2">
          <Text textStyle="body3" color="text.footnote">
            Planejado / total
          </Text>

          {isLoading ? (
            <HStack>
              <Skeleton h="3rem" w="10rem" />
              <Skeleton h="3rem" w="12rem" />
            </HStack>
          ) : (
            <Text textStyle="h4" textTransform="uppercase">
              {`R$ ${planningValue}`} /{' '}
              <Text as="span" fontSize="2rem">
                {`R$ ${totalValue}`}
              </Text>
            </Text>
          )}
        </Flex>
      </GridItem>
      <GridItem>
        <GridCard value={`R$ ${plannedKit}`} label="Ações de enxoval" isLoading={isLoading} />
      </GridItem>
      <GridCard
        value={`R$ ${plannedRelationship}`}
        label="Ações de relacionamento"
        labelStyles={{ maxW: '12rem' }}
        isLoading={isLoading}
      />
      <GridCard value={`R$ ${plannedTask}`} label="Ações de campo" isLoading={isLoading} />
    </Grid>
  );
};
