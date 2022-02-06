import { Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import './button.css';

function Buttons() {
    return(
        <div className="buttons-container">
            <Stack direction="horizontal" gap={3}>
                <Button style={{paddingRight: '20px', paddingLeft: '20px'}} variant="light"><EnvelopeFill style={{marginRight: '7px'}}/>Email</Button>
                <Button ><Linkedin style={{marginRight: '7px'}}/>LinkedIn</Button> 
            </Stack>
        </div>
    )
}

export default Buttons;