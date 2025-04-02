"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { TabButton } from "./tab-button";
import { TabOption } from "@/utils/constant";

interface TabsProps {
  tabs: TabOption[];
  defaultTab?: any;
  onChange: (id: string) => void;
  isHorizontal?: boolean;
}

export default function Tabs({
  tabs,
  defaultTab = tabs[0],
  onChange,
  isHorizontal = true,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  const handlePress = (id: string) => {
    setActiveTab(id);
    if (onChange) onChange(id);
  };

  return (
    <div>
      <div
        className={clsx(
          isHorizontal ? "flex overflow-x-auto gap-4" : "flex flex-col"
        )}
      >
        {tabs.map((tab: any) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => handlePress(tab.id)}
          />
        ))}
      </div>
    </div>
  );
}
