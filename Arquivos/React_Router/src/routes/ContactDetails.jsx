import { Link, useParams } from "react-router-dom";

const ContactDetails = () => {
    const {id} = useParams

  return (
    <>
        {/* 5 - nested routes */}
        <p><Link to="/contact/1">Forma de contato 1</Link></p>
        <p><Link to="/contact/2">Forma de contato 2</Link></p>
        <p><Link to="/contact/3">Forma de contato 3</Link></p>
    </>
  )
}

export default ContactDetails