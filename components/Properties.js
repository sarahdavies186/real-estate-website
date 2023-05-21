export default function Properties() {
  return (
    <div className="md:pt-32 pt-10 pb-20 px-10 md:px-20 md:pb-40 font-poppins-regular container">
      <div className="pb-10">
        <h2 className="font-rubik-semibold text-3xl xl:text-4xl pt-10 pb-2">
          Best recomendations
        </h2>
        <h3 className="text-gray-500 lg:w-1/2">
          Discover our exclusive selection of the finest one-of-a-kind luxury
          properties architectural masterpieces.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-6 font-poppins-regular">
        <div className="max-w-sm p-4 bg-white border border-gray-200 shadow">
          <a href="#">
            <img className="" src="property-1.png" alt="" />
          </a>
          <div className="pt-3">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Perum griya asri
              </h5>
            </a>
            <p className="mb-3 text-sm text-gray-400">Bogor, Jawa Barat</p>
            <p className="mb-5 text-md text-lgreen font-poppins-regular font-bold">
              $400,000
            </p>
            <a
              href="#contact"
              className="flex justify-center px-20 py-2 text-sm font-medium text-center text-lgreen bg-white border border-lgreen hover:bg-lgreen hover:text-white hover:shadow transition duration-150 ease-in-out"
            >
              Send Enquiry
            </a>
          </div>
        </div>
        <div className="max-w-sm p-4 bg-white border border-gray-200 shadow">
          <a href="#">
            <img className="" src="property-2.png" alt="" />
          </a>
          <div className="pt-3">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Perum kencana asri
              </h5>
            </a>
            <p className="mb-3 text-sm text-gray-400">Bogor, Jawa Barat</p>
            <p className="mb-5 text-md text-lgreen font-poppins-regular font-bold">
              $400,000
            </p>
            <a
              href="#contact"
              className="flex justify-center px-20 py-2 text-sm font-medium text-center text-lgreen bg-white border border-lgreen hover:bg-lgreen hover:text-white hover:shadow transition duration-150 ease-in-out"
            >
              Send Enquiry
            </a>
          </div>
        </div>
        <div className="max-w-sm p-4 bg-white border border-gray-200  shadow">
          <a href="#">
            <img className="" src="property-3.png" alt="" />
          </a>
          <div className="pt-3">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Perum rakjel elit
              </h5>
            </a>
            <p className="mb-3 text-sm text-gray-400">Bogor, Jawa Barat</p>
            <p className="mb-5 text-md text-lgreen font-poppins-regular font-bold">
              $400,000
            </p>
            <a
              href="#contact"
              className="flex justify-center px-20 py-2 text-sm font-medium text-center text-lgreen bg-white border border-lgreen hover:bg-lgreen hover:text-white hover:shadow transition duration-150 ease-in-out"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
