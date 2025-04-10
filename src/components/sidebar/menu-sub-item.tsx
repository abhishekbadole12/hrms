import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubSection {
  label: string;
  route: string;
}

interface MenuSubItemProps {
  subSection: SubSection;
  pathname: string;
}

export default function MenuSubItem({
  subSection,
  pathname,
}: MenuSubItemProps) {
  const path = usePathname();

  return (
    <li>
      <Link
        href={pathname}
        key={subSection.label}
        className={`flex items-center gap-3 py-2 px-3 mt-1 rounded-md ${
          pathname.split('?')[0] === path ? "bg-slate-200 text-primary" : "text-gray-800"
        }`}
      >
        <FontAwesomeIcon
          icon={faHashtag}
          className="text-sm text-nav-label opacity-60"
        />
        <span className="text-sm text-primary">{subSection.label}</span>
      </Link>
    </li>
  );
}
