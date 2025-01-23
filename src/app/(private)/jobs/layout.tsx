// import Navbar from "@/components/navbar";

import Navbar from "@/components/navbar";

const Jobs = ({ children }: any) => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="h-full w-full ">{children}</div>
      </div>
    </>
  );
};

export default Jobs;
