import NavBar from "@/components/NavBar"
import { Button, Link } from "@nextui-org/react";
import { getCurso } from "../actions/curso/get";
import { CursoItem } from "./CursoItem";


export default async function Home() {
  
  const cursos : Array<Curso> = await getCurso()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="Cursos"/>
      <section className="flex flex-col gap-3 bg-slate-900 p-6 mt-6 rounded min-w-96">
        <div className="flex justify-between gap-20">
            <h2 className="text-2xl font-bold">Cursos</h2>
            <Link href="/curso/new">
              <Button color="primary">Novo Curso</Button>
            </Link>
        </div>
        {cursos.map(curso => <CursoItem curso={curso} />)}
        
      </section>
    </main>
  );
}


