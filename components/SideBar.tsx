import { forwardRef, LegacyRef } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  BuildingStorefrontIcon,
  UserPlusIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

type SidBarProps = {
  showNav: boolean
}

const SideBar = forwardRef<HTMLDivElement, SidBarProps>(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed z-20 w-56 h-full bg-emerald-400 shadow-sm">
      <div className="flex justify-center mt-6 mb-2">
        <picture>
          <img className="w-32 h-32" src="/12.png" alt="company logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-slate-400"
              : "text-white hover:bg-white hover:text-emerald-400"
              }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/usuarios">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-white"
              : "text-white hover:bg-white hover:text-emerald-400"
              }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Cliente</p>
            </div>
          </div>
        </Link>
        <Link href="/tiendas">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-white"
              : "text-white hover:bg-white hover:text-emerald-400"
              }`}
          >
            <div className="mr-2">
              <BuildingStorefrontIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Tiendas</p>
            </div>
          </div>
        </Link>
        <Link href="/administradores">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-white"
              : "text-white hover:bg-white hover:text-emerald-400"
              }`}
          >
            <div className="mr-2">
              <UserPlusIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Administradores</p>
            </div>
          </div>
        </Link>
        <Link href="/publicidad">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-white"
              : "text-white hover:bg-white hover:text-emerald-400"
              }`}
          >
            <div className="mr-2">
              <MegaphoneIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Publicidad</p>
            </div>
          </div>
        </Link>
        <Link href="/pedidos">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-white"
              : "text-white hover:bg-white hover:text-emerald-400"
              }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Pedidos</p>
            </div>
          </div>
        </Link>
        <Link href="/Usuarios">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing"
              ? "bg-white"
              : "text-white hover:bg-white hover:text-emerald-400"
              }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Ayudas</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
