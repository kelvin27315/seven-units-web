import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "@/components/Header.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>七単位</title>
      </Head>
      <div>
        <Header title="test" active="/" />
        <Component />
      </div>
    </>
  );
}
