"use client";

import ApplyForm from "@/components/common/aplyForm";
import { BreadcrumbWithCustomSeparator } from "@/components/common/breadCrumb";
import Navbar from "@/components/navbar/navbar";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import React from "react";
function JobDetails() {
  const params = useParams<{ tag: string; item: string }>();

  return (
    <>
      <BreadcrumbWithCustomSeparator />
      <div className="min-h-screen p-8 pb-2  sm:px-20 sm:pb-2 ">
        <div>job id is {params?.item}</div>;
      </div>
      <Dialog>
        <DialogTrigger>Apply</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ApplyForm jobId={params?.item} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default JobDetails;
