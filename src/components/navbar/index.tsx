
"use client"
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BookCheck, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { getNamePrefix } from "@/utils/utility";
import { redirect } from "next/navigation";



export default function Navbar() {
  const { data: session, status } = useSession();
  const getName = getNamePrefix(session?.user?.name)
  return (
    <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        Job Portal
      </Link>

      <Popover>
        <PopoverTrigger>
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>{getName}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="p-0 rounded-sm max-w-[170px] mr-3">
          <div className="flex py-2 px-2 border-b-2 border-slate-100 font-bold text-sm bg-[#F6F6F6] 2xl:px-1.5 2xl:py-1 cursor-pointer hover:bg-slate-200" onClick={() => signOut()}>
            <LogOut className="mr-2 text-sm h-5 " /> Log out
          </div>
          <div className="flex py-2 px-2 border-b-2 border-slate-100 font-bold text-sm bg-[#F6F6F6] 2xl:px-1.5 2xl:py-1 cursor-pointer hover:bg-slate-200" onClick={() => redirect(`/jobs/applied`)}>
            <BookCheck className="mr-2 text-sm h-5 " /> Applied Job

          </div>
        </PopoverContent>

      </Popover>
    </nav>
  );
}
