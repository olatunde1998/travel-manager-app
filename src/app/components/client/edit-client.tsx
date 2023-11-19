"use client";
interface editProps {
  editClientID?: string;
  clientDetails?: any;
  setShowEditClient?: any;
}
import {
  Button,
  HeaderCrumb,
  Input,
  Selector,
  TextArea,
} from "@/app/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { EditClientApi } from "@/app/services";
import { useState } from "react";
import { countryData, educationData, genderData } from "../../../../utils";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Full Name must be greater than 7 letters"),
  email: yup
    .string()
    .required("Email is required")
    .email(" Invalid Email format"),
  placeOfBirth: yup
    .string()
    .required("Place Of Birth is required")
    .min(3, "Place Of Birth must be greater than 3 letters"),
  dateOfBirth: yup.string().required("Date Of Birth is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .min(6, "Phone number must be greater than 6 numbers")
    .max(12, "Phone number must be less than 12 numbers"),
  mailingAddress: yup
    .string()
    .required("Mailing Address is required")
    .min(12, "Mailing Address must be greater than 12 letters"),
  residentialAddress: yup
    .string()
    .required("Residential Address is required")
    .min(12, "Residential Address must be greater than 12 letters"),
  maritalStatus: yup
    .string()
    .required("Marital Status is required")
    .min(4, "Marital Status must be greater than 4 letters"),
  occupation: yup
    .string()
    .required("Occupation is required")
    .min(4, "Occupation must be greater than 4 letters"),
  purposeOfTraveling: yup
    .string()
    .required("Purpose Of Traveling is required")
    .min(7, "Purpose of traveling must be greater than 7 letters"),
});

const successNotifying = () => {
  toast.success("Client Edited Successfully", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
const errorNotifying = () => {
  toast.error("Client Editing  failed", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
  });
};

export const EditClient = ({
  editClientID,
  clientDetails,
  setShowEditClient,
}: editProps) => {
  const [userImage, setUserImage] = useState<string | undefined>(undefined);
  const [getSelectedGender, setGetSelectedGender] = useState();
  const [getSelectedCountry, setGetSelectedCountry] = useState();
  const [getSelectedCountryOfInterest, setGetSelectedCountryOfInterest] =
    useState();
  const [getSelectedEducation, setGetSelectedEducation] = useState();
  const queryClient = useQueryClient();

  const navigateToClientHome = () => {
    router.push("/client");
  };

  const { isLoading, mutate } = useMutation(EditClientApi, {
    onError: (error) => {
      errorNotifying();
      console.log(error);
    },
    onSuccess: async (data) => {
      const response = data;
      successNotifying();
      setShowEditClient(false);
      await queryClient.invalidateQueries(["getClientDetailsApi"]);
    },
    retry: 0,
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: clientDetails?.firstName,
      lastName: clientDetails?.lastName,
      fullName: clientDetails?.fullName,
      email: clientDetails?.email,
      // gender: clientDetails?.gender,
      placeOfBirth: clientDetails?.placeOfBirth,
      dateOfBirth: clientDetails?.dateOfBirth,
      // countryOfCitizen: getSelectedCountry,
      maritalStatus: clientDetails?.maritalStatus,
      // education: getSelectedEducation,
      occupation: clientDetails?.occupation,
      phoneNumber: clientDetails?.phoneNumber,
      residentialAddress: clientDetails?.residentialAddress,
      mailingAddress: clientDetails?.mailingAddress,
      // countryOfInterest: getSelectedCountryOfInterest,
      purposeOfTraveling: clientDetails?.purposeOfTraveling,
    //   imageUrl: clientDetails?.imageUrl,
    },
  });

  const handleSelectGender = (item: any) => {
    setGetSelectedGender(item?.name);
  };
  const handleSelectCountry = (item: any) => {
    setGetSelectedCountry(item?.name);
  };
  const handleSelectCountryOfInterest = (item: any) => {
    setGetSelectedCountryOfInterest(item?.name);
  };
  const handleSelectEducation = (item: any) => {
    setGetSelectedEducation(item?.name);
  };

  const onSubmitHandler = (data: any) => {
    const requestData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      fullName: data?.fullName,
      email: data?.email,
      gender: getSelectedGender,
      placeOfBirth: data?.placeOfBirth,
      dateOfBirth: data?.dateOfBirth,
      countryOfCitizen: getSelectedCountry,
      maritalStatus: data?.maritalStatus,
      education: getSelectedEducation,
      occupation: data?.occupation,
      phoneNumber: data?.phoneNumber,
      residentialAddress: data?.residentialAddress,
      mailingAddress: data?.mailingAddress,
      countryOfInterest: getSelectedCountryOfInterest,
      purposeOfTraveling: data?.purposeOfTraveling,
      imageUrl: data?.imageUrl,
    };
    mutate({ data: requestData, _id: editClientID });
  };
  return (
    <>
      <main className="min-h-screen  text-gray-600  p-4 md:pl-8  md:pt-8 bg-white">
        <HeaderCrumb prevLink="Edit Client" nextLink="" />
        <p className="my-2 text-gray-500">Edit the Client here</p>

        <section className="bg-white pb-10  px- mt-1 rounded-md md:px-">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="mt-10 rounded-md md:pl-6 py-6 bg-gray-200/40">
              <p className="font-bold ml-0 text-center md:ml-3 md:text-left">
                {clientDetails?.firstName} Avatar
              </p>
              <div className="items-center flex flex-col justify-center md:flex-row md:flex md:items-center md:justify-start mt-6 max-w-[400px]">
                {clientDetails?.imageUrl ? (
                  <div className="relative rounded-full mr-10 my-4 w-[140px] h-[140px] flex items-center justify-center">
                    <Image
                      src={clientDetails?.imageUrl}
                      fill
                      alt="user avatar"
                      className="rounded-full"
                    />
                  </div>
                ) : (
                  <div className="mb-4  mr-0 w-[90px] h-[100px] md:h-[120px] md:w-[120px] md:mb-0 md:mr-6">
                    <Image
                      src="/images/clientImg.png"
                      width={100}
                      height={100}
                      className="w-full h-full"
                      alt="client picture"
                    />
                  </div>
                )}

                <div className="space-y-2 flex flex-col justify-center items-center">
                  <label
                    htmlFor="fileInput"
                    className="w-fit mx-auto flex  justify-center tracking-wide cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        name="user_Image"
                        id="fileInput"
                        accept=".png,  .jpg, .jpeg"
                        className="hidden input-field"
                        onChange={({ target: { files } }) => {
                          if (files) {
                            setUserImage(URL.createObjectURL(files[0]));
                            console.log("File Input Changed");
                          }
                        }}
                      />
                      <div className="bg-[#DDAA33] p-3 w-[200px] text-center items-center rounded-xl justify-center flex text-white cursor-pointer">
                        Upload
                      </div>
                    </div>
                  </label>
                  <div className="p-3 w-[200px] text-center cursor-pointer items-center justify-center flex rounded-xl border-[1.6px] border-red-700 text-red-700">
                    Use Webcam
                  </div>
                </div>
              </div>
            </div>
            {/* client details */}
            <div className="block space-y-4  my-20 md:flex md:space-x-4 md:space-y-0 lg:space-x-10">
              <div className="w-full space-y-6 md:w-1/2">
                <div>
                  <Input
                    type="text"
                    inputName="firstName"
                    label="First Name"
                    register={{ ...register("firstName") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors.firstName?.message}
                    </p> */}
                </div>
                <div>
                  <Input
                    type="text"
                    inputName="fullName"
                    label="Applicant Full Name"
                    focusContent="(as shown in passport)"
                    register={{ ...register("fullName") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors.fullName?.message}
                    </p> */}
                </div>

                <div className="space-y-4 md:flex md:justify-between gap-2 md:space-y-0">
                  <div className="w-full md:w-1/2">
                    <Input
                      type="text"
                      inputName="placeOfBirth"
                      label="Place of Birth"
                      register={{ ...register("placeOfBirth") }}
                      editInput="bg-gray-100/70"
                      readOnly={true}
                    />
                    {/* <p className="text-red-500 text-[0.55rem] text-left">
                        {errors.placeOfBirth?.message}
                      </p> */}
                  </div>
                  <div className="w-full md:w-1/2">
                    <Input
                      type="date"
                      inputName="dateOfBirth"
                      label="Date of Birth"
                      register={{ ...register("dateOfBirth") }}
                      editInput="bg-gray-100/70"
                      readOnly={true}
                    />
                    {/* <p className="text-red-500 text-[0.55rem] text-left">
                        {errors.dateOfBirth?.message}
                      </p> */}
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    inputName="maritalStatus"
                    label="Marital Status"
                    register={{ ...register("maritalStatus") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors.maritalStatus?.message}
                    </p> */}
                </div>
                <div>
                  <Input
                    type="text"
                    inputName="occupation"
                    label="Current Occupation"
                    register={{ ...register("occupation") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors.occupation?.message}
                    </p> */}
                </div>
                <div>
                  <TextArea
                    rows="6"
                    inputName="residentialAddress"
                    label="Residential Address"
                    register={{ ...register("residentialAddress") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors.residentialAddress?.message}
                    </p> */}
                </div>

                <div>
                  <Selector
                    label="Country of Interest"
                    focusContent=""
                    placeholder="Draft"
                    onSelect={handleSelectCountryOfInterest}
                    selectOption=""
                    inputData={countryData}
                  />
                  <p
                    className={`${
                      getSelectedCountryOfInterest !== null
                        ? "hidden"
                        : "text-red-500"
                    } "text-red-500 text-[0.55rem] text-left"`}
                  >
                    Country Of Interest is required
                  </p>
                </div>

                <div>
                  <Input
                    type="text"
                    inputName="purposeOfTraveling"
                    label="Purpose of Traveling"
                    register={{ ...register("purposeOfTraveling") }}
                    editInput="bg-gray-100/70"
                    readOnly={true}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors.purposeOfTraveling?.message}
                    </p> */}
                </div>
              </div>

              <div className="w-full space-y-6 md:w-1/2">
                <div>
                  <Input
                    type="text"
                    inputName="lastName"
                    label="Last Name"
                    register={{ ...register("lastName") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors.lastName?.message}
                    </p> */}
                </div>
                <div>
                  <Input
                    type="email"
                    label="Email"
                    inputName="email"
                    register={{ ...register("email") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors.email?.message}
                    </p> */}
                </div>

                <div>
                  <Selector
                    label="Gender"
                    // name="gender"
                    focusContent=""
                    placeholder="search"
                    onSelect={handleSelectGender}
                    inputData={genderData}
                    selectOption=""
                  />
                  <p
                    className={`${
                      getSelectedGender !== null ? "hidden" : "text-red-500"
                    } "text-red-500 text-[0.55rem] text-left"`}
                  >
                    Gender is required
                  </p>
                </div>

                <div className="pt-[6px]">
                  <Selector
                    label="Country of Citizenship"
                    focusContent=""
                    placeholder="search"
                    onSelect={handleSelectCountry}
                    selectOption=""
                    inputData={countryData}
                  />
                  <p
                    className={`${
                      getSelectedCountry !== null ? "hidden" : "text-red-500"
                    } "text-red-500 text-[0.55rem] text-left"`}
                  >
                    country of Citizen is required
                  </p>
                </div>

                <div>
                  <Selector
                    label="Education"
                    focusContent="(Client's highest level of Education)"
                    placeholder="search"
                    onSelect={handleSelectEducation}
                    selectOption=""
                    inputData={educationData}
                  />
                  <p
                    className={`${
                      getSelectedEducation !== null ? "hidden" : "text-red-500"
                    } "text-red-500 text-[0.55rem] text-left"`}
                  >
                    Education is required
                  </p>
                </div>

                <div>
                  <TextArea
                    rows="6"
                    inputName="mailingAddress"
                    label="Mailing Address"
                    register={{ ...register("mailingAddress") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors?.mailingAddress?.message}
                    </p> */}
                </div>

                <div>
                  <Input
                    type="number"
                    inputName="phoneNumber"
                    label="Phone Number"
                    register={{ ...register("phoneNumber") }}
                  />
                  {/* <p className="text-red-500 text-[0.55rem] text-left">
                      {errors?.phoneNumber?.message}
                    </p> */}
                </div>
              </div>
            </div>
            <div className="flex justify-between pr-0 lg:justify-end  gap-6">
              <div
                onClick={() => {
                  setShowEditClient(false);
                }}
                className="cursor-pointer justify-center flex rounded-md border-[1.6px] border-red-700 text-red-700 p-3 w-[200px] text-center  items-center"
              >
                Cancel
              </div>
              <Button
                btnText="Save"
                className="bg-[#DDAA33] justify-center flex rounded-md text-white cursor-pointer "
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};
