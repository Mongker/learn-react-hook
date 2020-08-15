/**
* Copyright 2020 present, Lê Văn Mong.
* All rights reserved.
* @author Mong Le Van on 12/8/2020
* @email: levanmong.dola.99@gmail.com
* @student-code: 68DCHT20091
* @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
*/

import React from 'react';
import PropTypes from 'prop-types';

function TodoList(props) {
    const {todos, onTodoClick} = props;
    debugger;
    function handleClick(todo) {
        if(onTodoClick) {
            onTodoClick(todo);
        }
    }
    return(
        <div className="todo-list">
            {
                todos.map((todo) => (
                    <div key={todo.id} onClick={() => handleClick(todo)}>
                        {todo.title}
                    </div>
                ))
            }
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: () => {},
}

export default TodoList;