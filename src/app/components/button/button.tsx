"use client";
interface ButtonProps {
    btnText: string;
}

export default function Home({ btnText}:ButtonProps) {
  return (
    <>
      <div className="min-h-screen  text-gray-600  p-4 md:p-8">
        <button>{btnText}</button>
      </div>
    </>
  );
}
