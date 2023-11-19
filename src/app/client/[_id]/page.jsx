"use client";
import {
  AuthLayout,
  Button,
  ClientDetails,
  HeaderCrumb,
  Modal,
} from "@/app/components";
import { DeleteClient } from "@/app/components/client/delete-client";
import { EditClient } from "@/app/components/client/edit-client";
import { getClientDetailsApi } from "@/app/services";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientProfile({ params }) {
  const [showEditClient, setShowEditClient] = useState(false);
  const [showDeleteClient, setShowDeleteClient] = useState(false);

  const router = useRouter();
  const clientID = params?._id;

  const { data: clientDetails, isLoading } = useQuery({
    queryKey: ["getClientDetailsApi", clientID],
    queryFn: () => (clientID ? getClientDetailsApi(clientID) : null),
  });

  return (
    <>
      <AuthLayout>
        <main className="min-h-screen  text-gray-600  p-4 md:p-8">
          <HeaderCrumb prevLink="Client Profile" nextLink="" />
          <p className="my-2 text-gray-500">View Client Profile here</p>

          <section className="bg-white pb-20 pt-10 px-4 md:px-6 mt-10 rounded-md">
            <div className="mt-10 rounded-md pl-4 md:pl-6 py-6 bg-gray-200/40 md:flex items-center justify-between">
              <div>
                <p className="font-bold ml-2 text-black">
                  Client&apos;s Picture
                </p>
                <div className="md:flex items-center  mt-6 max-w-[400px]">
                  {clientDetails?.imageUrl ? (
                    <div className="mr-0 w-[100px] h-[100px]  md:mr-6 rounded-full">
                      <Image
                        src={clientDetails?.imageUrl}
                        width={100}
                        height={100}
                        className="rounded-full h-[100px] w-[100px]"
                        alt="client picture"
                      />
                    </div>
                  ) : (
                    <div className="mr-0 w-[100px] h-[100px]  md:mr-6 rounded-full">
                      <Image
                        src="/images/clientImg.png"
                        width={100}
                        height={100}
                        className="rounded-full h-[100px] w-[100px]"
                        alt="client picture"
                      />
                    </div>
                  )}
                  <div className="space-y-2 font-semibold">
                    <p className="font-bold text-black ">
                      {clientDetails?.firstName} {clientDetails?.lastName}
                    </p>
                    <p className="text-gray-400  text-[14px] md:text-[16px]">
                      {clientDetails?.email}
                    </p>
                    <div className=" text-[14px] md:text-[16px] md:flex gap-4 text-gray-400">
                      <p>{clientDetails?.gender}</p>
                      <p>{clientDetails?.dateOfBirth}</p>{" "}
                      <p>{clientDetails?.countryOfCitizen}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* edit button */}
              <div className="justify-center md:justify-end flex pr-10 pt-6 md:pt-20">
                <Button
                  btnText="Edit"
                  handleBtnClick={() => {
                    setShowEditClient(true);
                  }}
                  className="bg-[#DDAA33] text-white justify-center flex p-1 w-[100px] h-[50px]"
                />
              </div>
            </div>

            {/* client details */}
            <div className="ml-1 md:flex md:space-x-40 md:ml-4 my-20">
              <div className="space-y-6">
                <ClientDetails
                  title="Full Name"
                  content={`${clientDetails?.firstName} ${clientDetails?.lastName}`}
                  focusContent=""
                />
                <ClientDetails
                  title="Applicant Full Name"
                  content={clientDetails?.fullName}
                  focusContent="(as shown in passport)"
                />{" "}
                <div className="flex gap-8">
                  <ClientDetails
                    title="Place of Birth"
                    content={clientDetails?.placeOfBirth}
                    focusContent=""
                  />{" "}
                  <ClientDetails
                    title="Date of Birth"
                    content={clientDetails?.dateOfBirth}
                    focusContent=""
                  />{" "}
                </div>
                <ClientDetails
                  title="Marital Status"
                  content={clientDetails?.maritalStatus}
                  focusContent=""
                />{" "}
                <ClientDetails
                  title="Current Occupation"
                  content={clientDetails?.occupation}
                  focusContent=""
                />
                <ClientDetails
                  title="Residental Address"
                  content={clientDetails?.residentialAddress}
                  focusContent=""
                />
                <ClientDetails
                  title="Country of Interest"
                  content={clientDetails?.countryOfInterest}
                  focusContent=""
                />
              </div>

              <div className="mt-6 space-y-6 md:mt-0">
                <ClientDetails
                  title="Email"
                  content={clientDetails?.email}
                  focusContent=""
                />
                <ClientDetails
                  title="Gender"
                  content={clientDetails?.gender}
                  focusContent=""
                />{" "}
                <ClientDetails
                  title="Country of Citizenship"
                  content={clientDetails?.countryOfCitizen}
                  focusContent=""
                />{" "}
                <ClientDetails
                  title="Education"
                  content={clientDetails?.education}
                  focusContent="(Client's highest level of Education)"
                />{" "}
                <ClientDetails
                  title="Phone Number"
                  content={clientDetails?.phoneNumber}
                  focusContent=""
                />
                <ClientDetails
                  title="Mailing Address"
                  content={clientDetails?.mailingAddress}
                  focusContent=""
                />
                <ClientDetails
                  title="Purpose of Traveling"
                  content={clientDetails?.purposeOfTraveling}
                  focusContent=""
                />
              </div>
            </div>

            {/* Delete button */}
            <div className="justify-center md:justify-end flex pr-8">
              <Button
                btnText="Delete"
                handleBtnClick={() => {
                  setShowDeleteClient(true);
                }}
                className="bg-red-700 text-white justify-center flex"
              />
            </div>
          </section>
        </main>
        <Modal show={showEditClient} onClose={() => setShowEditClient(false)}>
          <EditClient
            setShowEditClient={setShowEditClient}
            editClientID={clientID}
            clientDetails={clientDetails}
          />
        </Modal>
        <Modal
          show={showDeleteClient}
          onClose={() => setShowDeleteClient(false)}
        >
          <DeleteClient
            setShowDeleteClient={setShowDeleteClient}
            deleteClientID={clientID}
            clientDetails={clientDetails}
          />
        </Modal>
      </AuthLayout>

      <ToastContainer />
    </>
  );
}
