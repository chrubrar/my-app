"use client"

import Link from "next/link"

import { zodResolver } from "@hookform/resolvers/zod"

import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    username: z.string().min(4, {
        message: "Username must be at least 4 characters.",
    }),
    children: z.string().regex(/\d+/).transform(Number),
})

export default function FormDemo() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            children: 0,

        },

    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="flex w-72 flex-row">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                    <FormField
                        control={form.control}
                        name="children"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Children</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    How Many kids do you have
                                </FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />

                    <Button type="submit">Sendit!</Button>
                </form>

            </Form>
        </div>
    )

}