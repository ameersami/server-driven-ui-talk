import { Column, Icon, Row, SummaryCard, Text } from 'lib';

import DataTable from '@/Components/DataTable/DataTable';
import BarChart from '@/Components/BarChart/BarChart';
import LineChart from '@/Components/LineChart/LineChart';

import { DataTableConfig, MetricsCardConfig, type Widget } from '@/types/dashboardSchema';

import styles from './WidgetDashboardFactory.module.css';
import MetricsIcon from '../MetricsIcon/MetricsIcon';
import RevenuePieChart from '../PieChart/PieChart';

export default (widget: Widget) => {
  switch (widget.type) {
    case 'metrics-card':
      const metricsConfig = (widget.config as MetricsCardConfig);
      return (
        <div
          className={styles.column}
          data-col={widget.position.width}
          data-row={widget.position.height}
        >
          <Row direction="row" wrap={false} vAlign="center" fullHeight columnsHGap="xs">
            <MetricsIcon type={widget.title.split(' ')[1].toUpperCase() as any} />
            <Column>
              <Text spacing="none" textStyle="s" textWeight="medium" textColor="var(--colors_GRAY_500)">{widget.title}</Text>
              <Text spacing="none" textStyle="xl" textWeight="bold" textColor="var(--colors_GRAY_700)">{metricsConfig.metrics[0].value}</Text>
            </Column>
          </Row>
        </div>
      );
    case 'bar-chart':

      return (
        <div
          className={`${styles.column} ${styles.columnFlexContainer}`}
          data-col={widget.position.width}
          data-row={widget.position.height}
        >
          <Row>
            <Text spacing="none">{widget.title}</Text>
          </Row>
          <BarChart/>
        </div>
      );
    case 'pie-chart':

      return (
        <div
          className={`${styles.column} ${styles.columnFlexContainer}`}
          data-col={widget.position.width}
          data-row={widget.position.height}
        >
          <Row>
            <Text spacing="none">{widget.title}</Text>
          </Row>
          <RevenuePieChart/>
        </div>
      );
    case 'dataTable':

      const tableConfig = (widget.config as DataTableConfig);

      const columns = tableConfig.columns.map(column => ({
        columnHeader: {
          accessor: column.field,
          titleText: column.header,
          isFilterable: false,
          isSortable: column.sortable
        }
      }));

      const tableData = Array(10).fill(0).map(_ => {
        const data: Record<string, any> = {};

        tableConfig.columns.forEach(column => {
          data[column.field] = 10
        });

        return data;
      });

      return (
        <div
          className={`${styles.column} ${styles.table}`}
          data-col={widget.position.width}
          data-row={widget.position.height}
        >
          <Text textStyle="m" spacing="xs">{widget.title}</Text>
          <Text spacing="xs"/>
          <DataTable
            defaultSorted={[]}
            defaultFilters={[]}
            ctaButtons={[]}
            iconButtons={[]}
            columns={columns}
            data={tableData}
            hasPagination
            rowsPerPage={5}
            pageSizeOptions={[5, 10, 15, 20]}
            rowSpacing="COMPACT"
          />
        </div>
      );
    case 'line-chart':
      return (
        <div
          className={`${styles.column} ${styles.columnFlexContainer}`}
          data-col={widget.position.width}
          data-row={widget.position.height}
        >
          <Row>
            <Text spacing="none">{widget.title}</Text>
          </Row>
          <LineChart/>
        </div>
      );
    default:
      return (
        <></>
      );
  }
};
