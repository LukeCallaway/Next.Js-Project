'use client';


import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function UpdateForm({ id, text}: any) {
    const router = useRouter();

    async function onSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const todo = {'text': formData.get('todo')};
        await fetch(`/api/todos/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(todo),
                    })
        router.push('/');
    }

    return (
        <>
        <form onSubmit={onSubmit}  className='todo-form'>
            <input 
                type="text"
                id="todo"
                name='todo'
                defaultValue={text}
                className='add-todo'
                placeholder='Update Todo Item'
                required/>
                <div>
                    <button type='submit' className='update-todo-btn'>
                        Submit
                    </button>
                </div>
        </form>
        </>
    )
};