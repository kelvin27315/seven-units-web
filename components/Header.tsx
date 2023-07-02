import NavigationBar from "./NavigationBar.tsx";

export default function Header(props: { title: string; active: string }) {
  const isHome = props.active == "/";
  return (
    <header
      class={"mx-auto max-w-screen-lg flex gap-3 " +
        (isHome ? "justify-end" : "justify-between")}
    >
      {!isHome && <div class="p-4 flex items-center">Title</div>}
      <NavigationBar class="hidden md:flex" active={props.active} />
    </header>
  );
}
