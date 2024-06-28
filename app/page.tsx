import { Content, Header, Settings } from "./sections";

export default function Home() {
  return (
    <main className="pt-4 pb-1 px-10">
      <Header />
      <Settings />
      <Content />
    </main>
  );
}
