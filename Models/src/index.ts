const world = 'world';

export function hello(world: string = "world"): string {
    console.log("hello");
  return `Hello ${world}! `;
}