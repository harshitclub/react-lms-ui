import { FileIcon, MoveRight, Plus } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";

function CompanyAddCourseForm() {
  return (
    <>
      <div className="companyAddCourseForm">
        <form>
          <div className="ccDetails border rounded-sm p-3">
            <div className="mb-3">
              <h3 className="text-md  mb-1 ">Title</h3>
              <Input
                type="text"
                placeholder="ex. Full Stack Development Course"
              />
            </div>
            <div className="mb-3">
              <h3 className="text-md  mb-1 ">Description</h3>
              <Textarea />
            </div>
            <div className="flex gap-3">
              <div className="w-1/2 mb-4">
                <h3 className="text-md  mb-1 ">Language</h3>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Languages</SelectLabel>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Hindi">Hindi</SelectItem>
                      <SelectItem value="Telugu">Telugu</SelectItem>
                      <SelectItem value="Malyalam">Malyalam</SelectItem>
                      <SelectItem value="Kannada">Kannada</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Category</h3>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Hindi">Hindi</SelectItem>
                      <SelectItem value="Telugu">Telugu</SelectItem>
                      <SelectItem value="Malyalam">Malyalam</SelectItem>
                      <SelectItem value="Kannada">Kannada</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2 mb-4">
                <h3 className="text-md  mb-1 ">Duration</h3>
                <div className="flex gap-3">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Hours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Hours*</SelectLabel>
                        {Array.from({ length: 100 }, (_, i) => i + 1).map(
                          (hour) => (
                            <SelectItem key={hour} value={hour.toString()}>
                              {hour} Hours
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Minutes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Minutes*</SelectLabel>
                        {Array.from({ length: 60 }, (_, i) => i + 1).map(
                          (minute) => (
                            <SelectItem key={minute} value={minute.toString()}>
                              {minute} Minutes
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Seconds" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Seconds*</SelectLabel>
                        {Array.from({ length: 60 }, (_, i) => i + 1).map(
                          (second) => (
                            <SelectItem key={second} value={second.toString()}>
                              {second} Seconds
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-1/2">
                <h3 className="text-md  mb-1 ">Status</h3>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Published">Published</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mb-3">
              <h3 className="text-md  mb-1 ">Upload Cover Image</h3>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center">
                    <FileIcon className="w-12 h-12" />
                    <span className="text-sm font-medium text-gray-500">
                      Only accepts below formats
                    </span>
                    <span className="text-xs text-gray-500">
                      JPEG, JPG, PNG
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <Label htmlFor="file" className="text-sm font-medium">
                      File
                    </Label>
                    <Input
                      id="file"
                      type="file"
                      placeholder="File"
                      accept="image/*"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-3">
              <Button>
                Add Videos <Plus />
              </Button>
              <Button>
                Create Course <MoveRight />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CompanyAddCourseForm;
