import React, {useState, useEffect} from "react"

import Table  from "react-bootstrap/Table";
import Container  from "react-bootstrap/Container";

/**Participants class to get all the participants in the wine lottery */

const Participants = () => {
    const [participant, setParticipant] = useState([])

    //Get all the participants of the competition

    useEffect(() => {
        fetch("http://127.0.0.1:8000/LotteryRegistration/")
        .then(response => response.json())
        .then(
            data => setParticipant(data),
            console.log(participant)
            )
      },[])


    return (
        /**A table to display all the participants in a table */
        <Container>
            <h1>Deltagere i vin lotteriet</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Fullt Navn</th>
                    <th>Billeter kjøpt</th>
                    <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                {participant.map(item => 
                        <tr>
                            <td>{item.full_name}</td>
                            <td>{item.tickets_to_buy}</td>
                            <td>{item.id}</td>
                        </tr>
                        )}
                </tbody>
            </Table>
        </Container>
    )
}

export default Participants