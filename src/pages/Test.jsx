import React, { useEffect, useState } from 'react'

const Test = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    }, []);
    return (
        <h1>{count}</h1>
    )
}

export default Test
