import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { NestMenu } from "@/components/nested-menu";
import type { MenuItemType } from "@/types";

const data: MenuItemType[] = [
  {
    key: "item_1",
    label: "item_1",
    items: [
      { key: "item_1_1", label: "item_1_1", href: "#" },
      {
        key: "item_1_2",
        label: "item_1_2",
        items: [
          { key: "item_1_2_1", label: "item_1_2_1", href: "#" },
          {
            key: "item_1_2_2",
            label: "item_1_2_2",
            items: [
              { key: "item_1_2_2_1", label: "item_1_2_2_1", href: "#" },
              { key: "item_1_2_2_2", label: "item_1_2_2_2", href: "#" },
            ],
          },
          { key: "item_1_2_3", label: "item_1_2_3", href: "#" },
        ],
      },
    ],
  },
  { key: "item_2", label: "item_2", href: "#" },
  { key: "item_3", label: "item_3", href: "#" },
  {
    key: "item_4",
    label: "item_4",
    items: [
      { key: "item_4_1", label: "item_4_1", href: "#" },
      { key: "item_4_2", label: "item_4_2", href: "#" },
    ],
  },
  { key: "item_5", label: "item_4", href: "#" },
  { key: "item_6", label: "item_5", href: "#" },
];

export const App: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen grid content-center bg-gradient-to-r from-blue-950 to-teal-900">
      <NestMenu
        className="mx-auto backdrop-blur-md"
        items={data}
        btn={
          <div className="flex items-center text-white">
            <Bars3CenterLeftIcon className="size-10" />
            Open Nested Menu
          </div>
        }
      />
    </div>
  );
};
