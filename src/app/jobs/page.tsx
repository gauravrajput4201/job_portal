"use client";
import Filters from "@/components/common/filters";
import JobList from "@/components/common/joblist";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Jobs() {
  return (
    <>
      <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 flex ">
        <div className="basis-56">
          <Filters />
        </div>
        <div className="basis-full">
          <div className="w-full  mb-4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search />
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 outline-none"
                placeholder="Search jobs"
              />
              <Button className="text-white absolute end-2.5 bottom-2.5   font-medium rounded-lg text-sm px-4 py-2 ">
                Search
              </Button>
            </div>
          </div>
          <JobList />
        </div>
      </div>
    </>
  );
}
