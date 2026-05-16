export const toKobo = (naira: number): number => Math.round(naira * 100);

export const fromKobo = (kobo: number): number => Number((kobo / 100).toFixed(2));

export const createReference = (prefix: string): string => `${prefix}_${Date.now()}`;
