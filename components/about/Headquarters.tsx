import hqData from "@/public/data/hqData";

function Headquarters() {
  return (
    <div className="flex flex-col gap-20 pb-24 lg:px-24 text-center md:text-start">
      <h4 className="text-grey">Our headquarters</h4>
      <div className="flex flex-col md:flex-row lg:grid grid-cols-3 gap-20">
        {hqData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center md:items-start gap-6"
          >
            <div className="min-h-[50px]">{item.countryIcon}</div>
            <h3 className="pt-4">{item.country}</h3>
            <div className="flex flex-col gap-1">
              <p>{item.street}</p>
              <p>{item.city}</p>
              <p>{item.region}</p>
              <p>{item.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Headquarters;
