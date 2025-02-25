import UpdateForm from "../components/UpdateForm";

export default async function DisplayTodo(context: {params: {id: number}}) {
    const id = context.params.id;

    const response = await fetch(`http://localhost:3000/api/todos/${id}`);
    const data = await response.json();

    return (
    <>
        <h1>Update Todo Item</h1>
        <UpdateForm id={id} text={data.text}/>
    </>
  );
}
