
const Footer = () => {
    return (
        <footer className="bg-dark mt-5">
            <h3 className="text-center mt-2 text-muted">Contact</h3>
            <div className="d-flex text-center justify-content-center my-4">
                <a  className="text-decoration-none  d-flex flex-column text-white" 
                    href="https://www.instagram.com" 
                    rel="noreferrer"
                    target="_blank"
                >
                    <i className="fab fa-instagram text-white display-6"></i>
                    <span className="h6 mt-2 text-muted">Instagram</span>
                </a>
                <a  className="text-decoration-none mx-4 d-flex flex-column text-white " 
                    href="https://github.com/GuserHub23" 
                    rel="noreferrer"
                    target="_blank"
                >
                    <i className="fab fa-github text-white display-6"></i>
                    <span className="h6 mt-2 text-muted">GitHub</span>
                </a>
                <a  className="text-decoration-none  d-flex flex-column text-white" 
                    href="https://www.linkedin.com/in/juan-pablo-g%C3%B3mez-837a3321a/" 
                    rel="noreferrer"
                    target="_blank"
                >
                    <i className="fab fa-linkedin text-white display-6"></i>
                    <span className="h6 mt-2 text-muted">LinkedIn</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer;