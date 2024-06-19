import BentoMain from "./components/BentoMain";
import { Hero } from "./components/Hero";
import { ModeToggle } from "./components/ThemeToggle";
export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Hero />
      <BentoMain />
      <ModeToggle  />
    </main>
  );
}
