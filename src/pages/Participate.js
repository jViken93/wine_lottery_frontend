import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';

const Particpate = () => {
    const [full_name, setFull_name] = useState('')
    const [email, setEmail] = useState('')
    const [tickets_to_buy, setTickets_to_buy] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const participant = { full_name, email, tickets_to_buy }
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
        <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label for="exampleInputEmail1">Full name</Form.Label>
                <Form.Control
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter full name"
                    required
                    value={full_name}
                    onChange={(e) => setFull_name(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>User Email</Form.Label>
                <Form.Control
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter full email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text class="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>How many ticket would you like to buy?</Form.Label>
                <Form.Control
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter full email"
                    required
                    value={tickets_to_buy}
                    onChange={(e) => setTickets_to_buy(e.target.value)}
                />
            </Form.Group>
            <br />
            {!isPending && <Button variant="primary" type="submit"> Submit</Button>}
            {isPending && <Button variant="primary" type="submit" disabled> Submiting...</Button>}
        </Form>
        </Container>
    )
}

export default Particpate

