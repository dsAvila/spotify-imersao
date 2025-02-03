import React from 'react';
import './Main.css';
import Playlist1 from '../../assets/playlist/1.jpeg';
import Playlist2 from '../../assets/playlist/2.png';
import Playlist3 from '../../assets/playlist/3.jpeg';
import Playlist4 from '../../assets/playlist/4.jpeg';
import Playlist5 from '../../assets/playlist/5.jpeg';
import Playlist6 from '../../assets/playlist/6.jpeg';
import Playlist7 from '../../assets/playlist/7.jpeg';
import Playlist8 from '../../assets/playlist/8.jpeg';
import Playlist9 from '../../assets/playlist/9.jpeg';
import Playlist10 from '../../assets/playlist/10.jpeg';
import Playlist11 from '../../assets/playlist/11.jpeg';
import Playlist12 from '../../assets/playlist/12.jpeg';
import Playlist13 from '../../assets/playlist/13.jpeg';
import Playlist14 from '../../assets/playlist/14.jpeg';
import Playlist15 from '../../assets/playlist/15.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Main = ({ showPlaylists, resultSearch }) => {
    return (
        <div className="playlist-container">
            {/* Se showPlaylists for true, renderiza a seção de playlists */}
            {showPlaylists ? (
                <div id="result-playlists">
                    <div className="playlist">
                        <h1 id="greeting">Boas vindas</h1>
                        <h2 className="session">Navegar por todas as seções</h2>
                    </div>
                    <div className="offer__scroll-container">
                        <div className="offer__list">
                            <section className="offer__list-item">
                                <a href="" className="cards">
                                    <div className="cards card1">
                                        <img src={Playlist1} alt="" />
                                        <span>Boas festas</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card2">
                                        <img src={Playlist2} alt="" />
                                        <span>Feitos para você</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card3">
                                        <img src={Playlist3} alt="" />
                                        <span>Lançamentos</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card4">
                                        <img src={Playlist4} alt="" />
                                        <span>Creators</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card5">
                                        <img src={Playlist5} alt="" />
                                        <span>Para treinar</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card6">
                                        <img src={Playlist6} alt="" />
                                        <span>Podcasts</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card7">
                                        <img src={Playlist7} alt="" />
                                        <span>Sertanejo</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card8">
                                        <img src={Playlist8} alt="" />
                                        <span>Samba e pagode</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card9">
                                        <img src={Playlist9} alt="" />
                                        <span>Funk</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card10">
                                        <img src={Playlist10} alt="" />
                                        <span>MPB</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card11">
                                        <img src={Playlist11} alt="" />
                                        <span>Rock</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card12">
                                        <img src={Playlist12} alt="" />
                                        <span>Hip Hop</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card13">
                                        <img src={Playlist13} alt="" />
                                        <span>Indie</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card14">
                                        <img src={Playlist14} alt="" />
                                        <span>Relax</span>
                                    </div>
                                </a>
                                <a href="" className="cards">
                                    <div className="cards card15">
                                        <img src={Playlist15} alt="" />
                                        <span>Música Latina</span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            ) : (
                // Se showPlaylists for false, renderiza a seção de resultados da busca
                <div id="result-artist">
                    <div className="scroll__grid-container">
                        <div className="grid-container">
                            {/* Mapeia o array resultSearch e renderiza os cards de artista */}
                            {resultSearch.map(artist => (
                                <div className="artist-card" key={artist.id}>
                                    <div className="card-img">
                                        <img src={artist.urlImg} id="artist-img" className="artist-img" alt={artist.name} />
                                        <div className="play">
                                            <FontAwesomeIcon className="fa-play" icon={faPlay} />
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <span className="artist-name" id="artist-name">{artist.name}</span>
                                        <span className="artist-categorie">Artista</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Main;