// "use client";

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { signIn, signOut } from "next-auth/react";
// import { Github } from "lucide-react";

// const LoginForm = () => {
//   return (
//     <>
//       <div className=" border border-gray-400 rounded-sm p-6 max-w-sm mx-auto mt-12">
//         <Button variant="outline"
//           onClick={() =>
//             signIn("github", {
//               redirectTo: "/jobs",
//             })
//           }
//           className="w-full"
//         >
//           <Github />
//           SignIn with Github
//         </Button>
//         {/* <Button onClick={() => signOut()} variant="outline" className="w-full">
//           Sign out
//         </Button> */}
//       </div>
//     </>
//   );
// };

// export default LoginForm;

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// import { signInSchema } from "@/lib/zod";
// import LoadingButton from "@/components/loading-button";
// import {
//   handleCredentialsSignin,
//   handleGithubSignin,
// } from "@/app/actions/authActions";
import { useState } from "react";
// import ErrorMessage from "@/components/error-message";
import { Button } from "@/components/ui/button";

import { object, string } from "zod";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";
const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
export default function SignIn() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    const { email, password } = values;


    const response: any = await signIn("credentials", {
      email,
      password,
      redirectTo: "/jobs"
      // redirectTo: "/jobs"
    });
    console.log({ response });
    // if (response.ok) {
    //   redirect(`/jobs`)
    // }

    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    // Process response here
    // console.log("Login Successful", response);
    toast.success("Login Successful");

  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit button will go here */}
              {/* <LoadingButton
                pending={form.formState.isSubmitting}
              /> */}
              <Button

                className="w-full"
              >
                Login
              </Button>
            </form>
          </Form>

          <span className="text-sm text-gray-500 text-center block my-2">
            or
          </span>

          <Button variant="outline"
            onClick={() =>
              signIn("github", {
                redirectTo: "/jobs",
              })
            }
            className="w-full"
          >
            <Github />
            SignIn with Github
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}