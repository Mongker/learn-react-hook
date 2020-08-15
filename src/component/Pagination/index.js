/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/15/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';

function Pagination({pagination, onPageChange}) {
    const {_page, _limit, _totalRows} = pagination;
    console.log('Trang hien thi'+_page);
    const totalPage = Math.ceil(_totalRows/_limit)
    function handlePageChange(newPage) {
        if(onPageChange){
            onPageChange(newPage);
        }
    }
    return(
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page-1)}
            >Prev</button>
            <button
                disabled={_page >= totalPage}
                onClick={() => handlePageChange(_page+1)}
            >
                Next
            </button>
        </div>
    );
}

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    pagination: {},
    onPageChange: () => {},
};

export default Pagination;
