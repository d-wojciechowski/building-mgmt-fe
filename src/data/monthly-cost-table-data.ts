import {BeakerIcon, BuildingStorefrontIcon, CurrencyEuroIcon, FireIcon, TrashIcon} from "@heroicons/react/20/solid";


export interface CostData {
  entries: CostEntry[];
  currency: string;
}

export interface Image {
  icon: any;
  color: string;
}

export interface CostEntry {
  img: Image;
  name: string;
  quantity: number;
  unit: string;
  price: number;
}

export const monthlyCostTableData: CostData = {
  currency: "PLN",
  entries: [
    {
      img: {
        icon: FireIcon,
        color: "text-red-500",
      },
      name: "Centralne Ogrzewanie",
      quantity: 45,
      unit: "m2",
      price: 5.56,
    }
    ,
    {
      img: {
        icon: BuildingStorefrontIcon,
        color: "text-grey-500",
      },
      name: "Fundusz Remontowy",
      quantity: 45,
      unit: "m2",
      price: 2.50,
    },
    {
      img: {
        icon: TrashIcon,
        color: "text-grey-500",
      },
      name: "Odpady Komunalne",
      quantity: 2,
      unit: "os",
      price: 19,
    },
    {
      img: {
        icon: CurrencyEuroIcon,
        color: "text-green-500",
      },
      name: "Zaliczka na części wspólne",
      quantity: 45,
      unit: "m2",
      price: 1.55,
    },
    {
      img: {
        icon: BeakerIcon,
        color: "text-blue-500",
      },
      name: "Zimna woda i ścieki",
      quantity: 6,
      unit: "m3",
      price: 11.31,
    }
  ]
};
