import UserSettingsForm from '@/Components/UserSettingsForm/UserSettingsForm';
import styles from './page.module.css';
import getUserSettingsComponents from '@/serverFns/getUserSettingsComponents';
import ComponentFactory from '@/Components/ComponentFactory/ComponentFactory';

const UserSettingsPage = async () => {
  
  const initialComponentState = await getUserSettingsComponents([]);

  return (
    <UserSettingsForm>
      {initialComponentState.map(component => <ComponentFactory {...component} />)}
    </UserSettingsForm>
  );
}

export default UserSettingsPage;
