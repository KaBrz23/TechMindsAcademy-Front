"use client"

import { destroy } from "@/app/actions/curso/destroy";
import DropDown from "./DropDown";
import { Icon } from "./Icon";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface CursoItemProps {
    curso: Curso
}

export function CursoItem(props: CursoItemProps) {
    const curso = props.curso
    const router = useRouter()
    
    function handleDelete() {
        toast.promise(
            destroy(curso.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }
    
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 border-white border-2 p-2 bg-black rounded-lg">
                <span>{curso.curso}</span>
            </div>
            <DropDown 
                onEdit={() => router.push("/curso/" + curso.id)}
                onDelete={handleDelete}
            />
        </div>
    )
}