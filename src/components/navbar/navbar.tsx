import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { auth } from "@/auth";
// import { handleSignOut } from "@/app/actions/authActions";

export default async function Navbar() {
  // const session = await auth();
  // console.log({ session });
  return (
    <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        Auth.js
      </Link>
      {/* {!session ? (
                <Link href="/auth/signin">
                    <Button variant="default">Sign In</Button>
                </Link>
            ) : (
                <form action={handleSignOut}>
                    <Button variant="default" type="submit">
                        Sign Out
                    </Button>
                </form>
            )} */}
      {/* <Button variant="default" type="submit">
        Sign Out
      </Button> */}
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="p-0 rounded-sm max-w-[170px] mr-3">
          <div className="flex py-2 px-2 border-b-2 border-slate-100 font-bold text-sm bg-[#F6F6F6] 2xl:px-1.5 2xl:py-1 cursor-pointer">
            <LogOut className="mr-2 text-sm h-5 " /> Log out
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
}
