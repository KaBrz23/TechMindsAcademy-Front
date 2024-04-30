"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){

    await new Promise(r => setTimeout(r, 1000))
    

    const data = {
        curso: formData.get("curso"),
        descricao: formData.get("descricao"),
        preco: formData.get("preco"),
        duracao: formData.get("duracao"),
        instrutor: formData.get("instrutor")
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/curso`, options)

    if (resp.ok){
        redirect("/curso")
    }

    if (resp.status == 400){
        return {
            message: "campo nome é obrigatório"
        }
    }


}