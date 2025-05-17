"use client";

//
import React, {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
//
import ProfileCardEdit from "../components/profile-card-edit";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import Select from "@/components/custom/select";
import Loading from "@/components/common/snakebar/loading";
import Icon from "@/components/common/icon/icon";
//
import { updateUser } from "@/app/actions/user";
//
import { useUserStore } from "@/store/useUserStore";
//
import { GENDER_OPTIONS, ROLE_OPTIONS } from "@/utils/constant";
//

interface FormInputs {
  user_id: string;
  //
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  email: string;
  country_code?: string;
  phone_number: string;
  user_role: string;
  status: "ACTIVE" | "INACTIVE";
  isVerified: boolean;
  profile_image: File | null;
}

export default function PersonalDetailsEditForm({
  userId,
}: {
  userId: string;
}) {
  const { userProfileDetails } = useUserStore();

  // Local state for form inputs
  const [formInputs, setFormInputs] = useState<FormInputs>({
    user_id: userId,
    //
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    email: "",
    country_code: "+91",
    phone_number: "",
    user_role: "",
    status: "ACTIVE",
    isVerified: false,
    profile_image: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  // Action state hook for form submission
  const [state, formAction, isPending] = useActionState(updateUser, null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle select change
  const handleSelectChange = (name: string, value: string) => {
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file chnage
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormInputs((prev) => ({
        ...prev,
        profile_image: file,
      }));
    }
  };

  // Toggle
  const handleStatusChange = (newStatus: "ACTIVE" | "INACTIVE") => {
    setFormInputs((prev) => ({ ...prev, status: newStatus }));
  };

  const handleVerificationChange = (isVerified: boolean) => {
    setFormInputs((prev) => ({ ...prev, isVerified }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(formInputs).forEach(([key, value]) => {
      formData.set(key, value);
    });

    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (userProfileDetails?.userDetails.status === "fulfilled") {
      setFormInputs((prev) => ({
        ...prev,
        ...userProfileDetails.userDetails.data,
      }));
    }
  }, [userProfileDetails]);

  if (!userProfileDetails) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loading size={"sm"} />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full grid gap-6 grid-cols-3">
      <div className="col-span-1">
        <ProfileCardEdit
          profileImage={formInputs.profile_image}
          onImageChange={(file) => console.log(file)} // Ensure function signature matches
          //
          status={formInputs.status}
          onStatusChange={() => {}}
          //
          isVerified={formInputs.isVerified}
          onVerificationChange={handleVerificationChange}
        />
      </div>

      {/* Form Card */}
      <div className="col-span-2">
        <BoxWrapper className="w-full p-6">
          <div className="grid grid-cols-2 gap-6">
            <Input
              label="First name"
              name="first_name"
              type="text"
              placeholder="Enter first name"
              value={formInputs.first_name}
              onChange={handleInputChange}
              errorMsg={state?.errors?.first_name}
              inputStyle="capitalize"
            />
            <Input
              label="Middle name"
              name="middle_name"
              type="text"
              placeholder="Enter middle name"
              value={formInputs.middle_name}
              onChange={handleInputChange}
              errorMsg={state?.errors?.middle_name}
              inputStyle="capitalize"
            />
            <Input
              label="Last name"
              name="last_name"
              type="text"
              placeholder="Enter first name"
              value={formInputs.last_name}
              onChange={handleInputChange}
              errorMsg={state?.errors?.last_name}
              inputStyle="capitalize"
            />
            <Select
              label="Gender"
              name="gender"
              options={GENDER_OPTIONS}
              selected={formInputs.gender}
              onChange={(value) => handleSelectChange("gender", value)}
              errorMsg={state?.errors?.gender}
            />
            <Input
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter first name"
              Icon={<Icon icon="email" className="mr-3" />}
              value={formInputs.email}
              onChange={handleInputChange}
              // errorMsg={state?.errors?.email}
              disabled
            />
            <Input
              label="Mobile number"
              name="phone_number"
              type="tel"
              placeholder="Enter mobile number"
              Icon={<Icon icon="phone" className="mr-3" />}
              value={formInputs.phone_number}
              onChange={handleInputChange}
              errorMsg={state?.errors?.phone_number}
            />
            <Select
              label="Role"
              name="user_role"
              options={ROLE_OPTIONS}
              selected={formInputs.user_role}
              onChange={(value) => handleSelectChange("user_role", value)}
              errorMsg={state?.errors?.user_role}
            />

            {/* button */}
            <div className="col-span-2 flex justify-between mt-2">
              <Button
                type="button"
                className="mr-4 bg-red-500 hover:bg-red-600 text-white"
                onClick={() => {
                  // Handle cancel action
                }}
              >
                Cancel
              </Button>

              <Button type="submit" className="ml-auto">
                {isPending ? "Saving..." : "Update"}
              </Button>
            </div>
          </div>
        </BoxWrapper>
      </div>
    </form>
  );
}
