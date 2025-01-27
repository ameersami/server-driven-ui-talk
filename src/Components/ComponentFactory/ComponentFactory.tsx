'use client';

import { type FormComponent } from "@/utils/userSettings/User Configuration UI Schemas";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { ChangeEvent, useContext, useRef } from "react";
import { UserSettingsFormContext } from "../UserSettingsForm/UserSettingsForm";

const ComponentFactory = (component: FormComponent) => {

  const compRef = useRef<any>(null);

  const handleChange = () => {
    if (compRef.current) {
      (compRef?.current as any).form?.requestSubmit();
    }
  };

  switch (component.type) {
    case 'textInput':
      return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor={component.id}>{component.label}</Label>
          <Input
            ref={compRef}
            id={component.id}
            type="text"
            name={component.id}
            defaultValue={component.defaultValue ?? ''}
            onBlur={handleChange}
          />
        </div>
      );
    case 'select':
    case 'multiSelect':
      return (
        <Select name={component.id} onValueChange={handleChange}>
          <SelectTrigger className="w-[180px]" ref={compRef}>
            <SelectValue placeholder={component.label}/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{component.label}</SelectLabel>
              {component.options.map(option => (
                <SelectItem key={`${component.id}-${option.value}-select-item`} value={option.value}>{option.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    case 'conditional':
    default:
      return (
        <></>
      );
  }
};

export default ComponentFactory;
