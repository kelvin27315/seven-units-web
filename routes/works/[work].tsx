import { PageProps } from "$fresh/server.ts";

export default function WorkPage(props: PageProps) {
  const { work } = props.params;
  return <main>name: {work}</main>;
}
