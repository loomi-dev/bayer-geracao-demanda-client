import { Flex, Grid, GridItem, HStack, Skeleton, Text } from '@chakra-ui/react';

import { Balance, StatCard } from '@/components';
import { centsToCompactValue } from '@/utils';

type CustomerStatisticsSectionProps = {
  customerId: number;
  isLoading: boolean;
  summary?: PlanningSummary;
};
export const CustomerStatisticsSection = ({
  customerId,
  summary,
  isLoading,
}: CustomerStatisticsSectionProps) => {
  const plannedActions = summary?.planned_actions ?? 0;
  const plannedKit = centsToCompactValue(Number(summary?.farm_kit_in_cents ?? 0));
  const plannedRelationship = centsToCompactValue(
    Number(summary?.relationship_action_in_cents ?? 0),
  );
  const plannedTask = centsToCompactValue(Number(summary?.farm_task_in_cents ?? 0));
  const planningValue = centsToCompactValue(Number(summary?.planned_budget_in_cents ?? 0));
  const totalValue = centsToCompactValue(Number(summary?.total_budget_in_cents ?? 0));
  return (
    <Grid
      as="section"
      w="full"
      gridTemplateColumns={{
        base: 'repeat(3, 1fr)',
        '3xl': 'repeat(5, 1fr)',
      }}
      gridTemplateRows={{
        base: 'repeat(3, 1fr)',
        '3xl': 'repeat(2, 1fr)',
      }}
      gap="1.6rem"
    >
      <GridItem rowSpan={2} colSpan={{ base: 3, '3xl': 2 }}>
        <Balance.Container h="100%" maxH="25rem" farmerId={customerId} justify="center">
          <Balance.Label>O parceiro ainda possui</Balance.Label>
          <Balance.Value />
          <HStack w="full" align="center" justify="space-between">
            <Balance.ExpirationDate />
          </HStack>
        </Balance.Container>
      </GridItem>

      <GridItem colSpan={1}>
        <StatCard
          value={plannedActions}
          label="Ações planejadas"
          skeletonStyles={{ w: '4rem' }}
          isLoading={isLoading}
          h="100%"
          maxH="12rem"
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Flex
          layerStyle="card"
          p="2.4rem"
          align="center"
          justify="space-between"
          gridArea="stat2"
          h="100%"
          maxH="12rem"
        >
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
        <StatCard
          value={`R$ ${plannedKit}`}
          label="Ações de enxoval"
          isLoading={isLoading}
          h="100%"
          maxH="12rem"
        />
      </GridItem>
      <StatCard
        value={`R$ ${plannedRelationship}`}
        label="Ações de relacionamento"
        labelStyles={{ maxW: '12rem' }}
        isLoading={isLoading}
        h="100%"
        maxH="12rem"
      />
      <StatCard
        value={`R$ ${plannedTask}`}
        label="Ações de campo"
        isLoading={isLoading}
        h="100%"
        maxH="12rem"
      />
    </Grid>
  );
};
