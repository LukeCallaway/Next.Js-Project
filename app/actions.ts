'use server'

import { revalidatePath } from "next/cache"

export default async function updateData(path: string) {
    revalidatePath(path);
}