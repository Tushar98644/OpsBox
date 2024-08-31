import { ProjectForm } from "@/components/dashboard/project/project-form";
import Layout from "@/components/Layout/layout";

const Project = () => {
    return (
        <Layout>
            <div className="flex h-screen items-center justify-center">
                <ProjectForm />
            </div>
        </Layout>
    );
}

export default Project;