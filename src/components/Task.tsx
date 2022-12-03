import { Draggable } from '@hello-pangea/dnd'

type Task = {
    index: number;
    id: string;
    content: string;
}

const Task = ({ index, id, content }: Task) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="bg-white shadow rounded-lg p-4 mb-2"
                >
                    <p className="text-gray-700 font-medium mb-2">{id}</p>
                    <p className="text-gray-500 text-sm">{content}</p>
                </div>
            )}
        </Draggable>
    );
}

export default Task;