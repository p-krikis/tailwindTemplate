import DevStory from "./content/dev-story";
import Gallery from "./content/gallery";
import Story from "./content/story";
import Viewer3D from "./content/viewer3d";

export default function Content() {
    return (
        <div className="relative w-full h-fit items-start flex justify-center flex-col gap-2 px-24 ray-200 py-4">
            <div className="flex h-fit flex-row gap-4">
                <Story />
                <Viewer3D />
            </div>
            <DevStory />
            <Gallery />
        </div>
    );
}