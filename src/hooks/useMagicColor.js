/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/16/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useEffect, useRef, useState} from 'react';

function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'green', 'yellow'];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random()*3);
    }
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    debugger
    // Change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            console.log('First color: ', color);
            console.log('Change color: ', colorRef.current);
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}
export default useMagicColor;
