import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/auth/register", label: "Register" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      INIT NEXT APP PROJECT
      {routes.map((route) => (
        <Link href={route.href}>{route.label}</Link>
      ))}
    </main>
  );
}
