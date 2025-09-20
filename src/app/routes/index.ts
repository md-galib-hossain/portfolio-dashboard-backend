import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ProjectRoutes } from "../modules/project/project.route";
import { BlogPostRoutes } from "../modules/blog/blog.route";
import { SkillRoutes } from "../modules/skill/skill.route";
import { EducationRoutes } from "../modules/educationprofile/education.route";
import { SocialProfileRoutes } from "../modules/socialProfile/social.route";


const router = Router()

const moduleRoutes = [
 
    {
        path : '/user',
        route : UserRoutes
    },
    {
        path : '/projects',
        route : ProjectRoutes
    },
    {
        path : '/blogs',
        route : BlogPostRoutes
    },
    {
        path : '/skills',
        route : SkillRoutes
    },
    {
        path : '/educations',
        route : EducationRoutes
    },
    {
        path : '/socials',
        route : SocialProfileRoutes
    },
  
 
   
]

moduleRoutes.forEach(route=> router.use(route.path,route.route))


export default router