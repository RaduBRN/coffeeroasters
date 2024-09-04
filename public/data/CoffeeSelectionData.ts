interface PricesType {
  id: number;
  price: number;
  description: string;
}

interface AnswersType {
  id: number;
  title: string;
  answer: string;
  prices?: PricesType[] | undefined;
  disable_question?: number | undefined;
}

interface QuestionsType {
  id: number;
  title: string;
  question: string;
  answers: AnswersType[];
}

const questions: QuestionsType[] = [
  {
    id: 0,
    title: "Preferences",
    question: "How do you drink your coffee?",
    answers: [
      {
        id: 0,
        title: "Capsules",
        answer: "Compatible with Nespresso systems and similar brewers",
        disable_question: 3,
      },
      {
        id: 1,
        title: "Filter",
        answer: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: 2,
        title: "Espresso",
        answer:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: 1,
    title: "Bean Type",
    question: "What type of coffee?",
    answers: [
      {
        id: 0,
        title: "Single Origin",
        answer:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: 1,
        title: "Decaf",
        answer:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: 2,
        title: "Blended",
        answer:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 2,
    title: "Quantity",
    question: "How much would you like?",
    answers: [
      {
        id: 0,
        title: "250g",
        answer: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        prices: [
          {
            id: 0,
            price: 7.2,
            description:
              "$7.20 per shipment. Includes free first-class shipping.",
          },
          {
            id: 1,
            price: 9.6,
            description:
              "$9.60 per shipment. Includes free first-class shipping.",
          },
          {
            id: 2,
            price: 12.0,
            description:
              "$12.00 per shipment. Includes free first-class shipping.",
          },
        ],
      },
      {
        id: 1,
        title: "500g",
        answer: "Perfect option for a couple. Yields about 40 delectable cups.",
        prices: [
          {
            id: 0,
            price: 13,
            description:
              "$13.00 per shipment. Includes free first-class shipping.",
          },
          {
            id: 1,
            price: 17.5,
            description:
              "$17.50 per shipment. Includes free first-class shipping.",
          },
          {
            id: 2,
            price: 22,
            description:
              "$22.00 per shipment. Includes free first-class shipping.",
          },
        ],
      },
      {
        id: 2,
        title: "750g",
        answer:
          "Perfect for offices and events. Yields about 90 delightful cups.",
        prices: [
          {
            id: 0,
            price: 22,
            description:
              "$22.00 per shipment. Includes free first-class shipping.",
          },
          {
            id: 1,
            price: 32,
            description:
              "$32.00 per shipment. Includes free first-class shipping.",
          },
          {
            id: 2,
            price: 42,
            description:
              "$42.00 per shipment. Includes free first-class shipping.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Grind Option",
    question: "Want us to grind them?",
    answers: [
      {
        id: 0,
        title: "Wholebean",
        answer: "Best choice if you cherish the full sensory experience",
      },
      {
        id: 1,
        title: "Filter",
        answer: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: 2,
        title: "Cafetiére",
        answer: "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: 4,
    title: "Deliveries",
    question: "How often should we deliver?",
    answers: [
      {
        id: 0,
        title: "Every Week",
        answer: "Select quantity to display price",
      },
      {
        id: 1,
        title: "Every 2 weeks",
        answer: "Select quantity to display price",
      },
      {
        id: 2,
        title: "Every month",
        answer: "Select quantity to display price",
      },
    ],
  },
];

export default questions;
