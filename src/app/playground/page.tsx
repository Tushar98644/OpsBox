import { WebEditor } from "@/components/editor";

const Playground = () => {
    return (
        <div className="root-div grid grid-cols-2">
            <div className="editor">
                <WebEditor />
            </div>
            <div className="utility">
                <WebEditor />
            </div>
        </div>
    );
}

export default Playground;