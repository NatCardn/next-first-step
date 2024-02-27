import { NavBar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <NavBar/>
    <main className="flex flex-col items-center p-24">
      <h1 className="text-lg">Hello Root Layout general</h1>
      {children}
    </main>

    </>
    

  );
}