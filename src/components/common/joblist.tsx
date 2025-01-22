import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { redirect, useParams, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import useStore from "@/store/store";
import { filterByTitle } from "@/utils/utility";
import { PaginationWithLinks } from "../ui/pagination-custom";

export default function JobList(props: { data: any[] }) {
  const { data } = props;
  const searchParams = useSearchParams()

  const searchParam = searchParams.get('page') || 1
  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const filters = useStore((state) => state.filters);
  const [search, setSearch] = useState<any>(searchQuery || "")


  // console.log(filterData, "filterData");
  // console.log(filters, "filters");

  const startIndex = (Number(searchParam) - 1) * 5;
  const endIndex = startIndex + 5;


  const [datas, setDatas] = useState<any[]>([])

  const onInputChange = (e: any) => {
    const searchValue = e.target.value
    setSearch(searchValue)
    setSearchQuery(searchValue)

  }

  const handleSearch = () => {

    const filteredData = data.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
    setDatas(filteredData)
  }
  useEffect(() => {
    const filterData = filterByTitle(data, filters)
    setDatas(filterData);
  }, [filters]);



  return (
    <>
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
            value={search}
            onChange={(e: any) => onInputChange(e)}
          />
          <Button className="text-white absolute end-2.5 bottom-2.5   font-medium rounded-lg text-sm px-4 py-2 " onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      {datas?.length > 0 ? (
        datas.slice(startIndex, endIndex).map((item: any) => (
          <Card className="w-full p-5 mb-3" key={item?.id}>
            <div className="flex   gap-3 flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <div>
                  <Image
                    height={60}
                    width={60}
                    alt="logo"
                    src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
                  />
                </div>
                <div>
                  <h2 className="m-0 text-xl">{item?.company?.name}</h2>
                  <span className=" text-gray-300">{item?.location}</span>
                </div>
              </div>
              <div className="sm:text-right ">
                <span className="text-xl sm:text-right">{item?.salary}</span>
                <div className="text-sm text-gray-400 sm:text-right">
                  Posted 2 Days ago
                </div>
              </div>
            </div>
            <div className="text-lg text-gray-500 my-4">
              {item?.description}
            </div>
            <div className="flex justify-between gap-3 flex-col sm:flex-row items-center">
              <div className="flex gap-5">
                <span className=" rounded-full bg-emerald-50 text-emerald-700 px-3 py-[4px] sm:text-sm text-[11px]">
                  {item?.title}
                </span>
                <span className=" rounded-full bg-emerald-50 text-emerald-700 px-3 py-[4px] sm:text-sm text-[11px]">
                  {item?.type}
                </span>
                {/* <span className=" rounded-full bg-emerald-50 text-emerald-700 px-3 py-px text-sm">
                React
              </span> */}
              </div>
              <div>
                <Button
                  className="rounded-full p-4 bg-yellow-200 text-black px-8 hover:bg-yellow-300"
                  onClick={() => redirect(`/jobs/${item?.id}`)}
                >
                  Apply
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div className="text-2xl">No jobs Found</div>
      )}
      {
        datas?.length ? <PaginationWithLinks
          page={Number(searchParam) || 1}
          pageSize={5}
          totalCount={datas?.length}
        /> : ""
      }

    </>

  );
}
