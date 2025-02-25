import UserSettingsForm from '@/Components/UserSettingsForm/UserSettingsForm';
import UserSettingsComponentFactory from '@/Components/UserSettingsComponentFactory/UserSettingsComponentFactory';

import getUserSettingsComponents from '@/functions/userSettings/getUserSettingsComponents';

import styles from './page.module.css';

const UserSettingsPage = async () => {
  
  const initialComponentState = await getUserSettingsComponents([]);

  return (
    <div className={styles.container}>
      <UserSettingsForm>
        {initialComponentState.map(component => <UserSettingsComponentFactory {...component} />)}
      </UserSettingsForm>
    </div>
  );
}

export default UserSettingsPage;
