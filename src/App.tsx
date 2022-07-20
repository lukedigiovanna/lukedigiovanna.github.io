
import React from 'react';
import { Canvas } from './components/Canvas';
import pageManager, { Page } from './pages/pagemanager';
import { BrowserRouter, Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import core from './core';

function App() {
  const { title } = useParams();

  const [page, setPage] = React.useState<Page>(pageManager.currentPage);

  React.useEffect(() => {
    core.position = {
      x: Number(window.localStorage.getItem('pos-x')) || 0,
      y: Number(window.localStorage.getItem('pos-y')) || 0,
    }
    core.scale = Number(window.localStorage.getItem('scale')) || 1;
    pageManager.goto(title as string);
    setPage(pageManager.currentPage);
  }, [title]);

  return (
    <>
      <Canvas />
      {
        page?.element
      }
    </>
  );
}

export default App;
