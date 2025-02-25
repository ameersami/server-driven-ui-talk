'use client';

import { SegmentedToggle } from "lib";
import { type JSX, useState } from "react";

export default ({ adminChildren, superAdminChildren, plainUserChildren }: { adminChildren: JSX.Element; superAdminChildren: JSX.Element; plainUserChildren: JSX.Element }) => {

  const [selectedValue, selectedValueSetter] = useState<'Admin' | 'Super Admin' | 'Plain User'>('Admin');

  return (
    <>
      <SegmentedToggle
        isGroup
        defaultValue="Admin"
        onChange={event => selectedValueSetter(event.target.value)}
        appearance="primary"
      >
        <SegmentedToggle value="Admin" label="Admin" />
        <SegmentedToggle value="Super Admin" label="Super Admin" />
        <SegmentedToggle value="Plain User" label="Plain User" />
      </SegmentedToggle>
      {selectedValue === 'Admin' && adminChildren}
      {selectedValue === 'Super Admin' && superAdminChildren}
      {selectedValue === 'Plain User' && plainUserChildren}
    </>
  );

};