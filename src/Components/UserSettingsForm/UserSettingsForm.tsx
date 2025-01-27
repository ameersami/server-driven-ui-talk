'use client';

import { type ChangeEvent, createContext, type JSX, startTransition, useActionState, useTransition } from 'react';

import { Input } from '@/Components/ui/input';
import getUserSettingsComponents from '@/serverFns/getUserSettingsComponents';
import { FormComponent } from '@/utils/userSettings/User Configuration UI Schemas';
import ComponentFactory from '../ComponentFactory/ComponentFactory';

const UserSettingsForm: React.FC<{ children: string | JSX.Element | JSX.Element[]; }> = (props) => {
  
  const [state, submitAction, isPending] = useActionState<Array<FormComponent>, ChangeEvent<HTMLFormElement>>(
    async (previousState, newComponentData) => {

      const newData = new FormData(newComponentData.target);
      const convertedComponentData = Array.from(newData.entries()).map(([id, value]) => ({
        id,
        selectedValue: value
      })) as Array<FormComponent>;

      const newComps = await getUserSettingsComponents(convertedComponentData);
      console.log(newComps);

      return newComps;
    },
    [],
  );

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(() => submitAction(event));
  }

  return (
    <form onSubmit={handleSubmit}>
      {props.children}
      {state.map(component => <ComponentFactory key={`fetched-component-${component.id}`} {...component} />)}
    </form>
  );
}

export default UserSettingsForm;
