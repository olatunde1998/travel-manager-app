"use client";
import {
  AuthLayout,
  Button,
  HeaderCrumb,
  TableMain,
} from "../components/index";
import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const handleAddNewClient = () => {
    router.push("/client/add-client");
  };
  const paymentTypes = [
    {
      id: 1,
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id: 2,
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id: 3,
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id: 4,
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id : 5,
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id : 6,
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
  ];

  // create columnHelper
  const columnHelper = createColumnHelper();
  // Table columns
  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => (
        <Link href="/client/client-profile" className="">
          {" "}
          <span className="pl-4">{info.renderValue()}</span>
        </Link>
      ),
      header: () => <span>Name</span>,
    }),

    columnHelper.accessor("email", {
      cell: (info) => (
        <Link href="/client/client-profile" className=" xl:p-4">
          {" "}
          <span className="pl-4">{info.renderValue()}</span>
        </Link>
      ),
      header: () => <span>Email</span>,
    }),
    columnHelper.accessor("phone", {
      cell: (info) => (
        <Link href="/client/client-profile" className="">
          {" "}
          <span className="pl-4 mr-8">{info.renderValue()}</span>
        </Link>
      ),
      header: () => <span>Phone</span>,
    }),
    columnHelper.accessor("address", {
      cell: (info) => (
        <Link href="/client/client-profile" className="">
          {" "}
          <span className="">{info.renderValue()}</span>
        </Link>
      ),
      header: () => <span>Residential Address</span>,
    }),
  ];

  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Client" nextLink="" />
          <p className="my-4">Here&apos;s the clients list</p>

          <div className="my-8 lg:flex items-center justify-between">
          <div className="mb-2 md:p-2 md:w-full md:mb-0 md:pl-0">
              <input
                type="text"
                placeholder="Search by name, email ...."
                className="w-full border-2 border-gray-200 p-2 rounded-md"
              />
            </div>
            <div onClick={handleAddNewClient}>
              <Button
                btnText="Add new Client"
                className="bg-[#DDAA33] justify-center flex text-white"
              />
            </div>
          </div>
          <TableMain
            data={paymentTypes ? paymentTypes : []}
            columns={columns}
            tableClass=" font-medium text-small"
          />
        </main>
      </AuthLayout>
    </>
  );
}
