import { Linkedin } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import './button.css';

function Buttons() {
    return(
        <div className="buttons-container">
            <Stack direction="horizontal" gap={3}>
                <Button variant="light"><EnvelopeFill style={{marginRight: '10px'}}/>Email</Button>
                <Button ><Linkedin style={{marginRight: '10px'}}/>LinkedIn</Button> 
            </Stack>
        </div>
    )
}

export default Buttons;