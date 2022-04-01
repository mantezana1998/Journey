import { Card, Button } from 'react-bootstrap';

export default function MeasurementCard (){

    const measurements = [
        {measurementName: "Frequency"},
        {measurementName: "Duration"}, 
        {measurementName: "Latency Recording"}, 
        {measurementName: "Interval Recording"}
    ]

    return (
        <Card style={{ width: '18rem' }}>
            {measurements.map((meas) => (
                <Card.Body>
                <Card.Title>{meas.measurementName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            ))}
        </Card>
    )
}