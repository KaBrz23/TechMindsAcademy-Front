import Link from "next/link";

interface NavBarProps {
    active: "Meus Cursos" | "Cursos"
}

export default function NavBar(props: NavBarProps) {
    const active = props.active
    const activeClass = "border-b-4 pb-4 border-neutral-300"

    return (
        <nav className="flex bg-zinc-900 w-full justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-bold">TechMinds Academy</h1>
            <ul className="flex gap-6">
                <li className={active == "Meus Cursos" ? activeClass : ""} >
                    <Link href="/">Meus Cursos</Link>
                </li>
                <li className={active == "Cursos" ? activeClass : ""} >
                    <Link href="/Cursos">Cursos</Link>
                </li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}