import { useActionState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
//
import { addSocialDetails } from "@/app/actions/user";
//
import Button from "@/components/custom/button";
import Input from "@/components/custom/input";
import BoxWrapper from "@/components/wrapper/box-wrapper";
//
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import twitterIcon from "@/assets/icons/twitter-icon.svg";
import githubIcon from "@/assets/icons/github-icon.svg";

export default function SocialAndMore() {
  const params = useParams();

  const [state, formAction, isPending] = useActionState(addSocialDetails, null);

  return (
    <BoxWrapper className="w-full">
      <form action={formAction} className="p-2">
        <div className="grid grid-cols-1 gap-6">
          <input type="hidden" name="user_id" value={params.user_id} />
          <Input
            Icon={
              <Image src={linkedinIcon} alt="LinkedIn" width={26} height={26} />
            }
            id="linkedin_url"
            name="linkedin_url"
            placeholder="Enter linkedin profile"
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
            errorMsg={state?.errors?.github_url}
            className="w-full"
          />
        </div>

        {/* save button */}
        <div className="col-span-2 flex justify-end mt-6">
          <Button type="submit" disabled={isPending} className="px-4">
            {isPending ? "saving..." : "save changes"}
          </Button>
        </div>
      </form>
    </BoxWrapper>
  );
}
