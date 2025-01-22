"use client";

import ApplyForm from "@/components/common/aplyForm";
import { BreadcrumbWithCustomSeparator } from "@/components/common/breadCrumb";
import Image from "next/image";

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
function JobDetails() {
  const [visible, setVisible] = useState(false);
  const params = useParams<any>();
  const filters = useStore((state) => state.filters);
  const canApply = (id: any) => {
    if (!filters.includes(id)) {
      setVisible(!visible);
    }
  };

  return (
    <>
      <BreadcrumbWithCustomSeparator />
      <div className="flex justify-between items-center px-20 bg-[#e8f2f1] py-14 ">
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
            <h2 className="m-0 text-3xl">Investor Quality</h2>
            <span className=" text-[#225e57] text-lg">Norway</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl text-right">$2k - $9k</span>
          <div className="text-lg text-[#225e57] text-right">
            Posted 2 years
          </div>
        </div>
      </div>

      <div className=" p-8 pb-2  sm:px-20 sm:pb-2 ">
        <div>job id is {params?.jobId}</div>;
      </div>
      <div className="w-full text-center">
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Job Application</DialogTitle>
            <DialogDescription>
              Global Communications Associate
            </DialogDescription>
          </DialogHeader>
          <ApplyForm jobId={params?.jobId} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default JobDetails;
