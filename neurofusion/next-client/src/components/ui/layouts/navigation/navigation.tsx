import Link from "next/link";
import { FC } from "react";
import { ArrowRight } from "lucide-react";
import { useWindowScrollPosition } from "rooks";
import classNames from "classnames";

import { Logo } from "../../logo/logo";
import { ButtonLink } from "../../link/button-link";

import { navigationLinks } from "./data";

export const Navbar: FC = () => {
  const { scrollY } = useWindowScrollPosition();
  const showBorderBottom = scrollY > 16;

  return (
    <header
      className={classNames(
        "sticky left-0 right-0 top-0 z-50 flex h-16 w-full items-center bg-opacity-50 backdrop-blur-lg",
        {
          "border-b- border-b border-b-gray-100 shadow-sm dark:border-b-gray-800 dark:border-opacity-50":
            showBorderBottom,
        }
      )}
    >
      <nav className="container mx-auto flex items-center justify-between p-3">
        <Logo withText />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.title}
                href={`/${link.href}`}
                className="ml-8 text-[14.5px] font-medium text-primary-800 opacity-90 last:mr-8 hover:text-primary-900 hover:opacity-100 dark:text-primary-50 dark:hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ButtonLink href="/auth/login" rounded rightIcon={<ArrowRight size={16} />}>
            Login
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
};
