export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white hover:bg-slate-400 h-40 shadow-xl"></div>
        <div className="rounded bg-white hover:bg-slate-400 h-40 shadow-xl"></div>
        <div className="rounded bg-white hover:bg-slate-400 h-40 shadow-xl"></div>
      </div>
      <div className="grid col-1 bg-white hover:bg-slate-400 h-96 shadow-xl"></div>
    </>
  );
}
