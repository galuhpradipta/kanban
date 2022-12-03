
declare type DropReason = 'DROP' | 'CANCEL';
export type DragResult = {
    reason: DropReason;
    draggableId: string;
    type: string;
    source: {
        droppableId: string;
        index: number;
    };
    destination: {
        droppableId: string;
        index: number;
    };
}

export type DragProvided = {
    announce: (message: string) => void;
}

type Task = {
    id: string;
    content: string;
}

type Column = {
    id: string;
    title: string;
    taskIds: string[];
}

type InitialData = {
    tasks: {
        [key: string]: Task;
    };
    columns: {
        [key: string]: Column;
    };
    columnOrder: string[];
}

export const initialData: InitialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Wash car' },
        'task-3': { id: 'task-3', content: 'Cook dinner' },
        'task-4': { id: 'task-4', content: 'Work out' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1'],
}
