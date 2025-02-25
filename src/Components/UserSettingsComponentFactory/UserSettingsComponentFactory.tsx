'use client';

import { useEffect, useRef, useState } from 'react';
import { Dropdown, InputField, Toggle } from 'lib';

import { type FormComponent } from '@/types/userSettingsSchema';

import styles from './UserSettingsComponentFactory.module.css';

const ComponentFactory = (component: FormComponent) => {

  const compRef = useRef<any>(null);
  const [componentValue, componentValueSetter] = useState('');

  useEffect(() => {
    if (componentValue) {
      handleChange();
    }
  }, [componentValue]);

  const handleChange = () => {
    if (compRef.current) {
      compRef.current.querySelector('input:first-of-type').form?.requestSubmit();
    }
  };

  switch (component.type) {
    case 'textInput':
      return (
        <InputField
          ref={compRef}
          label={component.label}
          id={component.id}
          type="text"
          name={component.id}
          value={component.defaultValue ?? ''}
          onBlur={handleChange}
          onChange={() => {}}
          onFocus={() => {}}
          onKeyDown={() => {}}
          onKeyPress={() => {}}
          onKeyUp={() => {}}
        />
      )
    case 'select':
    case 'multiSelect':
      return (
        <div
          ref={compRef}
        >
          <input
            defaultValue={componentValue}
            name={component.id}
            className={styles.hiddenDropdownInput}
          />
          <Dropdown
            className={styles.dropdownStyles}
            label={component.label}
            onChange={newValue => componentValueSetter(newValue as string)}
            options={component.options.map(option => ({
              key: option.label,
              value: option.value
            }))}
          />
        </div>
      );
    case 'toggle':
      return (
        <Toggle
          appearance="positive"
          labelColor="var(--colors_GRAY_700)"
          label={component.label}
          isInline
          size="s"
        />
      );
    case 'conditional':
    default:
      return (
        <></>
      );
  }
};

export default ComponentFactory;
