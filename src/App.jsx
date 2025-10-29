import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import MBHubLanding from './pages/MBHubLanding';
import TokenHubPage from './pages/TokenHubPage';
import AuthPage from './pages/AuthPage';
import TokenizationPage from './pages/TokenizationPage';
import RWATokensPage from './pages/RWATokensPage';
import DigitalAssetsPage from "./pages/DigitalAssetsPage";

function NotFound() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">404 — страница не найдена</h2>
      <p className="text-gray-600">
        Проверь URL или вернись на <a href="/" className="underline" style={{ color: 'var(--primary)' }}>главную</a>.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MBHubLanding />} />
        <Route path="/tokenhub" element={<TokenHubPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/tokenization" element={<TokenizationPage />} />
        <Route path="/rwa" element={<RWATokensPage />} />
        <Route path="/cfa" element={<DigitalAssetsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
