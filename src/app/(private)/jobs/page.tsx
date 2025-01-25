"use client";
import Filters from "@/components/common/filters";
import JobList from "@/components/common/joblist";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { Filter, Search } from "lucide-react";
import useSWR from "swr";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { BreadcrumbWithCustomSeparator } from "@/components/common/breadCrumb";

const fetcher = (url: any) => fetch(url).then((r) => r.json());
export default function Jobs() {
  const { data, error, isLoading } = useSWR(
    "https://fakejobs-api.vercel.app/jobs",
    fetcher
  );

  if (isLoading) return <div className="absolute h-full w-full top-0 left-0 bg-white text-black text-3xl text-center mt-[20%]">Loading...</div>;
  if (error) return <div className="absolute h-full w-full top-0 left-0 bg-white text-black text-3xl text-center mt-[20%]">{error}</div>;

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
      <BreadcrumbWithCustomSeparator labels={"Jobs"} />
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

          <JobList data={data} />
        </div>
      </div>
    </>
  );
}

// export const getServerSideProps = (async () => {
//   try {
//     const data = await fetchData("https://api.example.com/jobs");
//     return { props: { data } };
//   } catch (error: any) {
//     return { props: { jobs: null, error: error.message } };
//   }
// })


