import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';

/**Participate Class for submiting to the API */
const Particpate = () => {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [tickets_to_buy, setTickets_to_buy] = useState('')
    const [isPending, setIsPending] = useState(false)


    /**Function that sends a POST request to the api */
    const handleSubmit = (e) => {
        e.preventDefault()
        const participant = { first_name, last_name ,email, tickets_to_buy }
        console.log(participant)

        setIsPending(true);

        fetch('http://127.0.0.1:8000/LotteryRegistration/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(participant)
        }).then(() => {
            console.log('new participant added');
            setIsPending(false);
        })
    }


    return (
        /**A form were you can add participants */
        <Container>
        <h1>Påmelding til vin lotteriet</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label for="exampleInputEmail1">Fornavn</Form.Label>
                <Form.Control
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Skriv inn fornavn"
                    required
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label for="exampleInputEmail1">Etternavn</Form.Label>
                <Form.Control
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Skriv inn etternavn"
                    required
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>User Email</Form.Label>
                <Form.Control
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Skriv inn email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text class="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Hvor mange billeter ønsker du å kjøpe?</Form.Label>
                <Form.Control
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Skriv inn antall billeter"
                    required
                    value={tickets_to_buy}
                    onChange={(e) => setTickets_to_buy(e.target.value)}
                />
            </Form.Group>
            <br />
            {!isPending && <Button variant="primary" type="submit"> Send</Button>}
            {isPending && <Button variant="primary" type="submit" disabled> Sender...</Button>}
        </Form>
        </Container>
    )
}

export default Particpate

