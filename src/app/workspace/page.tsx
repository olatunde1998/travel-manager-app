"use client";
import { HeaderCrumb } from "../components/header-crumb/HeaderCrumb";
import { AuthLayout } from "../components/index"

// import { Card } from "../components/index";


export default function Home() {
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Your Workspace" nextLink="" />
          {/* <Card /> */}
        </main>
      </AuthLayout>
    </>
  );
}
