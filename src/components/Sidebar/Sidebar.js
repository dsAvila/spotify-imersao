import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="Logo" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <FontAwesomeIcon className='fa-home' icon={faHome} />
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FontAwesomeIcon className='fa-search' icon={faSearch} />
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <FontAwesomeIcon className='fa-book' icon={faBook} />
                        <span>Sua Biblioteca</span>
                    </button>
                    <FontAwesomeIcon className='fa-plus' icon={faPlus} />
                </div>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <section className="section-podcast">
                    <div className="section-podcast__content">
                        <span className="text title">Que tal seguir um podcast novo?</span>
                        <span className="text subtitle">Avisaremos você sobre novos episódios.</span>
                        <button className="section-podcast__button">
                            <span>Explore podcasts</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;