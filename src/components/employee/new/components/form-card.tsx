"use client";

import React, { useState } from "react";
//
import Input from "@/components/custom/input";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import Select from "@/components/custom/select";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
//
import { GENDER_OPTIONS, ROLE_OPTIONS } from "@/utils/constant";
import Button from "@/components/custom/button";

interface FormCardProps {
  firstName: "";
  middleName: "";
  lastName: "";
  gender: "";
  email: "";
  mobile: "";
  role: "";
}

export default function FormCard() {
  const [formInputs, setFormInputs] = useState<FormCardProps>({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
    role: "",
  });

  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle select change
  const handleSelectChange = (name: string, value: string) => {
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formInputs);
  };

  return (
    <BoxWrapper className="w-full p-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <Input
          label="First name"
          name="firstName"
          type="text"
          placeholder="Enter first name"
          value={formInputs.firstName}
          onChange={handleChange}
        />
        <Input
          label="Middle name"
          name="middleName"
          type="text"
          placeholder="Enter middle name"
          value={formInputs.middleName}
          onChange={handleChange}
        />
        <Input
          label="Last name"
          name="lastName"
          type="text"
          placeholder="Enter first name"
          value={formInputs.lastName}
          onChange={handleChange}
        />
        <Select
          label="Gender"
          name="gender"
          options={GENDER_OPTIONS}
          selected={formInputs.gender}
          onChange={(value) => handleSelectChange("gender", value)}
        />
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="Enter first name"
          value={formInputs.email}
          Icon={<FontAwesomeIcon icon={faEnvelope} className="" />}
          onChange={handleChange}
        />
        <Input
          label="Mobile number"
          name="mobile"
          type="tel"
          placeholder="Enter mobile number"
          value={formInputs.mobile}
          Icon={<FontAwesomeIcon icon={faPhone} className="" />}
          onChange={handleChange}
        />
        <Select
          label="Role"
          name="role"
          options={ROLE_OPTIONS}
          selected={formInputs.role}
          onChange={(value) => handleSelectChange("role", value)}
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
