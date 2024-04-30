"use server"

export async function getCurso() {
    await new Promise(r => setTimeout(r, 1000))
    const resp = await fetch(`${process.env.API_BASE_URL}/curso`, { next: { revalidate: 0 } })
    return await resp.json()
}