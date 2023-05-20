import { useState } from "react";
import { Button, Input, Form, Label, Row, Col } from "reactstrap";

// form to add the appointment
export default function Appointments ({onAdd}) {
    const [formData, setFormData] = useState({
        appointment:"", datum:"", place:"", hour:"", important:false,
    })
//button to print data and delete them from the form
    const onSubmit = (e) => {
        e.preventDefault()
        const {appointment, datum, place, hour, important} = formData;
        onAdd({appointment, datum, place,hour,important});
        setFormData({
            appointment: "",
            datum: "",
            place: "",
            hour: "",
            important: false,
          });
    };
// form data with related value/checked control
    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value

            };
        });
    };

    return (
        <div className="my-4 bg-light border"> 
  <Row className="text-center my-3">
        <h4>New appointment</h4>
        </Row>
        <Form onSubmit={onSubmit}>
            <Row>
                <Col xs="5" className="text-center my-2">
            <Label for="appointment">What do you have to do?</Label>
            </Col>
            <Col xs="6">
        <Input 
        id="appointment"
        name="appointment"
         bsSize="sm"
         onChange = {handleChange}
         value={formData.appointment}
         />
         </Col>
         </Row>
         <Row>
                <Col xs="5" className="text-center my-2">
            <Label for="datum">When?</Label>
            </Col>
            <Col xs="6">
        <Input 
        id="datum"
        name="datum"
         bsSize="sm"
         onChange = {handleChange}
         value={formData.datum}
         />
         </Col>
         <Col xs="5" className="text-center my-2">
            <Label for="datum">Hour?</Label>
            </Col>
            <Col xs="6">
        <Input 
        id="hour"
        name="hour"
         bsSize="sm"
         onChange = {handleChange}
         value={formData.hour}
         />
         </Col>
         </Row>
         <Row>
                <Col xs="5" className="text-center my-2">
            <Label for="place">Who?</Label>
            </Col>
            <Col xs="6">
        <Input 
        id="place"
        name="place"
         bsSize="sm"
         onChange = {handleChange}
         value={formData.place}
         />
         </Col>
         </Row>
         <Row>
                <Col className="text-center my-2">
            <Label check for="important">Important?</Label>
        <Input 
        type="checkbox"
        id="important"
        name="important"
        className="mx-3"
        checked={formData.important}
        onChange={handleChange}
         />
         </Col>
         </Row>
         <Row>
            <Col className="text-center my-2">
            <Button
             color="dark"
             size="sm"
            >Insert
            </Button>
            </Col>
         </Row>
         </Form>
        </div>
    );
}