import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Страницы
import Landing from './pages/Landing';
import TokenHub from './pages/TokenHub';
import Tariffs from './pages/Tariffs';
import LoginRegister from './pages/LoginRegister';
import Tokenization from './pages/Tokenization';
import RWATokens from './pages/RWATokens';

function NotFound() {
  return <div className="container" style={{padding:'4rem 1rem'}}>404 — страница не найдена</div>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/tokenhub" element={<TokenHub />} />
        <Route path="/tariffs" element={<Tariffs />} />
        <Route path="/auth" element={<LoginRegister />} />
        <Route path="/tokenization" element={<Tokenization />} />
        <Route path="/rwa-tokens" element={<RWATokens />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
