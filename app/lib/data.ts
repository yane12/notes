import { sql } from '@vercel/postgres'
import { Note } from './types'

export async function fetchUsers() {
    try {
        const data = await sql`select * from users`
        return data.rows
    } catch (error) {
        console.log('database Error', error)
        throw new Error('faild to fetch users')
    }
}

export async function fetchNotes() {
    try {
        
    } catch (error) {
        console.log()
    }
}