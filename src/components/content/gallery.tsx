export default function Gallery() {
    return (
        <div className="container mx-auto">
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[calc(100vh-2rem)] max-h-[800px]">
            <div className="col-span-1 row-span-1">
              <img
                src="https://picsum.photos/400/400?random=1"
                alt="Small image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src="https://picsum.photos/400/400?random=2"
                alt="Small image 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src="https://picsum.photos/800/800?random=3"
                alt="Large image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src="https://picsum.photos/800/800?random=4"
                alt="Large image 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src="https://picsum.photos/400/400?random=5"
                alt="Small image 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src="https://picsum.photos/400/400?random=6"
                alt="Small image 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )
}