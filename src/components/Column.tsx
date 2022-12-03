import { Droppable } from '@hello-pangea/dnd'
import TaskComponent from './Task'
type Task = {
    id: string;
    content: string;
}

type ColumnProps = {
    title: string;
    tasks: Task[];
}

const Column = ({ title, tasks }: ColumnProps) => {
    return (
        <div className="bg-gray-300 rounded-lg p-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <Droppable droppableId={title}>
                {(provided) => (
                    <div className="mt-4" {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => (
                            <TaskComponent key={task.id} index={index} id={task.id} content={task.content} />
                        ))}
                        {provided.placeholder}
                    </div>

                )}

            </Droppable>

        </div>
    );
}

export default Column;