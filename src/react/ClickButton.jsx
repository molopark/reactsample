import React, { useState } from "react";

function ClickButton() {
    const [count, setCount] = useState(0);

    // 클릭 이벤트 핸들러
    const handleClick = () => {
        setCount(count + 1);
        // alert('버튼이 클릭되었습니다!');
    };

    return (
        <div>
            <button onClick={handleClick}>클릭하세요</button>
            <p>클릭 횟수: {count}</p>
        </div>
    );
}

export default ClickButton;