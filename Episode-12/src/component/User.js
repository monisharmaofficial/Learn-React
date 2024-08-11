import { useState } from "react";
const User = ({name}) =>{
    const [count, setCount] = useState(0);
    return (
        <div className="ab-user">
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <h2>Name: {name}</h2>
            <h3>Location: Aligarh</h3>
            <h4>Contact: @monisharmaofficial</h4>
        </div>
    );

};

export default User;