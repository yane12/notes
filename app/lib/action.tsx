'use server'
import { z } from 'zod';
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    user_id: z.string(),
    title: z.string().trim().min(1, { message: 'title is required' }),
    content: z.string().trim().min(1, { message: 'content is re' }),
})

const CreateSchema = FormSchema.omit({ id: true, user_id: true })

export async function createNote(prevState: any, formData: FormData) {
    const validateFields = CreateSchema.safeParse(
        {
            title: formData.get('title'),
            content: formData.get('content')
        }
    )

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors
        }
    }

    const { title, content } = validateFields.data

    const user_id = '7c80c350-e80d-4a0a-b849-a80958c24008';

    try {
        await sql`Insert into notes (user_id, title, content) values (${user_id}, ${title}, ${content})`

    } catch (error) {
        return {
            message: 'database Error: failed to create Note'
        }
    }

    revalidatePath('/notes')
    redirect('/notes')
}