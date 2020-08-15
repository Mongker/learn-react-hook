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

function PostList({post}) {
    return(
        <div style={{color: 'red'}}>
            {post.map(item => (
              <div key={item.id}>
                  {item.title}
              </div>
            ))}
        </div>
    );
}

PostList.propTypes = {
    post: PropTypes.array,
};

PostList.defaultProps = {
    post: [],
};

export default PostList;
