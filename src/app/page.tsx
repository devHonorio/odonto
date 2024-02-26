import { Header } from "@/components/landingpage/Header";
import { Presentation } from "@/components/landingpage/Presentation";
import { Sobre } from "@/components/landingpage/Sobre";
import { Trataments } from "@/components/landingpage/Trataments";

export default function Home() {
  return (
    <div className="mx-auto flex w-10/12 flex-col gap-5">
      <Header />

      <Presentation />

      <Trataments />

      <Sobre />
      <footer className="text-center text-sm">
        © 2024 Cola. Todos os direitos reservados.
      </footer>
    </div>
  );
}
