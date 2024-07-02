import { TProject } from "./project.interface";
import { Project } from "./project.model";

export const createProject = async (projectData: TProject) => {
  const result = Project.create(projectData);

return result

};
export const getProjects = async () => {
  const result = Project.find()

return result

};
export const getSingleProject = async (id : string) => {
  const result = Project.findById({_id : id})

return result

};


const updateProjectInDb = async (id: string, projectData: Partial<TProject>) => {
  const { description, technologies, links, ...projectRemainingData } = projectData;

  const updateOps: any = { ...projectRemainingData }; 

  if (description) {
    updateOps.description = description;
  }

  if (technologies && technologies.length > 0) {
    updateOps.technologies = technologies;
  }

  if (links) {
    if (links.frontEnd) updateOps['links.frontEnd'] = links.frontEnd;
    if (links.backEnd) updateOps['links.backEnd'] = links.backEnd;
    if (links.liveLink) updateOps['links.liveLink'] = links.liveLink;
  }

  const updatedProject = await Project.findByIdAndUpdate(
    id,
    { $set: updateOps },
    { new: true, runValidators: true }
  );

  
  return updatedProject;
};

export const ProjectServices = {createProject,getProjects,getSingleProject,updateProjectInDb}