import { ProjectCard } from "@/components/dashboard/project/project-card";
import Layout from "@/components/Layout/layout";

const ProjectList = () => {
    return (
        <Layout>
            <div className="p-12">
                <ProjectCard />
            </div>
        </Layout>
    );
}

export default ProjectList;