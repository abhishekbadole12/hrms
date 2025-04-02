import React from "react";
//
import BoxWrapper from "@/components/wrapper/box-wrapper";
//
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import Select from "@/components/custom/select";
//
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import { GENDER_OPTIONS, ROLE_OPTIONS } from "@/utils/constant";

export default function FormCard() {
  return (
    <BoxWrapper className="w-full p-6">
      <form className="grid grid-cols-2 gap-6">
        <Input
          label="First name"
          name="firstName"
          type="text"
          placeholder="Enter first name"
        />
        <Input
          label="Middle name"
          name="middleName"
          type="text"
          placeholder="Enter middle name"
        />
        <Input
          label="Last name"
          name="lastName"
          type="text"
          placeholder="Enter first name"
        />
        <Select
          label="Gender"
          name="gender"
          options={GENDER_OPTIONS}
          // selected={formInputs.gender}
          // onChange={(value) => handleSelectChange("gender", value)}
        />
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="Enter first name"
          Icon={<FontAwesomeIcon icon={faEnvelope} className="" />}
        />
        <Input
          label="Mobile number"
          name="mobile"
          type="tel"
          placeholder="Enter mobile number"
          Icon={<FontAwesomeIcon icon={faPhone} className="" />}
        />
        <Select
          label="Role"
          name="role"
          options={ROLE_OPTIONS}
          // selected={formInputs.role}
          // onChange={(value) => handleSelectChange("role", value)}
        />
        <div className="col-span-2 flex justify-end mt-2">
          <Button type="submit" className="ml-auto">
            Save changes
          </Button>
        </div>
      </form>
    </BoxWrapper>
  );
}
