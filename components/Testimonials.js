export default function Testimonials() {
  return (
    <div className="md:pt-10 pl-20 pr-20 pb-20 font-poppins-regular container hidden md:block">
      <div className="pb-10">
        <h2 className="font-rubik-semibold text-3xl xl:text-4xl pt-10 pb-2">
          What are our customers saying?
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-6 font-poppins-regular lg:px-20">
        <div className="w-1/2 p-4 bg-white border border-gray-200 shadow">
          <p className="font-poppins-regular text-gray-300 text-8xl">❛</p>
          <div>
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                It proved to be exactly the kind of home we wanted.
              </h5>
            </a>
            <p className="mb-3 text-sm text-gray-400">
              We wish to express our thanks for your hard work in finding us a
              temporary home, which proved to be exactly what we wanted.
            </p>
            <p className="mb-5 text-md text-lgreen font-poppins-regular font-bold">
              Jaydon Aminoff
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4 bg-white border border-gray-200 shadow">
          <p className="font-poppins-regular text-gray-300 text-8xl">❛</p>
          <div className="pt-1">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
                Nobody knows Seminyak and the surrounding area better than David.
              </h5>
            </a>
            <p className="mb-3 text-sm text-gray-400">
              My wife and I had a dream of downsizing from our house in Sydney into a small villa closer to Bali where we can relax and spend time in the sun.
            </p>
            <p className="mb-5 text-md text-lgreen font-poppins-regular font-bold">
              Alfredo Donin
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4 bg-white border border-gray-200 shadow">
          <p className="font-poppins-regular text-gray-300 text-8xl">❛</p>
          <div className="pt-1">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
              He keeps his client’s best interests in sharp focus
              </h5>
            </a>
            <p className="mb-3 text-sm text-gray-400">
              After working with David to sell my home in 2013, I was convinced
              that he’s the only realtor I’ll ever need. Since then, I’ve bought
              two properties and sold one.
            </p>
            <p className="mb-5 text-md text-lgreen font-poppins-regular font-bold">
              Makenna Korsgaard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
