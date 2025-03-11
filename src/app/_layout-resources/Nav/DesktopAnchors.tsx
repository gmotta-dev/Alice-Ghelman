import Link from "next/link";

import { navAnchors } from "./nav-anchors";

export default function DesktopAnchors() {
  return (
    <div className="hidden items-center gap-9 lg:flex">
      {navAnchors.map((anchor) => (
        <Link key={anchor.href} href={anchor.href}>
          {anchor.label}
        </Link>
      ))}
    </div>
  );
}
