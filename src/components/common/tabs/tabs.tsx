"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { TabButton } from "./tab-button";
import { TabOption } from "@/utils/constant";

interface TabsProps {
  tabs: TabOption[];
  activeTab?: TabOption;
  onTabChange: (id: string) => void;
  isHorizontal?: boolean;
}

export default function Tabs({
  tabs,
  activeTab = tabs[0],
  onTabChange,
  isHorizontal = true,
}: TabsProps) {

  const handlePress = (id: string) => {
    if (onTabChange) onTabChange(id);
  };

  return (
    <div>
      <div
        className={clsx(
          isHorizontal ? "flex overflow-x-auto gap-4" : "flex flex-col"
        )}
      >
        {tabs.map((tab: TabOption) => (
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
