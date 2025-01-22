import ApplyForm from "@/components/common/aplyForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

async function JobDetails({ params }: any) {
  // const { id } = React.use(params)
  const { jobId } = await params;
  return (
    <>
      <div>job id is {jobId}</div>;
      <Dialog>
        <DialogTrigger>
          {/* <Button>Apply {jobId} </Button> */}
          Apply
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              {/* ksdjkskh ksjdhfksdhkfh ssdjksdfk */}
            </DialogDescription>
          </DialogHeader>
          <ApplyForm />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default JobDetails;
