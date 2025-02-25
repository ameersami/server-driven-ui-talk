'use server';

import userConfig from '@/data/userSettingsSchema.json';
import { FormComponent } from '@/types/userSettingsSchema';

export default async (formComponents: Array<FormComponent>) => {

  if (!formComponents.length) {
    return getNextSetOfComponents([]);
  }

  return getNextSetOfComponents(formComponents);
};


const getNextSetOfComponents = (formComponents: Array<FormComponent>) => {
  
  const formComponentIds = new Set(formComponents.map(component => component.id));

  return (userConfig.components as Array<FormComponent>).filter(component => {

    if (formComponentIds.has(component.id)) {
      return false;
    }

    if (component.type === 'conditional') {
      return !!formComponents.find((formComponent) => formComponent.id === component.dependsOn.field && formComponent.selectedValue === component.dependsOn.value);
    }

    return true;
  }).map(component => {
    
    if (component.type === 'conditional') {
      return component.components
    }

    return component;
  }).flat();
  
};
