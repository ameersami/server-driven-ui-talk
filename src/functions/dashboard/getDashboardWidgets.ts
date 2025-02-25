'use server';
import { RootConfig } from '@/types/dashboardSchema';
import dashboard from '@/data/dashboardSchema.json'

export default async () => dashboard as RootConfig;
