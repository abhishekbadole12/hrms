"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { TabButton } from "./tab-button";

interface TabsProps {
  tabs: any;
  defaultTab: any;
  onChange: (index: number) => void;
  isHorizontal?: boolean
}

export default function Tabs({
  tabs,
  defaultTab,
  onChange,
  isHorizontal = true
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handlePress = (id: number) => {
    setActiveTab(id);
    if (onChange) onChange(id);
  };

  return (
    <div>
    <div className={clsx("border-b border-gray-300", isHorizontal ? "flex overflow-x-auto" : "flex flex-col")}> 
      {tabs.map((tab: any) => (
        <TabButton
          key={tab.id}
          label={tab.label}
          isActive={activeTab === tab.id}
          onClick={() => handlePress(tab.id)}
        />
      ))}
    </div>
  </div>
  );
}
