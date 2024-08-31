import { ProjectCard } from "@/components/dashboard/project/project-card";
import Layout from "@/components/Layout/layout";

const ProjectList = () => {
    return (
        <Layout>
            <div className="flex p-16">
                <ProjectCard />
            </div>
        </Layout>
    );
}

export default ProjectList;