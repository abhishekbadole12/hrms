import Button from "@/components/custom/button";



export default function SocialAndMore() {
  return (
    <div className="p-6">
      {/* <Tabs defaultValue="social">
        <TabsList className="mb-4">
          <TabsTrigger value="social">Social Profiles</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
        </TabsList>

        <TabsContent value="social" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" placeholder="Enter LinkedIn profile URL" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input id="twitter" placeholder="Enter Twitter profile URL" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input id="facebook" placeholder="Enter Facebook profile URL" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input id="github" placeholder="Enter GitHub profile URL" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio">Portfolio Website</Label>
              <Input id="portfolio" placeholder="Enter portfolio website URL" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="blog">Blog</Label>
              <Input id="blog" placeholder="Enter blog URL" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="id-proof">ID Proof</Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger id="id-proof-type">
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="driving-license">Driving License</SelectItem>
                    <SelectItem value="national-id">National ID</SelectItem>
                    <SelectItem value="voter-id">Voter ID</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">Upload</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address-proof">Address Proof</Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger id="address-proof-type">
                    <SelectValue placeholder="Select proof type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utility-bill">Utility Bill</SelectItem>
                    <SelectItem value="bank-statement">Bank Statement</SelectItem>
                    <SelectItem value="rental-agreement">Rental Agreement</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">Upload</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="education-certificate">Education Certificate</Label>
              <div className="flex gap-2">
                <Input id="education-certificate" placeholder="Certificate name" />
                <Button variant="outline">Upload</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience-certificate">Experience Certificate</Label>
              <div className="flex gap-2">
                <Input id="experience-certificate" placeholder="Certificate name" />
                <Button variant="outline">Upload</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs> */}
      <div className="mt-6 flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
