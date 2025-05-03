"use client"

import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
//
import {  updateSocialDetails } from "@/app/actions/user";
//
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import BoxWrapper from "@/components/wrapper/box-wrapper";
//
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import twitterIcon from "@/assets/icons/twitter-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";
//
import { useUserStore } from "@/store/useUserStore";

interface formInputs {
  user_id: string;
  twitter_url: string;
  linkedin_url: string;
  github_url: string;
}

export default function SocialAndMoreEditForm({ userId }: { userId: string }) {

  const { userProfileDetails } = useUserStore();

  const [formInputs, setFormInputs] = useState<formInputs>({
    user_id: userId || "",
    twitter_url: "",
    linkedin_url: "",
    github_url: "",
  });

  const [state, formAction, isPending] = useActionState(updateSocialDetails, null);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  // Update form input
  useEffect(() => {
    if (userProfileDetails?.socialAndMore.status === "fulfilled") {
      const data = userProfileDetails.socialAndMore.data;
      setFormInputs((prev) => ({ ...prev, ...data }));
    }
  }, [userProfileDetails]);

  return (
    <BoxWrapper className="w-full">
      <form action={formAction} className="p-2">
        <div className="grid grid-cols-1 gap-6">
          <input type="hidden" name="user_id" value={userId} />
          <Input
            Icon={
              <Image src={linkedinIcon} alt="LinkedIn" width={26} height={26} />
            }
            id="linkedin_url"
            name="linkedin_url"
            placeholder="Enter linkedin profile"
            value={formInputs.linkedin_url}
            onChange={handleInputChange}
            errorMsg={state?.errors?.linkedin_url}
            className="w-full"
          />
          <Input
            Icon={
              <Image src={twitterIcon} alt="LinkedIn" width={26} height={26} />
            }
            id="twitter_url"
            name="twitter_url"
            placeholder="Enter twitter profile"
            value={formInputs.twitter_url}
            onChange={handleInputChange}
            errorMsg={state?.errors?.twitter_url}
            className="w-full"
          />
          <Input
            Icon={
              <Image src={githubIcon} alt="LinkedIn" width={26} height={26} />
            }
            id="github_url"
            name="github_url"
            placeholder="Enter github profile"
            value={formInputs.github_url}
            onChange={handleInputChange}
            errorMsg={state?.errors?.github_url}
            className="w-full"
          />
        </div>

        {/* save & cancel button */}
        <div className="col-span-2 flex justify-end mt-4">
          <Button
            type="button"
            className="mr-4 bg-red-500 hover:bg-red-600 text-white"
            onClick={() => {
              // Handle cancel action
            }}
          >
            cancel
          </Button>

          <Button type="submit" disabled={isPending}>
            update
          </Button>
        </div>
      </form>
    </BoxWrapper>
  );
}
