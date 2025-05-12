import { Context } from 'hono';

export interface Env {
	drizzleDemo: D1Database;
}

export type IHono = Context<{ Bindings: Env }>;
