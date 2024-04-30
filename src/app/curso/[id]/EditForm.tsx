"use client"

import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";

import { useFormState } from "react-dom";
import { update } from "@/app/actions/curso/update";


export function EditForm(curso : Curso) {

    const initialState = {
        message: ""
    }


    const [state, formAction] = useFormState(update, initialState)
    return (
        <form action={formAction} className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
            <input type="hidden" name="id" value={curso.id} />
            <h2 className="text-2xl font-bold">Editar Curso {curso.curso}</h2>
            <Input
                key="curso"
                label="Curso"
                name="curso"
                variant="bordered"
                defaultValue={curso.curso}
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="descricao"
                label="Descrição"
                name="descricao"
                variant="bordered"
                defaultValue={curso.descricao}
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="preco"
                label="Preco"
                name="preco"
                variant="bordered"
                defaultValue={curso.preco}
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="duracao"
                label="Duracao"
                name="duracao"
                variant="bordered"
                defaultValue={curso.duracao}
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="instrutor"
                label="Instrutor"
                name="instrutor"
                variant="bordered"
                defaultValue={curso.instrutor}
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
    )
}