/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from 'react';
import TodoList from './TodoList';
// import PropTypes from 'prop-types';

function Main() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'I love Easy Frontend! 😍' },
        { id: 2, title: 'We love Easy Frontend! 🥰' },
        { id: 3, title: 'They love Easy Frontend! 🚀' },
        { id: 4, title: 'I love Easy Frontend! 😍' },
        { id: 5, title: 'We love Easy Frontend! 🥰' },
        { id: 6, title: 'They love Easy Frontend! 🚀' },
    ]);
    
    function handleTodoClick(todo) {
        debugger;
        console.log(todo);
        const index = todoList.findIndex((x) => x.id === todo.id);
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }
    
    return(
        <div>
            <h1>Todo List React Hook</h1>
            <TodoList todos={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default Main;