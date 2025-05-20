import clsx from "clsx";
import { Button } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import type { MenuItemType } from "@/types";

const menuItemStyles = ["hover:bg-violet-500 hover:text-white", "text-gray-900", "cursor-pointer group w-full rounded-md px-2 py-2 text-sm flex items-center"];

export const renderNestItems = (label: React.ReactNode, submenuVisible: boolean, subMenuToggle: (e: React.MouseEvent<HTMLButtonElement>) => void, close: () => void, href?: string, onClick?: () => void, items?: MenuItemType[]) => {
  if (items) {
    return <ExpandBtn label={label} submenuVisible={submenuVisible} onClick={subMenuToggle} />;
  } else if (href) {
    return <MenuLink label={label} href={href} close={close} />;
  } else if (onClick) {
    return <MenuBtn label={label} onClick={onClick} close={close} />;
  } else {
    return <></>;
  }
};

type ExpandBtnProps = { label: React.ReactNode; submenuVisible: boolean; onClick: (e: React.MouseEvent<HTMLButtonElement>) => void };
const ExpandBtn: React.FC<ExpandBtnProps> = ({ label, submenuVisible, onClick }) => {
  return (
    <button className={clsx(...menuItemStyles)} onClick={onClick}>
      {!submenuVisible ? (
        <>
          {label}
          <ChevronRightIcon className="h-5 w-5 mr-2" />
        </>
      ) : (
        <>
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          {label}
        </>
      )}
    </button>
  );
};

type MenuLinkProps = { label: React.ReactNode; href: string; close: () => void };
const MenuLink: React.FC<MenuLinkProps> = ({ label, href, close }) => (
  <a href={href} onClick={close} className={clsx(...menuItemStyles)}>
    {label}
  </a>
);

type MenuBtnProps = { label: React.ReactNode; onClick: () => void; close: () => void };
const MenuBtn: React.FC<MenuBtnProps> = ({ label, onClick, close }) => {
  const handleClick = () => {
    close();
    onClick();
  };
  return (
    <Button onClick={handleClick} className={clsx(...menuItemStyles)}>
      {label}
    </Button>
  );
};
