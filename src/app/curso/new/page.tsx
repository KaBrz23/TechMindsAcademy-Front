'use client'

import { create } from "@/app/actions/curso/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input, Link } from "@nextui-org/react";
import { useFormState } from "react-dom";

export default async function Home() {
  
  const initialState = {
    message: ""
  }

  const [state, formAction] = useFormState(create, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="Cursos"/>
      
      <form action={formAction} className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar Curso</h2>
        <Input
                key="curso"
                label="Curso"
                name="curso"
                variant="bordered"
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="descricao"
                label="Descrição"
                name="descricao"
                variant="bordered"
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="preco"
                label="Preco"
                name="preco"
                variant="bordered"
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="duracao"
                label="Duracao"
                name="duracao"
                variant="bordered"
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="instrutor"
                label="Instrutor"
                name="instrutor"
                variant="bordered"
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

        <div className="flex justify-around">
          <Link href="/curso">
              <Button variant="bordered">Cancelar</Button>
          </Link>

          <SubmitButton />
        </div>
      </form>
    </main>
  );
}