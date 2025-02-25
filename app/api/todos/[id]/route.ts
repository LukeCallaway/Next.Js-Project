import todos from "../../../db";

export async function GET(req: Request, context: {params: {id: number}}) {

    const id = +context.params.id;

    // findIndex returns -1 if index not in array
    const index = todos.findIndex(t => t.id === id);
    if(index === -1) return Response.json({'error message': 'id does not exist'});

    return Response.json(todos[index]); 
}

export async function PUT(req: Request, context: {params: {id: number}}) {

    const id = +context.params.id;
    const text = await req.json();

    const index = todos.findIndex(t => t.id === id);
    if(index === -1) {
        return Response.json({'error message': 'id does not exist'})
    } else{
        todos[index] = {id: id, ...text};
        return Response.json(todos);
    }
}

export async function DELETE(request: Request, context: {params: {id: number}}) {
    const id = +context.params.id;

    const index = todos.findIndex(t => t.id === id);
    if(index === -1) {
        return Response.json({'error message': 'id does not exist'})
    } else{
        todos.splice(index,1);
        return Response.json(todos);
    }
}
