import NavBar from "@/components/NavBar"
import { Apple, ChevronDown, Plus } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default async function Cursos() {

//   const cursos : Array<Cursos> = await getCursos()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="Cursos" />

      <section className="flex flex-col gap-5 bg-zinc-900 p-6 mt-6 rounded min-w-96">

        <div className="flex justify-between gap-4">
          <h2 className="text-2xl font-bold">Cursos Cadastrados</h2>
          <Link href="/Cursos/new">
            <Button color="primary" startContent={<Plus size={18} />}>
              Adicionar
            </Button>
          </Link>
        </div>

        {/* {cursos.map(cursos => <CategoriaItem cursos={cursos} /> )} */}

      </section>
      
    </main>
  );
}