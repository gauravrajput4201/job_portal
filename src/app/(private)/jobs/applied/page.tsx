"use client";
import { BreadcrumbWithCustomSeparator } from "@/components/common/breadCrumb";
import Image from "next/image";
import useSWR from "swr";
import { redirect, useParams } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useStore from "@/store/store";
import { filterByIds } from "@/utils/utility";
import { Card } from "@/components/ui/card";
const fetcher = (url: any) => fetch(url).then((r) => r.json());
function AppliedJob() {
    const filters = useStore((state) => state.items);
    const { data, error, isLoading } = useSWR(
        `https://fakejobs-api.vercel.app/jobs/`,
        fetcher
    );
    if (isLoading) return <div className="absolute h-full w-full top-0 left-0 bg-white text-black text-3xl text-center mt-[20%]">Loading...</div>;
    if (error) return <div className="absolute h-full w-full top-0 left-0 bg-white text-black text-3xl text-center mt-[20%]">{error}</div>;
    const filterData: any = filterByIds(data, filters)
    return (
        <>
            <BreadcrumbWithCustomSeparator title={"jobs"} labels="Applied Job" />
            <div className=" p-8  lg:px-20">
                {filterData?.length > 0 ? (
                    filterData.map((item: any) => (
                        <Card className="w-full p-5 mb-3" key={item?.id}>
                            <div className="flex   gap-3 flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-0">
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
                                </div>
                            </div>

                            <div className="flex justify-between gap-3 flex-col sm:flex-row items-center">
                                <div className="flex gap-5">
                                    <span className=" rounded-full bg-emerald-50 text-emerald-700 px-3 py-[4px] sm:text-sm text-[11px]">
                                        {item?.title}
                                    </span>

                                </div>
                                <div>
                                    <Button
                                        className="rounded-full p-4 bg-yellow-200 text-black px-8 hover:bg-yellow-300"
                                        onClick={() => redirect(`/jobs/${item?.id}`)}
                                    >
                                        View Job
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div className="text-2xl text-center mt-6">No jobs Found</div>
                )}

            </div>

        </>
    );
}
export default AppliedJob;
