import { Button } from "reactstrap";
// Header and button control to hide or not the form
export default function Header ({onAdd, showAdd}) {
    let text = showAdd ? "Close" : "Add appointment";
    return (
        <>
        <div className="text-center my-3 bg-light border">
        <h1>Appointments</h1>
        </div>
        <div className="text-center">
            <Button
            color="dark"
            className="my-2"
            onClick={onAdd}
          >{text}</Button>
        </div>
        </>
    );
}