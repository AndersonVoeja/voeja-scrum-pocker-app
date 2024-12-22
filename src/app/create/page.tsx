"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { tableSchema, tableSchemaProps } from "@/schemas/table.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Flex from "@/components/ui/flex";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { createTable } from "@/services/table.create";
import { useRoom } from "@/context/roomContext";

export default function CreateTable() {
  const { setVotes } = useRoom();

  const [selectedVotes, setSelectedVotes] = useState<number[]>([]);
  const { username } = useUser();
  const router = useRouter();
  const form = useForm<tableSchemaProps>({
    resolver: zodResolver(tableSchema),
    defaultValues: {
      tableName: "",
      votes: [],
    },
  });

  const predefinedOptions = {
    Default: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
    TaskEasy: [1, 2, 3, 5, 8],
    Custom: [0, 3, 5, 13, 21, 34, 55, 84],
  };

  const handlePredefinedSelect = (votes: number[]) => {
    setSelectedVotes(votes);
    form.setValue("votes", votes);
  };

  const handleVoteRemove = (vote: number) => {
    const updatedVotes = selectedVotes.filter((v) => v !== vote);
    setSelectedVotes(updatedVotes);
    form.setValue("votes", updatedVotes);
  };

  const onSubmit = async (data: tableSchemaProps) => {
    try {
      const payload = { ...data, header: username, votes: selectedVotes };
      const response = await createTable(payload);
      setVotes(response.votes);
      router.push(`/room/${response.tableId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex flex-col w-full h-full justify-center items-center"
    >
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Create a New Table</CardTitle>
          <CardDescription>
            Use this form to create a new table for your Scrum Poker sessions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Flex className="flex-col space-y-5">
                <FormField
                  control={form.control}
                  name="tableName"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Table Name</FormLabel>
                      <Input
                        {...field}
                        className={`${
                          fieldState.error ? "border-red-500" : ""
                        }`}
                        placeholder="Table name"
                        autoComplete="off"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="votes"
                  render={({ fieldState }) => (
                    <FormItem>
                      <FormLabel>Select Votes</FormLabel>
                      <div>
                        <Flex className="space-x-4">
                          {Object.entries(predefinedOptions).map(
                            ([key, votes]) => (
                              <Button
                                key={key}
                                type="button"
                                variant="outline"
                                onClick={() => handlePredefinedSelect(votes)}
                                className={`${
                                  selectedVotes === votes
                                    ? "bg-blue-500 text-white"
                                    : ""
                                }`}
                              >
                                {key}
                              </Button>
                            )
                          )}
                        </Flex>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mt-4">
                          Selected Votes (click to remove):
                        </h3>
                        <Flex className="items-center text-start flex-wrap space-y-2 mt-2">
                          {selectedVotes.map((vote) => (
                            <Badge
                              key={vote}
                              onClick={() => handleVoteRemove(vote)}
                              className="bg-gray-200 mr-2 text-gray-800 hover:bg-red-300 cursor-pointer"
                            >
                              {vote}
                            </Badge>
                          ))}
                        </Flex>
                      </div>
                      <FormMessage />
                      {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                <Button className="w-full mt-5" type="submit">
                  Create Table
                </Button>
              </Flex>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
