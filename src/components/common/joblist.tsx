import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default function JobList() {
  return (
    <>
      <Card className="w-full p-5">
        <div className="flex justify-between items-center">
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
              <h2 className="m-0 text-xl">Investor Quality</h2>
              <span className=" text-gray-300">Norway</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl text-right">$2k - $9k</span>
            <div className="text-sm text-gray-400 text-right">
              Posted 2 years
            </div>
          </div>
        </div>
        <div className="text-lg text-gray-500 my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          placeat dignissimos excepturi itaque nobis vel, nisi, tempore quis
          impedit optio exercitationem commodi tempora est! Cum a fugit quos
          incidunt iste.
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <span className=" rounded-full bg-emerald-50 text-emerald-700 px-3 py-px text-sm">
              Full-time
            </span>
            <span className=" rounded-full bg-emerald-50 text-emerald-700 px-3 py-px text-sm">
              Software
            </span>
            <span className=" rounded-full bg-emerald-50 text-emerald-700 px-3 py-px text-sm">
              React
            </span>
          </div>
          <div>
            <Button
              className="rounded-full p-4 bg-yellow-200 text-black px-8 hover:bg-yellow-300"
              onClick={() => redirect(`/jobs/${1}`)}
            >
              Apply
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
