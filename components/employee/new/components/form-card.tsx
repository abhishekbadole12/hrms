"use client";

import Input from "@/components/common/input";
import BoxWrapper from "@/components/wrapper/box-wrapper";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function FormCard() {
  return (
    <BoxWrapper className="grid grid-cols-2 gap-6 p-6">
      <Input
        label="First name"
        type="text"
        placeholder="Enter first name"
        value="abhishek"
        onChange={() => {}}
      />
      <Input
        label="Last name"
        type="text"
        placeholder="Enter first name"
        value=""
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
      <Input
        label="Mobile number"
        type="tel"
        placeholder="Enter mobile number"
        value=""
        Icon={<FontAwesomeIcon icon={faPhone} className="" />}
        onChange={() => {}}
      />
    </BoxWrapper>
  );
}
