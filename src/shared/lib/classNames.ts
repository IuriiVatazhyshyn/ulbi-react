type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, aditional: string[] = []): string => {
  const modsClasses = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key);

  return [
    cls,
    ...aditional.filter(Boolean),
    ...modsClasses,
  ].join(' ');
};
