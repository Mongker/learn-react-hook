/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/15/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

function PostFiltersForm({onSubmit}) {
    const [value, setValue] = useState('');
    const typingTimeOutRef = useRef(null);
    function handleValue(e) {
        const valueNew = e.target.value;
        setValue(valueNew);

        if(typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }
        if(onSubmit) {
            typingTimeOutRef.current = setTimeout(() => {
                const formValue = {
                    value: valueNew,
                };
                onSubmit(formValue);
            }, 300);

        }
    }
    return(
        <form onSubmit={onSubmit}>
            <input type='text' placeholder={'Search'} value={value} onChange={handleValue} />
        </form>
    );
}

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null,
};

export default PostFiltersForm;
