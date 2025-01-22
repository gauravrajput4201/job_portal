"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CloudUpload, Paperclip } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  email: z.string().email("Invalid email address"),
  resume: z
    .any()
    .refine(
      (file) => file && file.length === 1 && file[0]?.size <= 1024 * 1024 * 4,
      {
        message: "File is required and must be less than 4MB",
      }
    )
    .refine(
      (file) =>
        file &&
        ["application/pdf", "image/png", "image/jpeg"].includes(file[0]?.type),
      {
        message: "Only PDF, PNG, and JPG files are allowed",
      }
    ),
});

export default function MyForm() {
  const [files, setFiles] = useState<File[] | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
      form.setValue("resume", event.target.files); // Sync with react-hook-form
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-10">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter full name" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Resume</FormLabel>
              <FormControl>
                <div>
                  <div className="relative bg-background rounded-lg p-2">
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center flex-col p-8 w-full border-dashed border-2 border-slate-500 cursor-pointer"
                    >
                      <CloudUpload className="text-gray-500 w-10 h-10" />
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp; or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PDF, PNG, JPG (Max 4MB)
                      </p>
                    </label>
                    <input
                      id="resume"
                      type="file"
                      className="hidden"
                      accept=".pdf, .png, .jpg, .jpeg"
                      onChange={onFileChange}
                    />
                  </div>
                  {files &&
                    files.length > 0 &&
                    files.map((file, index) => (
                      <div key={index} className="mt-2 flex items-center gap-2">
                        <Paperclip className="h-4 w-4" />
                        <span>{file.name}</span>
                      </div>
                    ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
