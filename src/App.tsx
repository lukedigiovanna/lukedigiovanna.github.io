import React from 'react';

import { smallProjects } from "./data";
import { SmallProject } from './data';

function App() {
  return (
    <div className="max-w-[900px] mx-auto block">
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
  );
}

export default App;
