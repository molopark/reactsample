import React from "react";
import ClickButton from "./react/ClickButton";
import AsyncComponent from "./react/AsyncComponent";

function Profile() {
    return (
        <div>
            <h1>프로필 페이지</h1>
            <p>버튼 클릭</p>
            <ClickButton /><br />
            <p>비동기호출</p>
            <AsyncComponent />
        </div>
    );
}

export default Profile;