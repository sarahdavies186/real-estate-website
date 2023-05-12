export default function HeroSection() {
  return (
    <div className="hero-section bg-grey font-poppins-regular">
      <section className="bg-grey dark:bg-gray-900 pt-12 pl-20 pr-20 pb-12">
        <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-rubik-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Let's hunt for your dream residence
            </h1>
            <p className="max-w-2xl mb-6 font-light text-md text-gray-500 lg:mb-8 dark:text-gray-400">
              Explore our range of beautiful properties with the addition of
              separate accommodation suitable for you.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex transform -scale-x-100">
            <img src="house.jpg" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
}
