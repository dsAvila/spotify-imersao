import React, { useState } from 'react';
import 'normalize.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import data from './api-artists/artists.json';

// Dados dos artistas, vindos do arquivo JSON.
const apiArtists = data.artists;

function App() {
  // Estados da aplicação:
  // showPlaylists: controla a exibição das playlists (true) ou dos resultados da busca (false).
  // resultSearch: armazena os resultados da busca de artistas.
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [resultSearch, setResultSearch] = useState([]);

  // Função que lida com a busca de artistas.
  const handleSearch = (searchTerm) => {
    // Remove espaços em branco do início e do fim
    const trimmedSearchTerm = searchTerm.trim();

    // Verifica se o termo está vazio ou contém apenas espaços em branco
    if (trimmedSearchTerm === "") {
      // Se o termo estiver vazio, mostra as playlists e limpa os resultados da busca.
      setShowPlaylists(true);
      setResultSearch([]);

      return;
    }

    // Filtra os artistas com base no termo de busca.
    const filteredResults = apiArtists.filter(artist =>
      // Converte o nome do artista e o termo de busca para minúsculas para uma busca case-insensitive.
      artist.name.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
    );

    // Esconde as playlists e exibe os resultados da busca.
    setShowPlaylists(false);
    setResultSearch(filteredResults);
  }

  return (
    <div>
      <Sidebar />
      {/* Componente Header, com a função onSearch para lidar com a busca. */}
      <Header onSearch={handleSearch} />
      {/* Componente Main, que recebe os estados showPlaylists e resultSearch para renderizar o conteúdo correto. */}
      <Main showPlaylists={showPlaylists} resultSearch={resultSearch} />
      <Footer />
    </div>
  );
}

export default App;
