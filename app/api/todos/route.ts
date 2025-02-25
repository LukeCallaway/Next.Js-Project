import todos from "../../db"

export async function GET() {
    return Response.json(todos);
}

export async function POST(req: Request) {
    const text = await req.json();
    // create id would normally be created in a db with auto incrementing
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    todos.push({id:id, ...text});

    return Response.json(todos)
}