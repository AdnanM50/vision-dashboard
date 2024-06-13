import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full p-24">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to the Admin Dashboard
      </h1>
      {/* <Image
        src="/admin-dashboard.png"
        alt="Admin Dashboard"
        width={400}
        height={400}
      /> */}
    </main>
  );
}
