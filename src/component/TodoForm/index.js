/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/15/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');
    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value)
    }
    function handleSubmit(e) {
        debugger; // Todo by MongLV
        e.preventDefault();
        const formValue = {
            title: value,
        };
        // if(!onSubmit) return;
        console.log('Ok');
        onSubmit(formValue);

        // Reset form
        setValue('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

export default TodoForm;
