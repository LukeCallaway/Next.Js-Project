'use client';

import { FormEvent } from "react";

export default function TodoForm({ updateData }: any) {

    async function onSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const todo = {'text': formData.get('todo')};
        await fetch('/api/todos', {
                    method: 'POST',
                    body: JSON.stringify(todo),
                    })
        updateData('/');
    }

    return (
        <>
        <form onSubmit={onSubmit}  className='todo-form'>
            <input 
                type="text"
                id="todo"
                name='todo'
                defaultValue=''
                className='add-todo'
                placeholder='Add Todo Item'
                required/>
                <div>
                    <button type='submit' className='add-todo-btn'>
                        Submit
                    </button>
                </div>
        </form>
        </>
    )
};