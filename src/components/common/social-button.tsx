import { faB } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface SocialIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href: string;
}

export default function SocialIcon({
  children,
  href,
  className = "",
  ...props
}: SocialIconProps) {
  return (
    <Link href={href} passHref>
      <button className={className} aria-label="Social icon" {...props}>
        {children}
      </button>
    </Link>
  );
}
