'use client';

import { type ChangeEvent, type JSX, startTransition, useActionState } from 'react';
import { Avatar, Card, Row, Text } from 'lib';
import Image from 'next/image';

import UserSettingsComponentFactory from '@/Components/UserSettingsComponentFactory/UserSettingsComponentFactory';

import getUserSettingsComponents from '@/functions/userSettings/getUserSettingsComponents';

import { FormComponent } from '@/types/userSettingsSchema';

import styles from './UserSettingsForm.module.css';

const UserSettingsForm: React.FC<{ children: string | JSX.Element | JSX.Element[]; }> = (props) => {
  
  const [state, submitAction, isPending] = useActionState<Array<FormComponent>, ChangeEvent<HTMLFormElement>>(
    async (previousState, newComponentData) => {

      const newData = new FormData(newComponentData.target);
      const convertedComponentData = Array.from(newData.entries()).map(([id, value]) => ({
        id,
        selectedValue: value
      })) as Array<FormComponent>;

      const newComps = await getUserSettingsComponents(convertedComponentData);

      return newComps;
    },
    []
  );

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    startTransition(() => submitAction(event));
  }

  return (
    <Card
      hasPadding={false}
      borderColor="var(--colors_GRAY_300)"
    >
      <Image
        src="/userSettingsHero.jpg"
        blurDataURL="/userSettingsHero.jpg"
        height={250}
        width={1500}
        alt="User settings hero image"
        className={styles.heroImage}
      />
      <Avatar
        size="xl"
        src="/ameerAvatar.png"
        className={styles.avatar}
      />
      <Row direction="column" hPadding="m" vPadding="s" columnsHGap="none">
        <Text spacing="none" textStyle="xxl">Ameer Sami</Text>
        <Text spacing="none" textStyle="s">@ameersami.com</Text>
        <Text spacing="m" />
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          {props.children}
          {state.map(component => <UserSettingsComponentFactory key={`fetched-component-${component.id}`} {...component} />)}
        </form>
      </Row>
    </Card>
  );
}

export default UserSettingsForm;
