export function resolveProps(resolver: Function) {
  const result = resolver();

  return result;
}
