import Filters from "@/components/common/filters";
import JobList from "@/components/common/joblist";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 flex ">
        {/* <Button variant={"destructive"}>Click me</Button> */}



        <div className="basis-56">

          <Filters />
        </div>
        <div className="basis-full">
          <form className="w-full  mb-4">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 outline-none" placeholder="Search Mockups, Logos..." required />
              <Button type="submit" className="text-white absolute end-2.5 bottom-2.5   font-medium rounded-lg text-sm px-4 py-2 ">Search</Button>
            </div>
          </form>

          <JobList />
        </div>
      </div>
    </>
  );
}
