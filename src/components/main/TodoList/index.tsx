import React from 'react'
import {useForm} from 'react-hook-form'
import {useRecoilValue} from 'recoil'
import {updateTodo} from '../../../api/main'
import {disabledAtom} from '../../../atoms/main'
import {ToDoListForm} from '../../../containers/common/FormContainer'
import useFetchTodos from '../../../hooks/useFetchTodos'

interface IExtraData {
  content: string
  createAt: string
  id: string
}

function TodoList() {
  const [extraData, setExtraData] = React.useState<object | IExtraData>({})
  const [detailView, setDetailview] = React.useState(false)
  const {isError, isLoading, todos} = useFetchTodos()
  const [save, setSave] = React.useState(false)
  const {register, getValues, handleSubmit} = useForm()
  const disabled = useRecoilValue(disabledAtom)
  const onValid = async (data: any) => {
    const index = disabled.findIndex(disable => disable === false)
    const inputValues = Object.values({...getValues()})
    const accessToken = window.localStorage.getItem('token') as string
    if (save) {
      const response = await updateTodo(
        accessToken,
        {
          title: inputValues[2 * index],
          content: inputValues[2 * index + 1],
        },
        todos[index].id,
      )
      if (response) window.location.href = '/'
    }
  }
  if (isLoading) {
    return <div>로딩 중입니다.</div>
  }
  if (isError) {
    return <div>에러</div>
  }
  console.log(extraData)
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {todos.map((todo, i) => (
        <>
          <ToDoListForm key={i} handleSubmit={handleSubmit(onValid)}>
            <ToDoListForm.Input
              inputValue={todo.title}
              disabled={disabled[i]}
              isTodo
              type='text'
              {...register(`title${i}`)}
            />
            <ToDoListForm.Input
              inputValue={todo.content}
              disabled={disabled[i]}
              isTodo
              type='text'
              {...register(`content${i}`)}
            />
            {disabled[i] ? (
              <ToDoListForm.FnButton index={i} context='수정' btnType='modify' />
            ) : (
              <>
                <ToDoListForm.FnButton setSave={setSave} index={i} context='저장' btnType='save' />
                <ToDoListForm.FnButton index={i} context='취소' btnType='cancel' />
              </>
            )}
            <ToDoListForm.FnButton index={i} id={todo.id} context='삭제' btnType='delete' />
            <ToDoListForm.FnButton
              setExtraData={setExtraData}
              setSave={setDetailview}
              id={todo.id}
              index={i}
              context='상세 보기'
              btnType='viewDetail'
            />
          </ToDoListForm>
          {'content' in extraData && detailView && todo.id === extraData.id && (
            <div>
              <p>content : {extraData.content}</p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          )}
        </>
      ))}
    </div>
  )
}

export default TodoList
