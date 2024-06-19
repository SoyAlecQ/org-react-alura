import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className="redes">
                <a href="http://www.facebook.com/">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com/">
                    <img src="/img/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src="/img/instagram.png" alt="Instagram" />
                </a>
            </div>
            <img src="/img/logo.png" alt="Org" />
            <strong>Desarrollador por Byron</strong>
        </footer>
    )
}

export default Footer