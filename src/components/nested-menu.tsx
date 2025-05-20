import clsx from "clsx";
import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import type { MenuItemType } from "@/types";
import { renderNestItems } from "./item-views";

export const NestMenu: React.FC<{ items: MenuItemType[]; btn: React.ReactNode; className?: string }> = ({ btn, items, className }) => {
  return (
    <Menu as="div" className={clsx("relative text-left", className || "inline-block")}>
      <div className="flex items-end">
        <MenuButton className="w-max inline-flex items-end gap-3 cursor-pointer">{btn}</MenuButton>
      </div>
      <MenuItems transition anchor="bottom start" className={clsx("absolute z-50 right-0 mt-2 w-max max-w-full min-w-56 origin-top-right divide-y divide-gray-100/20 rounded-md bg-white/10 shadow-lg focus:outline-none", "origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0")}>
        {items.map(({ key, items: subItems, ...props }) => (
          <NestItems key={key} items={subItems} {...props} />
        ))}
      </MenuItems>
    </Menu>
  );
};

type NestItemsProps = { label: React.ReactNode; href?: string; onClick?: () => void; items?: MenuItemType[] };
const NestItems: React.FC<NestItemsProps> = ({ label, href, onClick, items }) => {
  const [submenuVisible, setSubmenuVisible] = useState<boolean>(false);
  const subMenuToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmenuVisible((prev) => !prev);
  };
  return (
    <>
      <div className="px-1 py-1 max-h-[50vh] overflow-y-auto">
        <MenuItem>{({ close }) => renderNestItems(label, submenuVisible, subMenuToggle, close, href, onClick, items)}</MenuItem>
      </div>
      {items && submenuVisible && (
        <div className="px-1 py-1 max-h-[50vh] overflow-y-auto">
          {items.map(({ key, ...props }) => (
            <NestItems key={key} {...props} />
          ))}
        </div>
      )}
    </>
  );
};
