import { BularioConteiner } from '@/components/BularioConteiner';

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center phone:p-2">
      <main className=" bg-slate-50 h-5/6 w-6/12 boder rounded-xl p-6 phone:w-full">
        <h1 className="text-center text-2xl font-bold pb-6">
          Bulário Eletrônico
        </h1>
        <BularioConteiner />
      </main>
    </div>
  );
}
