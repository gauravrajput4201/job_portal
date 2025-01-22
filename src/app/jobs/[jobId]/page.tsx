async function JobDetails({ params }: any) {
  // const { id } = React.use(params)
  const { jobId } = await params;
  return <div>job id is {jobId}</div>;
}

export default JobDetails;
