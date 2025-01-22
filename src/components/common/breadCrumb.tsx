import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbWithCustomSeparator() {
  return (
    <div>
      <Breadcrumb className="w-full p-8  lg:px-20 py-4 bg-gray-100">
        <BreadcrumbList>
          <BreadcrumbItem>
            {/* <BreadcrumbLink> */}
            <Link href="/jobs">Home</Link>
            {/* </BreadcrumbLink> */}
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Job Details</BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
