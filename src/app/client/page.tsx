"use client";
import { useRouter } from "next/navigation";
import { HeaderCrumb } from "../components/header-crumb/HeaderCrumb";
import { AuthLayout } from "../components/index";

export default function Home() {
  const router = useRouter();
  const handlePlay = () => {
    router.push("/courses/view-details");
  };
  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Client" nextLink="" />
        </main>
      </AuthLayout>
    </>
  );
}
