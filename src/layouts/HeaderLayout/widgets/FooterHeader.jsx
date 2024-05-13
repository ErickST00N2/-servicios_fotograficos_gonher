import { FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function FooterHeader() {
    return (<div className="d-flex gap-3 ">
        <Link to={'https://www.facebook.com/JoseLuisGonherFotografia'} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="" style={{ fontSize: '1.5em' }} />
        </Link>
        <Link to={'https://maps.app.goo.gl/9XHLHTpAodsi68Qy7'} target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt className="" style={{ fontSize: '1.5em' }} />
        </Link>
        <Link to={'tel:2411941814'}>
            <FaPhoneAlt className="" style={{ fontSize: '1.5em'}} />
        </Link>
        <Link to={'mailto:gonherfotografiaoficial@gmail.com'}>
            <FaEnvelope className="" style={{ fontSize: '1.5em' }} />
        </Link>
    </div>
    );
}

export default FooterHeader;
