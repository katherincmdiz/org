import './Footer.css'

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Rodapé.png)"}}>
        <div className="redes">

            <a href="https://github.com/katherincmdiz">
                <img src="img/github.png" alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/katherin-cm-a91346233">
            <img src="img/linkedin.png" alt="linkedin"/>
            </a>
            <a href="https://www.instagram.com/kat_e2015?igsh=MWI6NjFpazIIdGMwYw==">
            <img src="img/instagram.png" alt="instagram"/>
            </a>
        </div>
        <img src="img/Logo.png" alt="org"/>
        <strong>Desarrollado por Katherin Condori</strong>
    </footer>
}

export default Footer

