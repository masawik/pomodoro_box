import React from 'react'
import TaskListItem from './TaskListItem/TaskListItem'
import { STaskListUl } from './TaskList.styles'
import { useDispatch, useSelector } from 'react-redux'
import { TRootState } from '../../../store/rootReducer'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd'
import { taskChangeOrder } from '../../../store/task/taskActions'
import TaskListTimeSum from './TaskListTimeSum/TaskListTimeSum'

const TaskList = () => {
  const dispatch = useDispatch()
  const { tasks, order } = useSelector((state: TRootState) => state.task)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    destination &&
    dispatch(taskChangeOrder(source.index, destination?.index))
  }

  const $tasksListItems = order.map((id, index) => {
    const { count, name } = tasks[id]
    return (
      <Draggable key={id} draggableId={id} index={index}>
        {
          (provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TaskListItem
                key={id}
                id={id}
                name={name}
                count={count}
              />
            </div>

          )
        }
      </Draggable>
    )
  })

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId={'droppable'}
        >
          {(provided) => (
            <STaskListUl
              ref={provided.innerRef}
            >
              {$tasksListItems}
              {provided.placeholder}
            </STaskListUl>
          )}
        </Droppable>

      </DragDropContext>

      {
        !!order.length
        &&
        <TaskListTimeSum tasks={tasks} />
      }
    </div>
  )
}

export default TaskList