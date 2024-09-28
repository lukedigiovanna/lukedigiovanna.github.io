import React from 'react';

import { smallProjects } from "./data";
import { SmallProject } from './data';

import { Canvas } from './Canvas';

import engine from "./engine/index";

function App() {
  return (
    <>
      <div className="max-w-[900px] mx-auto block z-10">
        <h1 className="text-3xl font-bold">
          Luke DiGiovanna
        </h1>
        <p>
          Here my smaller projects
        </p>
        <ul>
          {smallProjects.map((project: SmallProject) => 
            <li>
              {project.title}: {project.description}
            </li>
          )}
        </ul>
      </div>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <p className="my-8">hi</p>
      <Canvas render={engine.render.bind(engine)}/>
    </>
  );
}

export default App;
