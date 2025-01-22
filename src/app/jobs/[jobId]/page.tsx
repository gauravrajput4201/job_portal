"use client";

import ApplyForm from "@/components/common/aplyForm";
import { BreadcrumbWithCustomSeparator } from "@/components/common/breadCrumb";
import Image from "next/image";
import useSWR from "swr";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useStore from "@/store/store";
const fetcher = (url: any) => fetch(url).then((r) => r.json());
function JobDetails() {
  const [visible, setVisible] = useState(false);
  const params = useParams<any>();
  const filters = useStore((state) => state.filters);
  const canApply = (id: any) => {
    if (!filters.includes(id)) {
      setVisible(!visible);
    }
  };
  const { data, error, isLoading } = useSWR(
    `https://fakejobs-api.vercel.app/jobs/${params?.jobId}`,
    fetcher
  );

  if (isLoading) return <div className="absolute h-full w-full top-0 left-0 bg-white text-black text-3xl text-center mt-[20%]">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data, data);
  return (
    <>
      <BreadcrumbWithCustomSeparator />
      <div className="flex sm:justify-between sm:items-center flex-col sm:flex-row  sm:gap-3 p-8  lg:px-20 bg-[#e8f2f1] py-14  ">
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
            <h2 className="m-0 text-xl sm:text-3xl">{data?.company?.name}</h2>
            <span className=" text-[#225e57] text-base sm:text-lg">{data?.location}</span>
          </div>
        </div>
        <div className="sm:text-right mt-4 sm:mt-0">
          <span className="sm:text-2xl text-lg text-right">{data?.salary}</span>
          <div className=":sm:text-lg text-sm text-[#225e57] sm:text-right">
            Posted 2 years
          </div>
        </div>
      </div>
      <div className=" p-8 pb-3  lg:px-20">
        <h3 className="font-bold text-2xl">Overview</h3>
        <p className="text-lg mt-3">{data?.company?.description}</p>
      </div>
      <div className=" p-8 pb-3   lg:px-20">
        <h3 className="font-bold text-2xl">Job description</h3>
        <p className="text-lg mt-3 text-[#111827]">{data?.description}</p>
      </div>
      {/* <div className=" p-8 pb-2  sm:px-20 sm:pb-2 ">
        <div>job id is {params?.jobId}</div>;
      </div> */}
      <div className="w-full text-center my-10">
        <Button
          className="rounded-full  bg-yellow-200 text-black text-base hover:bg-yellow-300 px-8 py-6 "
          onClick={() => canApply(params?.jobId)}
        >
          {!filters.includes(params?.jobId)
            ? "Apply For this Job"
            : "Already Applied"}
        </Button>
      </div>
      <Dialog open={visible} onOpenChange={() => setVisible(!visible)}>
        <DialogContent className="w-11/12 max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Job Application</DialogTitle>
            <DialogDescription>
              {data?.company?.name}
            </DialogDescription>
          </DialogHeader>
          <ApplyForm jobId={params?.jobId} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default JobDetails;
