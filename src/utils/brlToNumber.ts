export const brlToNumber = (value: string): number =>
  parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.'));
