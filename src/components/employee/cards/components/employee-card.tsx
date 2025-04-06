import BoxWrapper from "@/components/wrapper/box-wrapper";
import { faB } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SocialIcon from "../../../common/social-button";

interface Employee {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface EmployeeCardProps {
  item: Employee;
}

export default function EmployeeCard({ item }: EmployeeCardProps) {
  return (
    <BoxWrapper className="flex flex-col relative overflow-hidden">
      {/* Back Image */}
      <div className="w-full h-32 bg-gray-50 absolute left-0 top-0 z-0" />

      <div className="z-50 mt-12">
        <div className="w-fit my-5 mx-auto p-2.5 bg-white rounded-full overflow-hidden">
          <div className="w-[85px] h-[85px] bg-third rounded-full" />
        </div>

        {/* User Details */}
        <div className="text-center">
          <h5 className="text-base text-primary font-semibold mb-1">
            {item.first_name} {item.last_name}
          </h5>
          <p className="text-sm text-secondary font-normal">{item.email}</p>
        </div>

        {/* Social Media's */}
        <div className="flex justify-center gap-4 my-5">
          <SocialIcon href="#">
            <FontAwesomeIcon icon={faB} className="text-base" />
          </SocialIcon>

          <SocialIcon href="#">
            <FontAwesomeIcon icon={faB} className="text-base" />
          </SocialIcon>

          <SocialIcon href="#">
            <FontAwesomeIcon icon={faB} className="text-base" />
          </SocialIcon>
        </div>
      </div>
    </BoxWrapper>
  );
}
