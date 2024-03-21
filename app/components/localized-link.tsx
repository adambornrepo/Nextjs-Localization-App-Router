"use client";

import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import type { AppPathnames } from "@/localization/config";
import { Link } from "@/localization/navigation";

export default function LocalizedLink<Pathname extends AppPathnames>({
  href,
  className,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(isActive ? "active-link" : "", className)}
      href={href}
      {...rest}
    />
  );
}
