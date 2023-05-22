import { Star } from "react-iconly";

export default function () {
  return (
    <div className="px-20 pb-10 container">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="">
          <div className="relative left-20 top-20 bg-white w-36 pt-8 pb-8 shadow text-center">
            <h3 className="text-6xl">4.8</h3>
            <div className="flex justify-center">
              <Star primaryColor="#68B99D" filled="#68B99D" size="small" />
              <Star primaryColor="#68B99D" filled="#68B99D" size="small" />
              <Star primaryColor="#68B99D" filled="#68B99D" size="small" />
              <Star primaryColor="#68B99D" filled="#68B99D" size="small" />
              <Star primaryColor="#68B99D" filled="#68B99D" size="small" />
            </div>
            <h3>Trusted on</h3>
            <h3>500+ reviews</h3>
          </div>
          <img className="" src="about.png" />
        </div>
        <div className="place-self-center md:pt-20">
          <h2 className="font-rubik-semibold text-center md:text-left text-3xl xl:text-4xl pb-4">
            How much is your property worth now?{" "}
          </h2>
          <p className="font-poppins-regular text-center md:text-left text-gray-500">
            We have built our reputation as true local area experts. We have
            gained more knowledge about buyer interests, our neighborhood and
            the market than any other brand because we live locally and work for
            local people.
          </p>
        </div>
      </div>
    </div>
  );
}
