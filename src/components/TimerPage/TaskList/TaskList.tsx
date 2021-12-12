import React, { useEffect, useState } from 'react'
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
import {
  taskChangeOrder,
  taskDelete,
  taskIncreasePlannedCount,
} from '../../../store/task/taskActions'
import TaskListTimeSum from './TaskListTimeSum/TaskListTimeSum'
import TaskFinishConfirm from './TaskFinishConfirm/TaskFinishConfirm'
import { AnimatePresence } from 'framer-motion'

// todo ограничить высоту списка, стилизовать скролл
const TaskList = () => {
  const dispatch = useDispatch()
  const { tasks, order } = useSelector((state: TRootState) => state.task)
  const currentTaskId = order[0]
  const currentTask = tasks[currentTaskId]
  const [isTaskFinishConfirmVisible, setIsTaskFinishConfirmVisible] =
    useState(false)

  const deleteCurrentTask = () => {
    if (!currentTaskId) return
    dispatch(taskDelete(currentTaskId))
    setIsTaskFinishConfirmVisible(false)
  }
  const extendCurrentTask = () => {
    if (!currentTaskId) return
    dispatch(taskIncreasePlannedCount(currentTaskId))
    setIsTaskFinishConfirmVisible(false)
  }


  useEffect(() => {
    currentTask?.plannedCount === 0 &&
    setIsTaskFinishConfirmVisible(true)
  }, [currentTask])

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    destination &&
    dispatch(taskChangeOrder(source.index, destination?.index))
  }

  const $tasksListItems = order.map((id, index) => {
    const { plannedCount, name } = tasks[id]
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
                count={plannedCount}
              />
            </div>

          )
        }
      </Draggable>
    )
  })

  return (
    <>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId={'droppable'}
          >
            {(provided) => (
              <STaskListUl
                ref={provided.innerRef}
              >
                <AnimatePresence>
                  {$tasksListItems}
                </AnimatePresence>
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
      {
        isTaskFinishConfirmVisible &&
        <TaskFinishConfirm
          onTaskDelete={deleteCurrentTask}
          onTaskExtension={extendCurrentTask}
        />
      }
    </>
  )
}

export default TaskList