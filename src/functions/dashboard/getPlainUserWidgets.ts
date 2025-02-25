'use server';
import { RootConfig } from '@/types/dashboardSchema';
import dashboard from '@/data/dashboardSchemaPlainUser.json'

export default async () => dashboard as RootConfig;
