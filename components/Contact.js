export default function Contact() {
  return (
    <section id="contact" class="bg-white dark:bg-gray-900 container font-poppins-regular">
      <div class="py-10 px-10 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-rubik-semibold text-center text-gray-900">
          Contact Us
        </h2>
        <p class="mb-8 font-light text-center text-gray-500 text-md">
          Are you ready to rent or buy? Want to find out more about a property? Send us a message and we will get back to you soon.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 d-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-lgreen text-white rounded-lg hover:bg-transparent hover:text-lgreen hover:border-lgreen hover:border transition duration-150 ease-in-out"
            >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
