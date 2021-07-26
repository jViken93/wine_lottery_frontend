import React, {useState} from "react"

const Winner = () => {
    const [data, setData] = useState([]);
     //Get Winner
    const getWinner = () => {
        fetch("http://127.0.0.1:8000/tickets/get_winner/")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
        });
    };
    
    return (
        <div>
            <button onClick={getWinner}>Trekk vinner!</button>
            <h1>{data.Winner}</h1>
    </div>
    )
}

export default Winner