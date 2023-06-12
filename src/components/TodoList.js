import { useState } from 'react'
import React from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const TodoList = () => {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    const addButtonHandler = () => {
        console.log('addButtonHandler')
        console.log(todo)
        setTodos([todo, ...todos])
        console.log(todos)
        setTodo('')
    }

  return (
    <Wrapper>
        <TodoCategoryHeader>
            <CategoryIcon style={{ color: '#FD76A1' }}>
                <i className={'fas  fa-user'} />
            </CategoryIcon>
            <Title>Personal</Title>
            <TodoInput value={todo} onChange={e => e.target.value}/>
            <AddTodo className='fas fa-plus'onClick={addButtonHandler}/>
        </TodoCategoryHeader>
        {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo}/>
        ))}
    </Wrapper>
    )
}

export default TodoList

const Wrapper = styled.div`
    background-color: #20212d;
    border-radius: 20px;
    margin-bottom: 30px;
    overflow: hidden;
`;

const TodoCategoryHeader = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #272833;
    padding: 15px 20px;
`;

const CategoryIcon = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const Title = styled.div`
    flex: 1;
    font-size: 18px;
    font-weight: 600;
`;

const TodoInput = styled.input`
    height: 30px;
    font-size: 18px;
    outline: none;
    border: none;
    background-color: #20212d;
    border-radius: 4px;
    color: #eee;
    padding: 4px 10px;
    margin-right: 4px;
`;

const AddTodo = styled.i`
    padding: 10px 16px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover {
        background-color: #20212d;
        transition: 0.3s;
        cursor: pointer;
    }
`;
