'use client';

import { type ChangeEvent, FormEvent, startTransition, useActionState } from 'react';

import styles from './page.module.css';
import { Input } from '@/Components/ui/input';

const UserSettingsPage = () => {
  
  const [state, submitAction, isPending] = useActionState<FormData, ChangeEvent<HTMLInputElement>>(
    async (previousState, newComponentData) => {
      console.log('previousState', previousState);
      console.log('newComponentData', newComponentData.target.value);

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
