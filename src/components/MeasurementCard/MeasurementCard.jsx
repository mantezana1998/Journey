import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function MeasurementCard (){

    const measurements = [
        {
            measurementName: "Frequency", 
            description: "The event and rate recording method that counts the number of times a behavior happens within a specific time frame."
        },

        {
            measurementName: "Duration", 
            description: "The time length of how long a behavior last."
        },

        {
            measurementName: "Latency Recording",
            description: "Measuring the time that it takes for a behavior to occur after a verbal cue or an event"
        }, 

        {
            measurementName: "Interval Recording",
            description: "Measuring when a behavior occurs or doesn't occur during specified time frames."
        }
    ]

    // involves observing whether a behavior occurs or does not occur during specified time periods

    return (
    <>
        <Container>
            <Row className="justify-content-md-center">
                <Card style={{ width: '18rem' }}>
                {measurements.map((measurement) => (
                <Card.Body>
                    <Card.Title> {measurement.measurementName} </Card.Title>
                    <Card.Text> {measurement.description} </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                ))}
                </Card>
            </Row>
        </Container>
    </>
    )
}