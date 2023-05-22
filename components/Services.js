import { ShieldDone } from "react-iconly";
import { Heart } from "react-iconly";
import { Star } from "react-iconly";
import { TicketStar } from "react-iconly";
import { Location } from "react-iconly";
import { Graph } from "react-iconly";

export default function Services() {
  return (
    <div className="bg-grey">
      <div className="px-10 py-20 md:px-20 mx-auto max-w-screen-xl container">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="font-rubik-semibold text-3xl xl:text-4xl">
            Giving you peace of mind
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 font-poppins-regular">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <Heart stroke="bold" primaryColor="#68B99D" filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Comfortable</h3>
            <p className="text-gray-400 text-sm ">
              Enjoy lifestyle amenities designed to provide every homeowners
              modern comfort, a stone's throw away from schools, churches, and
              hospitals.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
              <ShieldDone
                stroke="bold"
                primaryColor="#68B99D"
                filled="#68B99D"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Extra Security
            </h3>
            <p className="text-gray-400 text-sm">
              You can connect with potential tenants without having to share
              your phone number. We also require all users to register to
              validate their legitimacy.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Star stroke="bold" primaryColor="#68B99D" filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Luxury</h3>
            <p className="text-gray-400 text-sm">
              Find out how we provide the highest standard of professional
              property management to give you all the benefits of property.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <TicketStar
                stroke="bold"
                primaryColor="#68B99D"
                filled="#68B99D"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold">Best price</h3>
            <p className="text-gray-400 text-sm">
              Not sure what you should be charging for your property? Let us do
              the numbers for you—contact us today for a free rental appraisal
              on your home.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Location stroke="bold" primaryColor="#68B99D" filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Strategic location</h3>
            <p className="text-gray-400 text-sm">
              Located in the city center close to the shopping center. Very good
              for areas surrounded by international education centers, start-up
              office centers.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Graph stroke="bold" primaryColor="#68B99D" filled="#68B99D" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Efficient</h3>
            <p className="text-gray-400 text-sm">
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
