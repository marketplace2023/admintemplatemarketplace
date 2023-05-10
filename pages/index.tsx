import Graphic from "../components/graficos/Graphic";
import PieChart from "../components/graficos/Piechart";
import Cardinfo from "../components/Cardinfo";
import { BsBasket, BsCartDash } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { AiOutlineTags } from "react-icons/ai";
export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-4 gap-5 mb-16">
        <div className="rounded bg-gradient-to-r from-red-500 to-red-600 hover:bg-slate-400 h-40 shadow-xl cursor-pointer">
          <Cardinfo value={25} text="Ordenes" icon={<BsCartDash />} />
        </div>
        <div className="rounded bg-gradient-to-r from-blue-400 to-blue-500 bg-white hover:bg-slate-400 h-40 shadow-xl cursor-pointer">
          <Cardinfo value={80} text="Productos" icon={<BsBasket />} />
        </div>
        <div className="rounded bg-gradient-to-r from-green-400 to-green-500 bg-white hover:bg-slate-400 h-40 shadow-xl cursor-pointer">
          <Cardinfo value={10} text="Categorias" icon={<AiOutlineTags />} />
        </div>
        <div className="rounded bg-gradient-to-r from-amber-500 to-amber-600 bg-white hover:bg-slate-400 h-40 shadow-xl cursor-pointer">
          <Cardinfo value={5} text="Usuarios" icon={<SlUser />} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-16">
        <div className="rounded bg-white hover:bg-slate-400 h-60 shadow-xl">
          <h1>Estatus de las ordenes</h1>
          <Graphic />
        </div>
        <div className="rounded bg-white hover:bg-slate-400 h-60 shadow-xl">
          <h1>Estatus de las ordenes</h1>
          <PieChart />
        </div>
      </div>
    </>
  );
}
