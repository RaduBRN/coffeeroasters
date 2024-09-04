import coffeeItems from "@/public/data/CoffeeCollectionData";
import Image from "next/image";

function CoffeeCollection() {
  const renderedCoffeeItem = coffeeItems.map((item) => (
    <div
      key={item.id}
      className="flex flex-col md:flex-row lg:flex-col items-center md:items-start lg:items-center gap-4 md:gap-10"
    >
      <Image
        src={item.pictureSrc}
        alt={"Picture of type of coffee"}
        width={255}
        height={193}
      />
      <div className="flex flex-col md:w-72 lg:w-64 gap-4 md:gap-6 md:mt-4 lg:mt-0">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center gap-10 md:gap-0">
      <div className="relative font-fraunces font-black text-[40px] md:text-[96px] lg:text-[150px] text-grey lowercase -z-10 bg-gradient-to-t from-white to-black inline-block bg-clip-text text-transparent opacity-30">
        Our collection
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 md:gap-4 text-center md:text-start lg:text-center text-darkgreyblue md:-mt-16 lg:-mt-20 px-6 md:px-0">
        {renderedCoffeeItem}
      </div>
    </div>
  );
}

export default CoffeeCollection;
