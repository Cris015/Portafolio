import "../styles/Home.css";
import "../styles/Header.css";
import "../styles/About.css";
import "../styles/Proyectos.css";
import "../styles/Formaciones.css";
import "../styles/Formulario.css";
import "../styles/Footer.css";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import miFoto from "../img/miFoto.jpeg";
import encriptador from "../img/Encriptador.png";
import play from "../img/Arula-play.png";
import { motion } from "framer-motion";
import Header from "./Header";

const Home = () =>{
    return(
        <div className="app">

            {/* Cabecera */}
            {/* <header className="header">
                <h1>PORTAFOLIO</h1>
                <nav>
                <a href="#inicio">Inicio</a> 
                <a href="#sobremi">Sobre mí</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#formaciones">Estudios</a>
                <a href="#contacto">Contacto</a>
                </nav>
            </header> */}
            <Header />

            
            {/* Sobre mi */}
            <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="about"
            >
            <section className="about" id="sobremi">
                <div class="presentacion__contenido">
                    <h1>¡Hola! Soy <strong>Cristian Castillo</strong></h1>
                    <p>
                         Desarrollador web en formación, con pasión por crear espacios web modernos y funcionales con conocimientos en:
                    </p>
                    <div className="tecnologias">
                        <FaHtml5 color="#e34c26" size={50} />
                        <FaCss3Alt color="#264de4" size={50} />
                        <FaReact color="#61DBFB" size={50} />
                        <FaGithub color="#CDCDCD" size={50} />
                    </div>
                    <div className="presentacion__enlaces">
                        <h2 className="presentacion__enlaces__subtitulo">Accede a mis redes:</h2>
                        <a href="https://github.com/Cris015" className="boton"><i className="fa-brands fa-github"></i>GitHub</a>
                        <a href="https://www.linkedin.com/in/cristian-castillo-777b69220" className="boton"><i className="fa-brands fa-linkedin-in"></i>Linkedin</a>
                        {/* <a href="#" className="boton"><i className="fa-brands fa-instagram"></i>Instagram</a> */}
                    </div>
                </div>
                <img className="presentacion__imagen" src={miFoto} alt="Foto de Ana Garcia trabajando" />
            </section>
            </motion.section>

            {/* Formaciones */}
            <section className="formaciones" id="formaciones">
                <h2>Estudios</h2>
                <div className="formaciones__contenido">
                    <ul>
                        <li>CSS: Flexbox y layouts responsivos - Alura Cursos <a href="https://app.aluracursos.com/certificate/ccpcastillo015/css-flexbox-layouts-responsivos">con la certificacion</a></li>
                        <li>Git y GitHub: controle y comparta su código - Alura Cursos <a href="https://app.aluracursos.com/user/ccpcastillo015/course/git-github-control-version/certificate">con la certificacion</a></li>
                        <li>Git y GitHub: repositorio, commit y versionese - Alura Cursos <a href="https://app.aluracursos.com/user/ccpcastillo015/course/git-github-repositorio-commit-versiones/certificate">con la certificacion</a></li>
                        {/* <li><a href="./Formaciones">Ver mas...</a></li> */}
                    </ul>
                </div>
            </section>

            {/* Proyectos */}
            <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="projects"
            >
            <section className="projects" id="proyectos">
                <h2>Proyectos</h2>
                <div className="project-list">
                    <div className="project-card">
                        <img src={encriptador} alt="Proyecto 1" />
                        <h3>Encriptador - Desencriptador</h3>
                        <p>HTML, CSS, JavaScript</p>
                        <div className="card-buttons">
                        <a href="https://cris015.github.io/Challenge-Oracle-ONE-Encriptadora/">Ver Demo</a>
                        <a href="https://github.com/Cris015/Challenge-Oracle-ONE-Encriptadora">Ver Repositorio</a>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={play} alt="Proyecto 2" />
                        <h3>Arula Play</h3>
                        <p>CSS FLEXBOX</p>
                        <div className="card-buttons">
                        <a href="https://arula-play.vercel.app/">Ver Demo</a>
                        <a href="https://github.com/Cris015/Arula-Play">Ver Repositorio</a>
                        </div>
                    </div>
                    {/* <div className="project-card">
                        <img src={play} alt="Proyecto 2" />
                        <h3>Arula Play</h3>
                        <p>CSS FLEXBOX</p>
                        <div className="card-buttons">
                        <a href="https://arula-play.vercel.app/">Ver Demo</a>
                        <a href="https://github.com/Cris015/Arula-Play">Ver Repositorio</a>
                        </div>
                    </div> */}
                </div>
            </section>
            </motion.section>

            

            {/* Formulario */}
            <section className="contacto" id="contacto">
                <h2>Contáctame</h2>
                <form>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    // value={formData.nombre}
                    // onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Tu correo"
                    // value={formData.correo}
                    // onChange={handleChange}
                    required
                />
                <textarea
                    name="mensaje"
                    placeholder="Tu mensaje"
                    // value={formData.mensaje}
                    // onChange={handleChange}
                    required
                ></textarea>
                
                  {/* {!isValid && <p className="error">Por favor, completa todos los campos correctamente.</p>}
        
                {isLoading ? (
                    <button disabled>Enviando...</button>
                ) : (  */}
                    <button type="submit">Enviar mensaje</button>
                 {/* )}  */}
                </form>
            </section> 

            {/* Pie de pagina */}
            <footer>
                <p>&copy; {new Date().getFullYear()} Diseñado y desarrollado por Cristian Castillo.</p>
            </footer>
        </div>
    )
}

export default Home;