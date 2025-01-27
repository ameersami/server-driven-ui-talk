'use client';

import { type ChangeEvent, useActionState, useTransition } from 'react';

import styles from './page.module.css';
import { Input } from '@/Components/ui/input';
import getUserData from '@/serverFns/getUserData';

const UserSettingsPage = () => {
  
  const [isPending2, startTransition] = useTransition();
  const [state, submitAction, isPending] = useActionState<FormData, ChangeEvent<HTMLInputElement>>(
    async (previousState, newComponentData) => {
      const userData = await getUserData();
      console.log('previousState', previousState);
      console.log('newComponentData', newComponentData.target.value);
      console.log('userData', userData);

      previousState.set('name', newComponentData.target.value);

      return previousState;
    },
    new FormData(),
  );

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => submitAction(event as any));
  }

  console.log('state', state);
  
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        defaultValue={state.get('name')?.toString()}
        onBlur={handleInputValueChange}
      />
    </form>
  );
}

export default UserSettingsPage;
