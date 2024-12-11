import { sql } from '@vercel/postgres'

export async function fetchUsers() {
    try {
        
        const data = await sql`select * from users`

        return data.rows

    } catch (error) {
        console.log('database Error', error)
        throw new Error('faild to fetch users')
    }
    
}