export default function NavigationBar(
  props: { active: string; class?: string },
) {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Works",
      href: "/works",
    },
    {
      name: "History",
      href: "/history",
    },
  ];
  const isHome = props.active == "/";
  return (
    <nav class={"flex " + props.class ?? ""}>
      <ul class="flex justify-center items-center gap-4 mx-4 my-6 flex-wrap">
        {items.map((item) => (
          <li>
            <a
              href={item.href}
              class={`p-2 ${
                isHome ? "text-green-900" : "text-gray-600"
              } hover:underline ${
                props.active == item.href ? "font-bold" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
