import React from 'react'
import { fetchUsers } from '../lib/data'

export default async function Page() {
    const data = await fetchUsers()
    return (
        <div>
            <ul>
                {data.map((d) => {
                    return (
                        <li>{d.name}</li>

                    )
                })}
            </ul>

        </div>
    )
}
