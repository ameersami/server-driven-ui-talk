'use server';

import userSettings from '@/data/userSettingsSchema.json';

export default async () => {
  return userSettings;
}