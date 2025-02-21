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

export default function FormCard() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <BoxWrapper className="w-full p-6">
      <div className="grid grid-cols-2 gap-6">
        <Input
          label="First name"
          type="text"
          placeholder="Enter first name"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Middle name"
          type="text"
          placeholder="Enter middle name"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Last name"
          type="text"
          placeholder="Enter first name"
          value=""
          onChange={() => {}}
        />
        <Select
          label="Gender"
          options={GENDER_OPTIONS}
          selected={selectedGender}
          onChange={() => {}}
        />
        <Input
          label="Email address"
          type="email"
          placeholder="Enter first name"
          value=""
          Icon={<FontAwesomeIcon icon={faEnvelope} className="" />}
          onChange={() => {}}
        />
        <Input
          label="Mobile number"
          type="tel"
          placeholder="Enter mobile number"
          value=""
          Icon={<FontAwesomeIcon icon={faPhone} className="" />}
          onChange={() => {}}
        />
        <Select
          label="Role"
          options={ROLE_OPTIONS}
          selected={selectedRole}
          onChange={() => {}}
        />
      </div>
      <Button className="mt-6 ml-auto">Save changes</Button>
    </BoxWrapper>
  );
}
