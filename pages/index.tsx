import Graphic from "../components/graficos/Graphic";
import PieChart from "../components/graficos/Piechart";
export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white hover:bg-slate-400 h-40 shadow-xl"></div>
        <div className="rounded bg-white hover:bg-slate-400 h-40 shadow-xl"></div>
        <div className="rounded bg-white hover:bg-slate-400 h-40 shadow-xl"></div>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-16">
        <div className="rounded bg-white hover:bg-slate-400 h-52 shadow-xl">
          <Graphic />
        </div>
        <div className="rounded bg-white hover:bg-slate-400 h-52 shadow-xl">
          <h1>Estaus de las ordenes</h1>
          <PieChart />
        </div>
      </div>
    </>
  );
}
