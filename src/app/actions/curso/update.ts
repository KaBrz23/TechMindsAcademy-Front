"use server"

import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData){
    const id = formData.get("id")

    const data = {
        curso: formData.get("curso"),
        descricao: formData.get("descricao"),
        preco: formData.get("preco"),
        duracao: formData.get("duracao"),
        instrutor: formData.get("instrutor")
    }

    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/curso/${id}`, options)

    if (resp.ok){
        redirect("/curso")
    }

    if (resp.status == 400){
        return {
            message: "campo nome é obrigatório"
        }
    }
}