import { columnWidths } from "lib/dist/interfaces/Grid";

// Basic types
type TickUnit = 'Date' | 'Month' | 'Monetary';

// Position configuration for widgets
interface Position {
  width: columnWidths;
  height: number;
}

// Common configuration for all widgets
interface BaseWidgetConfig {
  dataSource?: string;
  refreshInterval?: number;
}

// Metric configuration
interface MetricConfig {
  label: string;
  value: number;
  change?: number;
  changeType?: 'increase' | 'decrease';
  format?: string;
}

// Chart axes configuration
interface AxisConfig {
  type: 'time' | 'linear' | 'category';
  tickUnit: TickUnit;
}

// Series configuration
interface SeriesConfig {
  name: string;
  color: string;
}

// Widget specific configurations
interface MetricsCardConfig extends BaseWidgetConfig {
  metrics: MetricConfig[];
}

interface LineChartConfig extends BaseWidgetConfig {
  series: SeriesConfig[];
  axes: {
    x: AxisConfig;
    y: AxisConfig;
  };
}

interface BarChartConfig extends BaseWidgetConfig {
  series: SeriesConfig[];
  axes: {
    x: AxisConfig;
    y: AxisConfig;
  };
  barOptions: {
    barGap: number;
    barCategoryGap: string;
  };
}

interface DataTableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  hidden?: boolean;
  pinned?: 'left' | 'right';
  width?: number;
}

interface DataTableFeatures {
  search: {
    enabled: boolean;
    placeholder: string;
    highlightMatches: boolean;
  };
  filter: {
    enabled: boolean;
    operators: string[];
  };
  sort: {
    enabled: boolean;
    multiSort: boolean;
  };
  selection: {
    enabled: boolean;
    mode: 'single' | 'multiple';
    showCheckbox: boolean;
  };
  export: {
    enabled: boolean;
    formats: string[];
  };
  columnResize: boolean;
  columnReorder: boolean;
  rowReorder: boolean;
  groupBy: {
    enabled: boolean;
    expandedByDefault: boolean;
  };
}

interface DataTableConfig extends BaseWidgetConfig {
  pagination: {
    enabled: boolean;
    pageSize: number;
    pageSizeOptions: number[];
  };
  columns: DataTableColumn[];
  features: DataTableFeatures;
  style: {
    alternateRowColor: boolean;
    hoverable: boolean;
    bordered: boolean;
  };
}

// Widget types union
type WidgetType = 'metrics-card' | 'line-chart' | 'dataTable' | 'bar-chart' | 'pie-chart';

// Widget configuration union type
type WidgetConfig = MetricsCardConfig | LineChartConfig | DataTableConfig | BarChartConfig;

// Widget definition
interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  position: Position;
  config: WidgetConfig;
}

// Dashboard layout settings
interface DashboardLayoutSettings {
  allowRearrange: boolean;
  allowResize: boolean;
  snapToGrid: boolean;
  compactType: 'vertical' | 'horizontal';
  preventCollision: boolean;
}

// Dashboard interaction settings
interface DashboardInteractions {
  dragAndDrop: boolean;
  resize: boolean;
  maximize: boolean;
  minimize: boolean;
  remove: boolean;
}

// Dashboard responsive settings
interface ResponsiveConfig {
  enabled: boolean;
  breakpoints: {
    [key: string]: {
      cols: number;
      rowHeight: number;
    };
  };
}

// Dashboard settings
interface DashboardSettings {
  refreshInterval: number;
  layout: DashboardLayoutSettings;
  interactions: DashboardInteractions;
  responsive: ResponsiveConfig;
}

// Dashboard layout
interface DashboardLayout {
  type: 'grid';
  columns: number;
  spacing: number;
  breakpoints: {
    [key: string]: number;
  };
  widgets: Widget[];
}

// Main dashboard configuration
interface DashboardConfig {
  title: string;
  layout: DashboardLayout;
  settings: DashboardSettings;
}

// Root configuration
interface RootConfig {
  dashboard: DashboardConfig;
}

export type {
  RootConfig,
  DashboardConfig,
  Widget,
  Position,
  WidgetType,
  WidgetConfig,
  MetricsCardConfig,
  LineChartConfig,
  BarChartConfig,
  DataTableConfig,
  DataTableColumn,
  DataTableFeatures,
  DashboardSettings,
  DashboardLayout,
  DashboardLayoutSettings,
  DashboardInteractions,
  ResponsiveConfig,
  TickUnit,
  SeriesConfig,
  AxisConfig,
  MetricConfig
};