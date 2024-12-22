"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { loginSchema, loginSchemaProps } from "@/schemas/login.schema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import Flex from "@/components/ui/flex";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const { toast } = useToast();
  const { setUsername } = useUser();
  const form = useForm<loginSchemaProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const onsubmit = (data: loginSchemaProps) => {
    try {
      setUsername(data.name);
      toast({
        title: "Welcome",
        description: `Welcome ${data.name}`,
        duration: 500,
      });
      router.push("/create");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong",
        duration: 500,
      });
    }
  };

  return (
    <Flex className="flex-col flex justify-center items-center gap-10 h-screen">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={300}
        height={17}
        objectFit="cover"
      />
      <Card className="w-96 h-fit">
        <CardHeader>
          <CardTitle>start with your username</CardTitle>
          <CardDescription>Enter your username to login</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onsubmit)}>
              <Flex className="flex-col w-full items-center justify-center text-center gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <Input
                        {...field}
                        className={`${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                        placeholder="Your Name"
                        autoComplete="off"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full mt-5" type="submit">
                  Login
                </Button>
              </Flex>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Flex>
  );
};

export default LoginPage;
