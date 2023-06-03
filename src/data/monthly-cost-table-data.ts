import {
  FireIcon,
  BuildingStorefrontIcon,
  TrashIcon,
  CurrencyEuroIcon,
  BeakerIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";


interface CostData {
  img: any;
  color: string;
  name: string;
  qty: string;
  price: string;
  total: string;
}

export const monthlyCostTableData : CostData[]  = [
  {
    img: FireIcon,
    name: "Centralne Ogrzewanie",
    color: "text-red-500",
    qty: "45 m2",
    price: "5.56 zł",
    total: "250,20 zł",
  },
  {
    img: BuildingStorefrontIcon,
    color: "text-grey-500",
    name: "Fundusz Remontowy",
    qty: "45 m2",
    price: "5.56 zł",
    total: "250,20 zł",
  },
  {
    img: TrashIcon,
    color: "text-grey-500",
    name: "Odpady Komunalne",
    qty: "45 m2",
    price: "5.56 zł",
    total: "250,20 zł",
  },
  {
    img: CurrencyEuroIcon,
    color: "text-green-500",
    name: "Zaliczka na części wspólne",
    qty: "45 m2",
    price: "5.56 zł",
    total: "250,20 zł",
  },
  {
    img: BeakerIcon,
    color: "text-blue-500",
    name: "Zimna woda i ścieki",
    qty: "45 m2",
    price: "5.56 zł",
    total: "250,20 zł",
  }
];

export default monthlyCostTableData;
