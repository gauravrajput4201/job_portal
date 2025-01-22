import Navbar from "@/components/navbar/navbar";

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
