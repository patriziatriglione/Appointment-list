import { CardHeader, CardBody,CardText, Card, CardFooter } from "reactstrap";
import {MdCancel} from "react-icons/md";
// component of the single appointment
export default function Task ({task, onDelete}) {
    return (
<>
<Card id={task.id}
        className="my-2"
        color={task.important ? "danger" : "ligth" }
        outline
        style={{
            width: "18rem"
        }}>
        <CardHeader tag="h4">
            {task.appointment} 
            <MdCancel 
            className="float-end" 
            onClick={() => onDelete(task.id)}
            style={{
                cursor:"pointer"
            }} />
        </CardHeader>
        <CardBody>
            <CardText className="text-center">
                {task.datum} - {task.hour} 
                </CardText>
                <CardFooter className="text-center">
                {task.place}
                </CardFooter>
        </CardBody>
        </Card>  
        </>
    );
}
