import './footer.css';
import { Facebook, Twitter, Instagram, Github } from 'react-bootstrap-icons';
import { Stack } from 'react-bootstrap';

function Footer() {
    return(
        <div className="footer-container">
            <Stack direction="horizontal" gap={4}>
                <Twitter style={{color: '#918E9B'}} size="25px" />
                <Facebook style={{color: '#918E9B'}} size="25px" />
                <Instagram style={{color: '#918E9B'}} size="25px" />
                <Github style={{color: '#918E9B'}} size="25px" />
            </Stack>
        </div>
    )
}

export default Footer;