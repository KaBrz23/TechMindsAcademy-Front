import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="Meus Cursos" />
      <h2>Meus Cursos</h2>
    </main>
  );
}
