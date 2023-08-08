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
import { useState } from "react";
import { SearchIcon } from "../../../assets/icons";


export default function Home() {
  const [searchFilter, setSearchFilter] = useState("");
  const router = useRouter();

  const handleAddNewClient = () => {
    router.push("/client/add-client");
  };

  // Handle search filter change
  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const clientDatas = [
    {
      id: 1,
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08133642798",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id: 2,
      name: "Ade Oluwadailare",
      email: "temitopeade1909@gmail.com",
      phone: "08117740042",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id: 3,
      name: "Adee Oluwadailare",
      email: "adeeoluewa1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id: 4,
      name: "Adegoke Oluwadailare",
      email: "oluwaadegoke1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id: 5,
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      id: 6,
      name: "Ake Oluwadailare",
      email: "aketemitope1909@gmail.com",
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

  const filteredClientDatas = clientDatas?.filter((item) => {
    const searchQuery = searchFilter.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchQuery) ||
      item.email.toLowerCase().includes(searchQuery) ||
      item.phone.includes(searchFilter)
    );
  });

  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Client" nextLink="" />
          <p className="my-4">Here&apos;s the clients list</p>

          <div className="my-8 lg:flex items-center justify-between">
            <div className="mb-2 md:p-2 md:w-full md:mb-0 md:pl-0 lg:mr-6">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon/>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 pl-10 text-sm text-[#B2B6BA] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#DDAA33] focus:border-[#DDAA33] dark:bg-[#FBFBFB] dark:border-[#B2B6BA] dark:placeholder-gray-400 dark:text-[#B2B6BA] dark:focus:ring-[#DDAA33] dark:focus:border-[#DDAA33]"
                  placeholder="Search name, email..."
                  required
                  onChange={handleSearchFilterChange}
                />
              </div>
            </div>
            <div onClick={handleAddNewClient}>
              <Button
                btnText="Add new Client"
                className="bg-[#DDAA33] justify-center flex text-white"
              />
            </div>
          </div>
          <TableMain
            data={filteredClientDatas ? filteredClientDatas : []}
            columns={columns}
            tableClass=" font-medium text-small"
            filters={{
              name: searchFilter,
              email: searchFilter,
              phone: searchFilter,
            }}
          />
        </main>
      </AuthLayout>
    </>
  );
}
