import { centsToInteger } from './centsToInteger';
import { formatPrice } from './formatPrice';
import { numberToCompactValue } from './numberToCompactValue';

export const centsToCompactValue = (valueInCents: number): string => {
  const centsFormattedToInteger = centsToInteger(valueInCents);

  if (centsFormattedToInteger < 1000) {
    return formatPrice(centsFormattedToInteger);
  }

  return numberToCompactValue(centsFormattedToInteger);
};
