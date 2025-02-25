import WidgetDashboardFactory from '@/Components/WidgetDashboardFactory/WidgetDashboardFactory';
import getDashboardWidgets from '@/functions/dashboard/getDashboardWidgets';

import styles from './page.module.css';
import DashboardSwitcher from '@/Components/DashboardSwitcher/DashboardSwitcher';
import getAdminWidgets from '@/functions/dashboard/getAdminWidgets';
import getPlainUserWidgets from '@/functions/dashboard/getPlainUserWidgets';

const WidgetDashboard = async () => {

  const widgets = await getDashboardWidgets();
  const superAdminWidgets = await getAdminWidgets();
  const plainUserWidgets = await getPlainUserWidgets();

  return (
    <div className={styles.wrapper}>
      <DashboardSwitcher
        adminChildren={(
          <div className={styles.container}>
            {widgets.dashboard.layout.widgets.map(WidgetDashboardFactory)}
          </div>
        )}
        superAdminChildren={(
          <div className={styles.container}>
            {superAdminWidgets.dashboard.layout.widgets.map(WidgetDashboardFactory)}
          </div>
        )}
        plainUserChildren={(
          <div className={styles.container}>
            {plainUserWidgets.dashboard.layout.widgets.map(WidgetDashboardFactory)}
          </div>
        )}
      />
    </div>
  )

};

export default WidgetDashboard;
