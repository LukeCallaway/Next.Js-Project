'use client';

import Link from "next/link";

export default function TodoList({todos, handleClick}: any) {

  return (
    <ul>
      
      {todos.map((d: { text: string; id: number }) => (
        <>
      <li key={d.id} >
        <Link href={`/${d.id}`}>{d.text}</Link>
        <button onClick={() => handleClick(d.id)} className="li-delete-btn">
          X
        </button>
      </li>

      </>
      ))}
    </ul>
  );
}

