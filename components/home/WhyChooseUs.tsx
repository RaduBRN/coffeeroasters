import IconCoffeeBean from "../icons/IconCoffeeBean";
import IconGift from "../icons/IconGift";
import IconTruck from "../icons/IconTruck";

function WhyChooseUs() {
  return (
    <div className="lg:text-center relative">
      <div className="absolute inset-0 bg-[#2C343E] -z-10 h-[65%] lg:h-[75%] rounded-lg" />
      <div className="w-full flex justify-center px-5 md:px-0">
        <div className="flex flex-col items-center max-w-[540px] h-[461px] md:h-[577px] gap-6 pt-16 lg:pt-20">
          <h2 className="text-lightcream">Why choose us?</h2>
          <p className="text-lightcream/80 text-center">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-lightcream -mt-40 md:-mt-60 lg:px-0 md:px-10 px-5">
          <div className="flex flex-col md:flex-row lg:flex-col gap-14 bg-darkcyan items-center justify-center md:w-full lg:max-w-[350px] p-10 lg:p-0 lg:h-96 rounded-lg">
            <div className="h-[72px]">
              <IconCoffeeBean />
            </div>
            <div className="flex flex-col text-center md:text-left lg:text-center gap-6">
              <h4>Best Quality</h4>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-14 bg-darkcyan items-center justify-center md:w-full lg:max-w-[350px] p-10 lg:p-0 lg:h-96 rounded-lg">
            <div className="h-[72px]">
              <IconGift />
            </div>
            <div className="flex flex-col text-center md:text-left lg:text-center gap-6">
              <h4>Exclusive benefits</h4>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-14 bg-darkcyan items-center justify-center md:w-full lg:max-w-[350px] p-10 lg:p-0 lg:h-96 rounded-lg">
            <div className="h-[72px]">
              <IconTruck />
            </div>
            <div className="flex flex-col text-center md:text-left lg:text-center gap-6">
              <h4>Free shipping</h4>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
