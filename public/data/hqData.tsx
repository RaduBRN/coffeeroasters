import IconUK from "@/components/icons/IconUK";
import IconCanada from "@/components/icons/IconCanada";
import IconAustralia from "@/components/icons/IconAustralia";

interface HQDataItem {
  id: number;
  country: string;
  countryIcon: JSX.Element;
  street: string;
  city: string;
  region: string;
  phone: string;
}

const hqData: HQDataItem[] = [
  {
    id: 0o1,
    country: "United Kingdom",
    countryIcon: <IconUK />,
    street: "68 Asfordby Rd",
    city: "Alcaston",
    region: "SY6 1YA",
    phone: "+44 1241 918425",
  },
  {
    id: 0o2,
    country: "Canada",
    countryIcon: <IconCanada />,
    street: "1528 Eglinton Avenue",
    city: "Toronto",
    region: "Ontario M4P 1A6",
    phone: "+1 416 485 2997",
  },
  {
    id: 0o3,
    country: "Australia",
    countryIcon: <IconAustralia />,
    street: "36 Swanston Street",
    city: "Kewell",
    region: "Victoria",
    phone: "+61 4 9928 3629",
  },
];

export default hqData;
