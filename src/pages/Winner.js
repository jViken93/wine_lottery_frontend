import React, {useState, useEffect} from "react"
import Table  from "react-bootstrap/Table";
import Container  from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

/**Class winner were you can draw a winner, and see the winners displayed */

const Winner = () => {
    const [data, setData] = useState('');
    const [winners, setWinners] = useState([])
     //Draw the winners of the competition
    const getWinner = () => {
        fetch("http://127.0.0.1:8000/tickets/get_winner/")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
        });
    };

    //Get all the winners of the competition
    useEffect(() => {
        fetch("http://127.0.0.1:8000/tickets/get_all_winners/")
        .then(response => response.json())
        .then(
            data => setWinners(data),
            console.log(winners)
            )
      },[])
    
    return (
        /**Draw winner function, and a table display of the winners of the lottery */
        <Container>
            <div>
                <h2>Trekk en vinner</h2>
                <Button onClick={getWinner}>Trekk vinner!</Button>
                <br/>
                <h3>{data.Winner}</h3>
            </div>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Fullt Navn</th>
                    <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                {winners.map(item => 
                        <tr>
                            <td>{item.participant}</td>
                            <td>{item.id}</td>
                        </tr>
                        )}
                </tbody>
            </Table>
        </Container>
    )
}

export default Winner