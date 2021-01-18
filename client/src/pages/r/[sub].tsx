import { useRouter } from "next/router";

export default function Sub() {
  const router = useRouter();

  console.log(router.query);

  return <h1 className="text-5xl">{router.query.sub}</h1>;
}
