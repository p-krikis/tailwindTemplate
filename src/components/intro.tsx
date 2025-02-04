export default function Intro() {
    return (
        <div className="relative w-screen h-screen">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 blur">
                <video autoPlay muted loop className="object-cover w-full h-full">
                    <source src="https://cdn.pixabay.com/video/2022/02/11/107430-678258659_large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Content */}
            <div className="w-full h-full flex justify-center items-center flex-col gap-4">
                <p className="font-Iceberg text-green-400 text-9xl">Ascend</p>
                <div className="w-1/2 h-0.5 bg-gray-500"/>
                <div className="flex flex-row items-center gap-2">
                    <p className="font-Iceberg text-white text-4xl">Operation: </p>
                    <p className="font-Iceberg text-red-500 text-4xl">Skyfall</p>
                </div>
            </div>
        </div>
    );
}