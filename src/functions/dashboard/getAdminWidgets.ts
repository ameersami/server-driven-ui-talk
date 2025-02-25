'use server';
import { RootConfig } from '@/types/dashboardSchema';
import dashboard from '@/data/dashboardSchemaAdmin.json'

export default async () => dashboard as RootConfig;
