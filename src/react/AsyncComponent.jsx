import React, { useState, useEffect } from 'react';

function AsyncComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // async 함수 선언
    async function fetchData() {
        try {
            // const response = await fetch('https://api.example.com/data');
            const response = await fetch('http://localhost:5000/users');
            const result = await response.json();
            setData(result);      // 데이터 저장
        } catch (err) {
            setError(err);        // 에러 처리
        } finally {
            setLoading(false);    // 로딩 상태 종료
        }
    }

    useEffect(() => {
        fetchData();
    }, []); // 빈 배열: 컴포넌트 마운트 시 1회 실행

    // 클릭 이벤트 핸들러
    const handleClick = () => {
        fetchData();
    };

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;

    return (
        <div>
            <button onClick={handleClick}>클릭하세요</button>
            <p>데이터: {JSON.stringify(data)}</p>
            <ul>
                {data.map((pokemon) => (
                    <li key={pokemon.id}>
                        이름: {pokemon.name} / 나이: {pokemon.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AsyncComponent;