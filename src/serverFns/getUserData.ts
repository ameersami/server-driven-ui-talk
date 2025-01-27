'use server';

import { readFile } from "fs/promises";

export default async () => {
  const data = (await readFile('./src/utils/userSettings/User Configuration UI Schema.json')).toString();

  return JSON.parse(data);
}