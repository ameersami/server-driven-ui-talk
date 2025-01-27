import { type FormComponent } from "@/utils/userSettings/User Configuration UI Schemas";
import { Input } from "../ui/input";

export type Component = {
  defaultValue: string;
} & FormComponent

const ComponentFactory = (component: Component) => {
  switch (component.type) {
    case 'textInput':
      return (
        <>
          <label
            htmlFor={component.id}
            key={`${component.id}-label`}
          >
            {component.label}
          </label>
          <Input
            key={`${component.id}-input`}
            id={component.id}
            name={component.label}
            type="text"
            defaultValue={component.defaultValue ?? ''}
          />
        </>
      );
    case 'multiSelect':
      return (
        <div>
          Hi I'm a multi-select
        </div>
      );
    case 'select':
      return (
        <div>
          Hi I'm a select
        </div>
      );
    case 'toggle':
      return (
        <div>
          Hi I'm a toggle
        </div>
      );
    case 'conditional':
    default:
      return (
        <></>
      );
  }
};

export default ComponentFactory;
