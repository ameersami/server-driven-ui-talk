'use client';

import { type ChangeEvent, FormEvent, startTransition, useActionState } from 'react';

import styles from './page.module.css';

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
      <input
        key={`text-name-input`}
        type="text"
        name="name"
        value={state.get('name')?.toString()}
        onBlur={handleInputValueChange}
      />
      {/* <button type="submit" disabled={isPending}>Update</button> */}
      {/* {error && <p>{error}</p>} */}
    </form>
  );
}

export default UserSettingsPage;
