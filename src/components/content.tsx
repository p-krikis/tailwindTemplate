import DevStory from "./content/dev-story";
import Story from "./content/story";
import Viewer3D from "./content/viewer3d";

export default function Content() {
    return (
        <div className="relative w-full h-screen items-start flex justify-center flex-col gap-2 p-8 bg-gray-200">
            <div className="flex h-full flex-row gap-4">
                <Story />
                <Viewer3D />
            </div>
            
           <DevStory />
        </div>
    );
}