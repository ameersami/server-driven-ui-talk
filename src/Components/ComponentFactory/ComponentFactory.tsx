import { type FormComponent } from "@/utils/userSettings/User Configuration UI Schemas";

const ComponentFactory = (component: FormComponent) => {
  switch (component.type) {
    case 'textInput':
      return (
        <div>
          Hi I'm a text input
        </div>
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
