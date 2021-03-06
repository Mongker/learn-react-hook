/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useState} from 'react';
import queryString from 'query-string'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import PostList from './PostList';
import Pagination from './Pagination';
import PostFiltersForm from "./PostFiltersForm";
import Clock from './Clock';
import useClock from '../hooks/useClock';
import App from './ColorBox/App';
import useMagicColor from '../hooks/useMagicColor';
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
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 2,
        _limit: 10,
        _totalRows: 20,
    });
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 2,
        title_like: ''
    });

    useEffect(()=>{
        try {
            async function fetchPostList() {
                const paramsString = queryString.stringify(filter);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({responseJSON});
                const {data, pagination} = responseJSON;

                setPostList(data);
                setPagination(pagination);
            }
            fetchPostList();
        } catch (e) {
            console.log(e.message);
        }
    }, [filter]);

    function handleTodoClick(todo) {
        const index = todoList.findIndex((x) => x.id === todo.id);
        const newTodoList = [...todoList];
        // Todo by MongLV: Xóa các 1 phần tử tạo vị trí đó
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function handleTodoFormSubmit(formValue) {
        console.log(formValue);
        const newTodo = {
            id: todoList.length + 1,
            ...formValue,
        };
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList)
    }

    function handlePageChange(newPage) {
        console.log(newPage);
        setFilter({
            ...filter,
            _page: newPage,
        })
    }

    function handleFilterChange(newFilter) {
        console.log('Ky tu search: '+newFilter.value);
        setFilter({
            ...filter,
            _page: 1,
            title_like: newFilter.value,
        })
    }

    const {timeString} = useClock();
    const color = useMagicColor();
    console.log('ket qua'+color);
    return(
        <div>
            <div>
                <h3>Custom Hooks</h3>
                <Clock />
                <h3 style={{color: color}}>{timeString}</h3>
            </div>
            <div style={{backgroundColor: '#90adab'}}>
                <h3>API và vòng đời trong React Hook</h3>
                <PostFiltersForm onSubmit={handleFilterChange} />
                <PostList post={postList} />
                <Pagination onPageChange={handlePageChange} pagination={pagination} />
            </div>
            <div style={{backgroundColor: '#86729c'}}>
                <h3>Todo List React Hook</h3>
                <TodoForm onSubmit={handleTodoFormSubmit} />
                <TodoList todos={todoList} onTodoClick={handleTodoClick} />
            </div>
            <App />
            <h3>-END-</h3>
        </div>
    );
}

export default Main;
