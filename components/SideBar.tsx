import { forwardRef, LegacyRef, useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  BuildingStorefrontIcon,
  UserPlusIcon,
  MegaphoneIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

type MenuItem = {
  title: string;
  icon: JSX.Element;
  subMenuItems?: MenuItem[];
  path: string;
};

type SidBarProps = {
  showNav: boolean;
};

const Menus: MenuItem[] = [
  {
    title: "Home",
    icon: <HomeIcon className="h-5 w-5" />,
    path: "/",
  },
  {
    title: "Cliente",
    icon: <UserIcon className="h-5 w-5" />,
    path: "/usuarios",
    subMenuItems: [
      {
        title: "Cliente",
        icon: <UserIcon className="h-5 w-5" />,
        path: "/usuarios/create",
      },
    ],
  },
  {
    title: "Tiendas",
    icon: <BuildingStorefrontIcon className="h-5 w-5" />,
    path: "/tiendas",
  },
  {
    title: "Administradores",
    icon: <UserPlusIcon className="h-5 w-5" />,
    path: "/administradores",
  },
  {
    title: "Publicidad",
    icon: <MegaphoneIcon className="h-5 w-5" />,
    path: "/publicidad",
  },
  {
    title: "Pedidos",
    icon: <UserIcon className="h-5 w-5" />,
    path: "/pedidos",
  },
  {
    title: "Ayudas",
    icon: <UserIcon className="h-5 w-5" />,
    path: "/",
  },
];

const SideBar = forwardRef<HTMLDivElement, SidBarProps>(({ showNav }, ref) => {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleSubMenuClick = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div ref={ref} className="fixed z-20 w-56 h-full bg-emerald-400 shadow-sm">
      <div className="flex justify-center mt-6 mb-2">
        <picture>
          <img className="w-32 h-32" src="/12.png" alt="company logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        {Menus.map((menuItem, index) => (
          <Link key={index} href={menuItem.path}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == "/billing"
                  ? "bg-slate-400"
                  : "text-white hover:bg-white hover:text-emerald-400"
              }`}
            >
              <div className="mr-2">{menuItem.icon}</div>
              <div>
                <p>{menuItem.title}</p>
              </div>
              {menuItem.subMenuItems && (
                <ChevronDownIcon
                  className={`h-5 w-5 ml-auto ${
                    subMenuOpen ? "transform rotate-180" : ""
                  }`}
                  onClick={handleSubMenuClick}
                />
              )}
              {menuItem.subMenuItems && subMenuOpen && (
                <ul>
                  {menuItem.subMenuItems.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors"
                    >
                      <div className="mr-2">{subMenuItem.icon}</div>

                      <div>
                        <p>{subMenuItem.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
