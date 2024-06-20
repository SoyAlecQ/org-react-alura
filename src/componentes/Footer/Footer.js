import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className="redes">
                <a href="https://github.com/SoyAlecQ" target="_blank" rel="noopener noreferrer">
                    <img src="/img/github.png" alt="Github" />
                </a>
                <a href="https://x.com/SoyAlecQ" target="_blank" rel="noopener noreferrer">
                    <img src="/img/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/byronmontenegro" target="_blank" rel="noopener noreferrer">
                    <img src="/img/linkedin.png" alt="Linkedin" />
                </a>
            </div>
            <img src="/img/logo.png" alt="Org" />
            <strong>Desarrollado con &#10084;&#65039; por Byron</strong>
        </footer>
    )
}

export default Footer