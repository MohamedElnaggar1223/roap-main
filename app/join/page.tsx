'use client'

import { JoinForm } from './join-form'

export default function JoinPage() {
    return (
        <div className="antialiased font-inter bg-hero bg-cover relative h-dvh flex justify-center items-center bg-no-repeat w-screen">
            <div className="absolute inset-0 bg-secondary bg-opacity-50 z-0" />
            <div className="relative z-10 max-w-[329px] min-w-[329px] max-h-[516px] min-h-[516px]">
                <JoinForm />
            </div>
        </div>
    )
}