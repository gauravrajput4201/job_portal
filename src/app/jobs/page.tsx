"use client";
import Filters from "@/components/common/filters";
import JobList from "@/components/common/joblist";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import useStore from "@/store/store";
import { Filter, Search } from "lucide-react";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((r) => r.json());
export default function Jobs() {
  const { data, error, isLoading } = useSWR(
    "https://fakejobs-api.vercel.app/jobs",
    fetcher
  );

  if (isLoading) return <div className="absolute h-full w-full top-0 left-0 bg-white text-black text-3xl text-center mt-[20%]">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  const getUniqueByTitle = (jsonArray: any[]) => {
    const uniqueTitles = new Set();
    const uniqueArray: any = [];

    jsonArray.forEach(item => {
      if (!uniqueTitles.has(item.title)) {
        uniqueTitles.add(item.title);
        uniqueArray.push(item);
      }
    });

    return uniqueArray;
  }
  const filterArr: any = getUniqueByTitle(data)

  return (
    <>
      <div className=" min-h-screen p-8 pb-20  lg:p-20 lg:flex lg:gap-16 ">
        <div className="hidden lg:basis-56 lg:block">
          <Filters filterArr={filterArr} />
        </div>
        <div className="lg:hidden mb-2 text-end">
          <Popover>
            <PopoverTrigger className="">
              <Filter className="cursor-pointer hover:text-gray-500" />
            </PopoverTrigger>
            <PopoverContent className="p-2 rounded-sm max-w-[220px] mr-3">
              <Filters filterArr={filterArr} />
            </PopoverContent>
          </Popover>

        </div>
        <div className="basis-full ">
          {/* <div className="w-full  mb-4">
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
          </div> */}
          <JobList data={data} />
        </div>
      </div>
    </>
  );
}
