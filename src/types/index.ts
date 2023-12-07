export enum PlanningActionValues {
  'farm_task' = 'Ação de campo',
  'farm_kit' = 'Ação de enxoval',
  'relationship_task' = 'Ação de relacionamento',
}

export enum PlanningActionStatus {
  'farm_task' = 'table_error',
  'farm_kit' = 'table_warning',
  'relationship_task' = 'table_success',
}

export enum PlanningStatus {
  'accepted' = 'table_success',
  'rejected' = 'table_error',
  'ready_for_evaluation' = 'table_warning',
  'default' = 'table_primary',
}

export enum PlanningValue {
  'accepted' = 'Aprovado',
  'rejected' = 'Ajustes solicitados',
  'ready_for_evaluation' = 'Aguardando aprovação',
  'default' = 'Em construção',
}

export enum PlanningActionStatusVariant {
  'accepted' = 'table_success',
  'rejected' = 'table_error',
  'not_evaluated' = 'table_primary',
}
export enum PlanningActionStatusValue {
  'accepted' = 'Aprovado',
  'rejected' = 'Recusado',
  'not_evaluated' = 'Em avaliação',
}
