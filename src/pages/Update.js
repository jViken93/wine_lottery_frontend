import React, {useState, useEffect} from "react"

import Table  from "react-bootstrap/Table";
import Container  from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

/**Update class to get all the participants in the wine lottery */

const Update = () => {
    const [participant, setParticipant] = useState([])

    const [isPending, setIsPending] = useState(false)

    //Get all the participants of the competition

    useEffect(() => {
        fetch("http://127.0.0.1:8000/LotteryRegistration/")
        .then(response => response.json())
        .then(
            data => setParticipant(data),
            console.log(participant)
            )
      },[])

    //Delete a participant
    const deleteParticipant = (id) => {

        setIsPending(true);

        fetch('http://127.0.0.1:8000/LotteryRegistration/' + id,{
            method: 'DELETE',
            headers: { 'Accept': 'application/json',
            'Content-Type': 'application/json'}
        }).then(() => {
            console.log('User was successfully deleted');
            setIsPending(false);
        })
    }
    return (
        /**A table to display all the participants in a table */
        <Container>
            <h1>Deltagere i vin lotteriet</h1>
            {participant.length ?(
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Fornavn</th>
                    <th>Etternavn</th>
                    <th>Email</th>
                    <th>Billeter kjøpt</th>
                    <th>ID</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {participant.map(item => 
                        <tr>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.tickets_to_buy}</td>
                            <td>{item.id}</td>
                            <td>
                                <Button onClick={() => deleteParticipant(item.id)}>Delete</Button>
                            </td>
                        </tr>
                        )}
                </tbody>
            </Table>
            ) : (
                <h1>Ingen deltagere er lagt til</h1>
            )}
        </Container>
    )
}

export default Update