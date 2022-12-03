import './App.css'
import { useState } from 'react'
import { DragDropContext, OnDragEndResponder } from '@hello-pangea/dnd'
import { initialData, DragResult, DragProvided } from './data'
import Column from './components/Column'


function App() {
  const [data, setData] = useState(initialData)

  const onDragEnd: OnDragEndResponder = (result: DragResult, provided: DragProvided) => {
    const { destination, source, draggableId } = result
    console.log('result', result)

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      }
      setData(newState)
      return
    }
  }

  return (
    <div className="App">
      <div className='bg-gray-300 text-center ml-1'>Kanban Board</div>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          {data.columnOrder.map((columnId) => (
            <Column key={columnId} title={columnId} tasks={data.columns[columnId].taskIds.map(taskId => data.tasks[taskId])} />
          ))}
        </DragDropContext>
      </div>
    </div>
  );





  {/* <DragDropContext>
        {(provided) => (
          <div className="flex bg-gray-300" >
            {tasks.map((task) => (
              <Droppable droppableId={task.status}>
                <div key={task.status} className="w-1/4 px-2 py-4" {...provided.droppableProps} ref={provided.innerRef}>
                  <h3 className="text-lg font-bold mb-4">{task.status}</h3>
                  {task.list.map((item) => (
                    <Draggable key={item.id}>
                      <div key={item.id} className="bg-white shadow rounded-lg p-4 mb-2">
                        <p className="text-gray-700 font-medium mb-2">{item.id}</p>
                        <p className="text-gray-500 text-sm">{item.content}</p>
                      </div>
                    </Draggable>
                  ))}
                </div>
              </Droppable>
            ))}
          </div>
        )}

      </DragDropContext > */}

  //   </div >
  // )
}


export default App
