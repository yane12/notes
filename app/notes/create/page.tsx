'use client'
import React from 'react'

export default function Page() {
    return (
        <div>
            <form>
                <h1>Create Note</h1>
                <div>
                    <label className='block' htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className='rounded-md border border-gray-500'
                        />
                </div>
                <div>
                    <label className='block' htmlFor="content">Content</label>
                    <input
                        type="text"
                        name='content'
                        id='content'
                        className='rounded-md border border-gray-500' />
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}
