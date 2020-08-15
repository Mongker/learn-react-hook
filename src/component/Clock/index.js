/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/16/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, {useState, useEffect} from 'react';

function formatDate(data) {
    const hours = `0${data.getHours()}`.slice(-2);
    const minutes = `0${data.getMinutes()}`.slice(-2);
    const seconds = `0${data.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    const [timeString, setTimeString] = useState('');
    useEffect(()=>{
        const clock =setInterval(()=>{
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000)
        return () => {
           clearInterval(clock);
        }
    }, []);
    return(
        <div>
            <h1 style={{color: 'red'}}>{timeString}</h1>
        </div>
    );
}

export default Clock;
