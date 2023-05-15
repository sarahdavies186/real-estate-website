import { ShieldDone } from 'react-iconly'
import { Heart } from 'react-iconly'
import { Star } from 'react-iconly'
import { TicketStar } from 'react-iconly'
import { Location } from 'react-iconly'
import { Graph } from 'react-iconly'

export default function Services() {
  return (
    <div className="bg-grey dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 container">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="font-rubik-semibold  md:text-3xl xl:text-4xl">
            Giving you peace of mind
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <Heart stroke='bold' primaryColor='#68B99D' filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Comfortable
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Enjoy lifestyle amenities designed to provide every homeowners
              modern comfort, a stone's throw away from schools, churches, and
              hospitals.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <ShieldDone stroke='bold' primaryColor='#68B99D' filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Extra Security
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              You can connect with potential tenants without having to share
              your phone number. We also require all users to register to
              validate their legitimacy.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <Star stroke='bold' primaryColor='#68B99D' filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Luxury</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Find out how we provide the highest standard of professional
              property management to give you all the benefits of property.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <TicketStar stroke='bold' primaryColor='#68B99D' filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Best price
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Not sure what you should be charging for your property? Let us do
              the numbers for you—contact us today for a free rental appraisal
              on your home.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <Location stroke='bold' primaryColor='#68B99D' filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Strategic location
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Located in the city center close to the shopping center. Very good
              for areas surrounded by international education centers, start-up
              office centers.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <Graph stroke='bold' primaryColor='#68B99D' filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Efficient
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Schedule visits to multiple properties at once in one day without
              having to call them one by one. Check everything and find the best
              properties for rent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
