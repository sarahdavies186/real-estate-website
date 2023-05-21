export default function HeroSection() {
  return (
    <div className="hero-section bg-grey font-poppins-regular">
      <div className="container bg-grey dark:bg-gray-900 px-10 md:px-20 py-12">
        <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-rubik-semibold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Let's hunt for your dream residence
            </h1>
            <p className="max-w-2xl mb-6 font-light text-md text-gray-500 lg:mb-8 dark:text-gray-400">
              Explore our range of beautiful properties with the addition of
              separate accommodation suitable for you.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-lgreen text-white rounded-lg hover:bg-transparent hover:text-lgreen hover:border-lgreen hover:border transition duration-150 ease-in-out"
            >
              Properties
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-lgreen rounded-lg hover:bg-lgreen hover:text-white transition duration-150 ease-in-out"
            >
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex transform -scale-x-100">
            <img src="house.jpg" alt="mockup" />
          </div>
        </div>
      </div>
    </div>
  );
}
