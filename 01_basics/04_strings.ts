// ...existing code...
// Make this file a module so top-level names don't collide with other files
export {};

 // Basic typing
const tsName: string = "Ashish";
const tsRepos: number = 25;
const greeting: string = `Hi ${tsName}, you have ${tsRepos} repos.`;

// String literal types and unions
type Env = "dev" | "staging" | "prod";
const currentEnv: Env = "dev";

// Template literal types (TS 4.1+)
type IDPrefix = "user" | "repo";
type WithId<P extends string> = `${P}-${number}`;
const uid: WithId<IDPrefix> = "user-123"; // valid

// Function signatures
function greet(name: string): string {
  return `Hello, ${name.toUpperCase()}`;
}

console.log(greeting, greet(tsName), currentEnv, uid);

// Const assertions for precise literal types
const statuses = ["ok", "error"] as const;
type Status = typeof statuses[number];
// ...existing code...