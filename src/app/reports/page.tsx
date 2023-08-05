"use client";

import { AuthLayout, HeaderCrumb } from "../components/index";


export default function Home() {
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Reports" nextLink="" />
        </main>
      </AuthLayout>
    </>
  );
}