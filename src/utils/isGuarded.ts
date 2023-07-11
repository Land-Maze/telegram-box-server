import { CanActivate } from "@nestjs/common";

/**
 * Check if a route is guarded by a specific guard type
 *
 * @export
 * @param {(((...args: any[]) => any) | (new (...args: any[]) => unknown))} route Provide here the route or controller that you want to check if it is guarded by the guard provided in the second parameter (guardType)
 * @param {new (...args: any[]) => CanActivate} guardType Provide here the guard that you want to check
 * @return {boolean} Returns true if the route is guarded by the guard provided in the second parameter (guardType)
 */
export function isGuarded(
  route: ((...args: any[]) => any) | (new (...args: any[]) => unknown),
  guardType: new (...args: any[]) => CanActivate,
) {
  const guards: any[] = Reflect.getMetadata("__guards__", route);

  if (!guards) {
    throw new Error(
      `Route "${route.name}" is not guarded by ${guardType.name}`,
    );
  }

  let foundGuard = false;
  const guardList: string[] = [];
  guards.forEach((guard) => {
    guardList.push(guard.name);
    if (guard.name === guardType.name) foundGuard = true;
  });

  if (!foundGuard)
    throw new Error(
      `Route "${route.name}" is not guarded by ${
        guardType.name
      }. Guards found: ${guardList.join(", ")}`,
    );

  return true;
}
