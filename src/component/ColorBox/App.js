/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 11/8/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

//Tham khảo tại: https://www.youtube.com/watch?v=SIAGpAaLSaI&list=PLeS7aZkL6GOsHNoyeEpeL8B1PnbKoQD9m&index=4

import React, {useState} from 'react';
// import PropTypes from 'prop-types';

// styles
import './App.scss';

function getRandomColor() {
    const COLORS_LIST = ['deeppink', 'red', 'black', 'blue', 'green'];
    const randomIndex = Math.trunc(Math.random() *5);
    return COLORS_LIST[randomIndex];
}

function App() {
    const [color, setColor] = useState((() => {
        const initColor = localStorage.getItem('box_color') || 'red';
        console.log(initColor);
        return initColor;
    }));
    function handleBoxClick() {
      // set color
      const newColor = getRandomColor();
      setColor(newColor);
      localStorage.setItem('box_color', newColor);
    }
    return(
        <div className={"color-box"} style={{backgroundColor: color}} onClick={handleBoxClick}>>
            <h1>Lê Văn Mong học React Hook</h1>
        </div>
    );
}

// App.propTypes = {};

export default App;