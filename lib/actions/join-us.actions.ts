'use server'

import { createClient } from "@/utils/supabase/server"

export const joinUs = async (data: { name: string, email: string, phone: string }) => {
    const supabase = await createClient()

    const { error } = await supabase.from('join_us').insert({
        email: data.email,
        name: data.name,
        phone: data.phone,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    })

    if (error) {
        throw new Error(error.message)
    }

    return { success: true }
}