import { RiArrowRightWideFill } from "react-icons/ri";
import { BiCurrentLocation } from "react-icons/bi";

export default function DevStory() {
    return (
        <div className="w-full h-fit gap-2 rounded-xl flex justify-center items-center flex-col">
            <div className="w-fit h-fit gap-1 p-2 bg-gray-100 rounded-xl flex justify-center items-center flex-col">
                <div className="w-full rounded-lg bg-gray-200 p-4 flex justify-center items-center flex-row">
                    <p className="font-SairaCondensed text-center text-red-400"><BiCurrentLocation /></p>
                    <p className="font-SairaCondensed text-center text-red-400">Current Project Status</p>
                </div>
            </div>
            <div className="relative w-full h-fit gap-1 p-2 bg-gray-100 rounded-xl flex justify-center items-center flex-col">
                <div className="w-full h-full rounded-lg bg-gray-200 p-4 flex justify-center items-center flex-row">
                    <div className="w-1/6 h-full bg-gray-100 flex justify-start items-center flex-col gap-4 rounded-xl p-4 text-center">
                        <h3 className="font-Iceberg text-xl border-b border-gray-400">Inspiration</h3>
                        <p className="text-center font-SairaCondensed">Heatseeker PS2,<br/> Ace Combat 7,<br/> War Thunder</p>
                    </div>
                    <RiArrowRightWideFill size={50} color="gray"/>
                    <div className="w-1/6 h-auto bg-gray-100 flex justify-start items-center flex-col gap-4 rounded-xl p-4 text-center px-0">
                        <h3 className="font-Iceberg text-xl border-b border-gray-400">Concept</h3>
                        <p className="text-center font-SairaCondensed">Initial story drafts</p>
                        <p className="w-full text-center font-SairaCondensed">17/11/2024</p>
                    </div>
                    <RiArrowRightWideFill size={50} color="gray"/>
                    <div className="w-1/6 h-full bg-gray-100 flex justify-start items-center flex-col gap-4 rounded-xl p-4 text-center px-0">
                        <h3 className="font-Iceberg text-xl border-b border-gray-400">Early prototyping</h3>
                        <p className="text-center font-SairaCondensed">Experimental states, testing mechanics</p>
                        <p className="w-full text-center font-SairaCondensed">06/12/2024</p>
                    </div>
                    <RiArrowRightWideFill size={50} color="gray"/>
                    <div className="w-1/6 h-full bg-gray-100 flex justify-start items-center flex-col gap-4 rounded-xl p-4 text-center px-0 border-red-400 border-2">
                        <h3 className="font-Iceberg text-xl border-b border-gray-400">Alpha builds</h3>
                        <p className="text-center font-SairaCondensed">Early builds testing cohesion / mission flow</p>
                        <p className="w-full text-center font-SairaCondensed">29/12/2024</p>
                    </div>
                    <RiArrowRightWideFill size={50} color="gray"/>
                    <div className="w-1/6 h-full bg-gray-100 flex justify-start items-center flex-col gap-4 rounded-xl p-4 text-center px-0">
                        <h3 className="font-Iceberg text-xl border-b border-gray-400">Beta builds</h3>
                        <p className="text-center font-SairaCondensed">Fine tuning details, applying upgraded assets</p>
                        <p className="w-full text-center font-SairaCondensed">Soon</p>
                    </div>
                    <RiArrowRightWideFill size={50} color="gray"/>
                    <div className="w-1/6 h-full bg-gray-100 flex justify-start items-center flex-col gap-4 rounded-xl p-4 text-center px-0">
                        <h3 className="font-Iceberg text-xl border-b border-gray-400">Release</h3>
                        <p className="text-center font-SairaCondensed">Releasing the game</p>
                        <p className="w-full text-center font-SairaCondensed">Soon</p>
                    </div>
                </div>
            </div>
        </div>

    )
}