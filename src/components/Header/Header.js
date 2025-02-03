import React, { useState } from "react";
import './Header.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import search from '../../assets/icons/search.png';

const Header = ({ onSearch }) => {
    // Estado para armazenar o termo de busca.
    const [searchTerm, setSearchTerm] = useState("");

    // Função que lida com as mudanças no input de busca.
    const handleInputChange = (event) => {
        // Atualiza o estado searchTerm com o valor do input.
        setSearchTerm(event.target.value);
        // Chama a função onSearch (passada como prop) com o valor do input.
        // Essa função irá filtrar os resultados da busca no componente pai.
        onSearch(event.target.value);
    };

    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />
                </button>
            </div>

            <div className="header__search">
                <img src={search} alt="Buscar" />
                <input
                    id="search-input"
                    maxLength="800"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                    // Valor do input controlado pelo estado searchTerm.
                    value={searchTerm}
                    // Chama handleInputChange quando o valor do input muda.
                    onChange={handleInputChange}
                />
            </div>

            <div className="header__login">
                <button className="subscribe">Inscrever-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}

export default Header;