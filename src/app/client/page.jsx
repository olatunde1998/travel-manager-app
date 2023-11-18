"use client";
import {
  AuthLayout,
  Button,
  HeaderCrumb,
  TableMain,
} from "../components/index";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getClientsApi } from "../services";


export default function Home() {
  const [searchFilter, setSearchFilter] = useState("");
  const router = useRouter();

  const { data: clientsData, isLoading } = useQuery({
    queryKey: ["getClientsApi"],
    queryFn: getClientsApi,
  });

  console.log(clientsData, "========");

  const handleAddNewClient = () => {
    router.push("/client/add-client");
  };

  // Handle search filter change
  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value);
  };

  // create columnHelper
  const columnHelper = createColumnHelper();
  // Table columns
  const columns = [
    columnHelper.accessor("Name", {
      cell: ({ row }) => (
        <div>
          {row?.original?._id && (
            <Link
              href={`/client/${row.original._id}`}
              className="px-4  py-4 flex items-center  cursor-pointer"
            >
              {row?.original?.firstName}
              <span className="ml-2">{row?.original?.lastName}</span>
            </Link>
          )}
        </div>
      ),
      header: () => <span className="pl-2">Name</span>,
    }),

    columnHelper.accessor("email", {
      cell: ({ row }) => (
        <div>
          {row?.original?._id && (
            <Link
              href={`/client/${row?.original?._id}`}
              className="px-4  py-4 flex items-center  cursor-pointer"
            >
              <span className="pl-4">{row?.original?.email}</span>
            </Link>
          )}
        </div>
      ),
      header: () => <span className="pl-4">Email</span>,
    }),
    columnHelper.accessor("phoneNumber", {
      cell: ({ row }) => (
        <div>
          {row?.original?._id && (
            <Link
              href={`/client/${row?.original?._id}`}
              className="px-4  py-4 flex items-center cursor-pointer"
            >
              <span className="">{row?.original?.phoneNumber}</span>
            </Link>
          )}
        </div>
      ),
      header: () => <span>Phone</span>,
    }),
    columnHelper.accessor("residentialAddress", {
      cell: ({ row }) => (
        <div>
          {row?.original?._id && (
            <Link
              href={`/client/${row?.original?._id}`}
              className="px-4  py-4 flex items-center cursor-pointer"
            >
              <span className="">{row?.original?.residentialAddress}</span>
            </Link>
          )}
        </div>
      ),
      header: () => <span>Residential Address</span>,
    }),
  ];

  const filteredClientData = clientsData?.filter((item) => {
    const searchQuery = searchFilter.toLowerCase();
    return item?.email.toLowerCase().includes(searchQuery);
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
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 pl-10 text-sm text-[#B2B6BA] border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#DDAA33] focus:border-[#DDAA33] dark:bg-[#FBFBFB] dark:border-[#B2B6BA] dark:placeholder-gray-400 dark:text-[#B2B6BA] dark:focus:ring-[#DDAA33] dark:focus:border-[#DDAA33] outline-none focus:out-none"
                  placeholder="Search by email..."
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
            data={filteredClientData ? filteredClientData : []}
            columns={columns}
            tableClass=" font-medium text-small"
            filters={{
              email: searchFilter,
            }}
          />
        </main>
      </AuthLayout>
    </>
  );
}
