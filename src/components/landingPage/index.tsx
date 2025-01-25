"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default function LandingPage() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#eaedff]">
            <div className="h-full grid place-items-center ">
                <div className="space-y-8 w-11/12">
                    <h1 className="text-4xl font-bold tracking-tight text-[#28395a] sm:text-5xl md:text-6xl text-center">
                        Find the most exciting Startup jobs
                    </h1>
                    <div className="grid place-items-center">

                        <Button className="h-12 w-[300px] px-8 hover:bg-[#FF1B7B]/90 text-lg" onClick={() => redirect(`/jobs`)}>

                            Find Job
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

