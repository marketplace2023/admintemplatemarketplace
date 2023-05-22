import { forwardRef, ReactNode, useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  BuildingStorefrontIcon,
  UserPlusIcon,
  MegaphoneIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

type SidBarProps = {
  showNav: boolean;
};

type MenuItem = {
  label: string;
  icon: ReactNode;
  path: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    path: "/",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    label: "Usuario",
    path: "/",
    icon: <UserIcon className="h-5 w-5" />,
    children: [
      {
        label: "Clientes",
        path: "/usuarios",
        icon: <MinusIcon className="h-5 w-5 mt-1 rounded" />,
      },
      {
        label: "Tiendas",
        path: "/tiendas",
        icon: <MinusIcon className="h-5 w-5 mt-1 rounded" />,
      },
    ],
  },
  {
    label: "Ayudas",
    path: "/ayudas",
    icon: <MegaphoneIcon className="h-5 w-5" />,
    // children: [
    //   {
    //     label: "Contenidos",
    //     path: "/subayuda",
    //     icon: <MinusIcon className="h-5 w-5 mt-1 rounded" />,
    //   },
    //   {
    //     label: "Tópicos",
    //     path: "/subayuda2",
    //     icon: <MinusIcon className="h-5 w-5 mt-1 rounded" />,
    //   },
    // ],
  },
];

const SideBar = forwardRef<HTMLDivElement, SidBarProps>(({ showNav }, ref) => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div ref={ref} className="fixed z-20 w-56 h-full bg-emerald-400 shadow-sm">
      <div className="flex justify-center mt-6 mb-2">
        <picture>
          <img className="w-32 h-32" src="/12.png" alt="company logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        {menuItems.map((menuItem, i) => {
          const hasChilren = Array.isArray(menuItem.children);
          const RootElement = hasChilren ? "div" : Link;
          const href = hasChilren ? undefined : menuItem.path;
          const handleMenuItemClicked = () => {
            setExpandedItem((prevLabel) =>
              prevLabel === menuItem.label ? null : menuItem.label
            );
          };

          return (
            <RootElement
              key={i}
              href={href}
              onClick={hasChilren ? handleMenuItemClicked : undefined}
            >
              <div
                className={`pl-6 py-3 rounded mx-2 text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  router.pathname == "/billing"
                    ? "bg-slate-400"
                    : "text-white hover:bg-white hover:text-emerald-400"
                }`}
              >
                <div className="mr-2">{menuItem.icon}</div>
                <div>
                  <p>{menuItem.label}</p>
                </div>
              </div>
              {hasChilren && expandedItem === menuItem.label && (
                <div className="mx-4">
                  <ul>
                    {menuItem.children.map((child, childIndex) => (
                      <li
                        key={childIndex}
                        className={`pl-6 py-3 rounded mx-2 text-center cursor-pointer mb-3 flex items-center transition-colors ${
                          router.pathname == child.path
                            ? "bg-white"
                            : "text-white hover:bg-white hover:text-emerald-400"
                        }`}
                      >
                        <Link href={child.path}>
                          <div className="flex">
                            {child.icon}
                            <p>{child.label}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </RootElement>
          );
        })}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
