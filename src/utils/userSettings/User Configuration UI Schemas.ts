// Base component properties that all components share
interface BaseComponent {
  type: string;
  id: string;
  label: string;
  required?: boolean;
}

// Validation rules for various field types
interface ValidationRules {
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  pattern?: string;
}

// Option type for select/multiselect components
interface SelectOption {
  label: string;
  value: string;
}

// Component-specific interfaces
interface TextInputComponent extends BaseComponent {
  type: 'textInput';
  placeholder?: string;
  defaultValue?: string;
  validations?: ValidationRules;
}

interface SelectComponent extends BaseComponent {
  type: 'select';
  options: SelectOption[];
  defaultValue?: string;
  searchable?: boolean;
}

interface MultiSelectComponent extends BaseComponent {
  type: 'multiSelect';
  options: SelectOption[];
  defaultValue?: string[];
}

interface ToggleComponent extends BaseComponent {
  type: 'toggle';
  defaultValue?: boolean;
}

interface ConditionalComponent extends Omit<BaseComponent, 'label'> {
  type: 'conditional';
  dependsOn: {
    field: string;
    value?: string;
    values?: string[];
  };
  components: FormComponent[];
}

// Action button interface
interface ActionButton {
  type: 'button';
  label: string;
  action: string;
  style: 'primary' | 'secondary' | 'danger';
  confirmationRequired?: boolean;
}

// Union type for all possible form components
type FormComponent =
  | TextInputComponent
  | SelectComponent
  | MultiSelectComponent
  | ToggleComponent
  | ConditionalComponent;

// Main schema interface
interface DynamicFormSchema {
  type: 'form';
  title: string;
  components: FormComponent[];
  actions: ActionButton[];
}

// Type guard functions for component types
const isTextInput = (component: FormComponent): component is TextInputComponent => 
  component.type === 'textInput';

const isSelect = (component: FormComponent): component is SelectComponent =>
  component.type === 'select';

const isMultiSelect = (component: FormComponent): component is MultiSelectComponent =>
  component.type === 'multiSelect';

const isToggle = (component: FormComponent): component is ToggleComponent =>
  component.type === 'toggle';

const isConditional = (component: FormComponent): component is ConditionalComponent =>
  component.type === 'conditional';

// Example type for form values based on component types
type FormValues = {
  [K: string]: string | string[] | boolean | null;
};

// Type for handling conditional rendering logic
type ConditionalLogic = {
  field: string;
  value?: string;
  values?: string[];
  operator?: 'equals' | 'notEquals' | 'in' | 'notIn';
};

// Type for component visibility state
type ComponentVisibility = {
  [componentId: string]: boolean;
};

// Export all types
export type {
  BaseComponent,
  ValidationRules,
  SelectOption,
  TextInputComponent,
  SelectComponent,
  MultiSelectComponent,
  ToggleComponent,
  ConditionalComponent,
  ActionButton,
  FormComponent,
  DynamicFormSchema,
  FormValues,
  ConditionalLogic,
  ComponentVisibility
};

// Export type guards
export {
  isTextInput,
  isSelect,
  isMultiSelect,
  isToggle,
  isConditional
};
