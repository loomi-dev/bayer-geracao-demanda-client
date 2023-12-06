import { brlToNumber } from './brlToNumber';

export const brlToCents = (value: string): number => {
  const valueReplacedToNumber = brlToNumber(value);

  return valueReplacedToNumber * 100;
};
