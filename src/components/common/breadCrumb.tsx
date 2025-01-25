import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
interface BreadcrumbProps {
  title?: string;
  labels?: string; // Optional parameter
}

export function BreadcrumbWithCustomSeparator({ title, labels }: BreadcrumbProps) {
  return (
    <div>
      <Breadcrumb className="w-full p-8  lg:px-20 py-4 bg-gray-100">
        <BreadcrumbList>
          <BreadcrumbItem>
            {/* <BreadcrumbLink> */}
            <Link href="/">Home</Link>
            {/* </BreadcrumbLink> */}
          </BreadcrumbItem>
          {title ? (<><BreadcrumbSeparator /><BreadcrumbItem>
            <Link href="/jobs">{title}</Link>
          </BreadcrumbItem></>) : ""}
          {/* <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/jobs">{title}</Link>
          </BreadcrumbItem> */}

          {labels ? (<><BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{labels}</BreadcrumbPage>
            </BreadcrumbItem>
          </>) : ""}
          {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
