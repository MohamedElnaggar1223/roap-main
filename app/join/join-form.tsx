'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'
import { joinUs } from '@/lib/actions/join-us.actions'

const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    phone: z.string().min(1, 'Phone is required'),
})

export function JoinForm() {
    const router = useRouter()
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const { success } = await joinUs({
                name: values.name,
                email: values.email,
                phone: values.phone,
            })

            console.log(success)

            if (success) {
                toast({
                    title: 'Success!',
                    description: 'Your application has been submitted.',
                })
            }
            // router.push('/')
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Something went wrong. Please try again.',
            })
        }
    }

    return (
        <Card className="w-full max-w-[329px] min-w-[329px] max-h-[516px] min-h-[516px] rounded-3xl">
            <CardContent className="py-[1.95rem] px-10 space-y-6">
                <div className="space-y-2 text-center">
                    <h3 className="font-impala font-medium text-xl text-primary">ROAP</h3>
                    <h2 className="text-xl font-monument text-nowrap font-bold tracking-wide">Join as Business</h2>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Business Name <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Business Name"
                                            className="rounded-lg px-4 py-6 placeholder:text-base text-xl border-gray-400"
                                            {...field}
                                        />
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
                                    <FormLabel>
                                        Business Email <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Business Email"
                                            className="rounded-lg px-4 py-6 placeholder:text-base text-xl border-gray-400"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Business Phone <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            placeholder="Business phone"
                                            className="rounded-lg px-4 py-6 placeholder:text-base text-xl border-gray-400"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="text-secondary py-2 px-7 bg-primary rounded-full w-full"
                            size="lg"
                        >
                            Join as Business
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}