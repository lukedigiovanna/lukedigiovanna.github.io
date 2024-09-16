interface SmallProject {
    title: string;
    description: string;
    year: number;
    link?: string;
}
  
const smallProjects: SmallProject[] = [
    {
      title: "Ballot Pulse",
      description: "Interactive visualization of historical presidential election results and relevant demographic data",
      year: 2024,
      link: "https://lukedigiovanna.github.io/ballot-pulse",
    },
    {
      title: "Data Type Inspector",
      description: "Explore and manipulate the binary representations of primitive data types",
      year: 2024,
      link: "https://lukedigiovanna.github.io/data-type-inspector"
    }
]

export type { SmallProject };
export { smallProjects };