import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

export function Badge({
  label,
  href,
  icon,
  leading = false,
  className,
  children,
  ...rest
}) {
  const Tag = href ? "a" : "span";
  return (
    <Tag
      href={href}
      className={cn(
        "group inline-flex  items-center rounded-2xl bg-secondary-100 text-secondary-500 dark:text-secondary-300 text-md px-4 py-2 mt-5 ",
        href &&
          "cursor-pointer hover:bg-success-200 dark:hover:bg-success-800 transition duration-200 ease-in-out",
        className
      )}
      {...rest}
    >
      {leading && <Icon icon={icon} className="size-5" />}
      {label}
      {children}
      {!leading && <Icon icon={icon} className="size-5" />}
    </Tag>
  );
}
