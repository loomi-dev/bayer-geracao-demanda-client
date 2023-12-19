import { useQuery } from '@tanstack/react-query';

import { QueryOpt } from '@/api';

import { getAchievement } from '../endpoints';
import { GetAchievementParams } from '../types';

export const useGetAchievement = (params: GetAchievementParams, options?: QueryOpt<any>) =>
  useQuery({
    ...options,
    queryKey: ['get-achievement', params],
    queryFn: () => getAchievement(params),
  });
