import React from "react";
//
import {
  faChevronDown,
  faEllipsisVertical,
  faEnvelope,
  faFilter,
  faMagnifyingGlass,
  faPhone,
  faSort,
  faTrashCan,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import clsx from "clsx";
//

const iconMap = {
  //
  // Profile
  email: faEnvelope,
  phone: faPhone,
  //
  //
  user: faUser,
  filter: faFilter,
  search: faMagnifyingGlass,
  sort: faSort,
  arrow: faChevronDown,
  //
  // Employee - list
  delete: faTrashCan,
  menu: faEllipsisVertical,
  //
} as const;

type IconName = keyof typeof iconMap;

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon: IconName;
}

export default function Icon({ icon, className, ...props }: IconProps) {
  const iconName: IconDefinition = iconMap[icon];
  const baseStyles = "text-base text-zinc-400";

  return (
    <span className={clsx(baseStyles, className)}>
      <FontAwesomeIcon icon={iconName} {...props} />
    </span>
  );
}
