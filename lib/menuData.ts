// Menu data digitized from the uploaded mess menu PDF.
//
// The mess runs a two-week rotating cycle: an "even" week menu and an
// "odd" week menu. Which one applies on a given calendar date is decided
// by ISO-8601 week number parity in `lib/getTodayMenu.ts` (even ISO week
// -> even-week menu, odd ISO week -> odd-week menu). If your mess's
// actual rotation is offset from this, flip `WEEK_PARITY_EVEN_MEANS`
// in that file.
//
// A few source rows in the PDF had merged/wrapped table cells that made
// day-boundaries ambiguous (mostly in the breakfast main-dish rows and
// the Wednesday special-dinner row). Those were reconstructed using the
// neighboring accompaniment rows as anchors and standard pairings
// (e.g. Poori + Aloo curry, Paratha + Channa masala). Edit freely below
// if your local menu differs.

export type DayName =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

export type MealKey = "breakfast" | "lunch" | "dinner";

export interface Meal {
  items: string[];
  beverages?: string[];
}

export interface DayMenu {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

export type WeekMenu = Record<DayName, DayMenu>;

export const DAY_ORDER: DayName[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const DAY_LABEL: Record<DayName, string> = {
  sunday: "Sunday",
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
};

const EVEN_WEEK: WeekMenu = {
  sunday: {
    breakfast: {
      items: ["Onion Carrot Uttapam", "Sambar", "Coconut Chutney", "BBJ, Sprouts", "Seasonal Cut Fruits*** / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Sev Tomato Gravy",
        "Kerala Sadya, Avial",
        "Hyderabadi Paneer Biryani, Raitha / Hyderabadi Chicken Biryani, Raitha",
        "Fryums, Pickle",
        "Ice Cream (1)",
        "Salad, Onion",
      ],
    },
    dinner: {
      items: [
        "Peanut Coconut Rice, Veg Kurma",
        "Rice, Sambar, Rasam, Cauliflower Peas Poriyal",
        "Curd",
        "Gulab Jamun (2)",
      ],
    },
  },
  monday: {
    breakfast: {
      items: ["Poori", "Aloo Masala Curry", "BBJ, Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Pulkha, Garlic Tomato Curry",
        "Andhra Tomato Dal, Greens Poriyal",
        "Rice, Vatha Kolambu, Curd",
        "Papad, Pickle",
        "Sugar, Salt, Ghee, Podi",
        "Seasonal Fruit Juice, Onion",
      ],
    },
    dinner: {
      items: [
        "Tawa Chapathi, Channa Masala",
        "Lemon Rice, Curd",
        "Buttermilk, Fryums",
        "Boondi Laddu (1)",
      ],
    },
  },
  tuesday: {
    breakfast: {
      items: ["Ragi Dosa", "Upma", "Sambar", "Groundnut Chutney", "BBJ, Sprouts", "Seasonal Cut Fruits*** / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Dum Aloo",
        "Kovakai Fry",
        "Jeera Rice, Rice, Rasam, Curd",
        "Fryums, Pickle",
        "Sugar, Salt, Ghee, Podi",
        "Salad, Onion",
      ],
    },
    dinner: {
      items: [
        "Idli, Sambar, Karam Podi, Tomato Onion Chutney, Ghee",
        "Rice, Potato Poriyal",
        "Pickle",
        "Sweet Pongal***",
      ],
    },
  },
  wednesday: {
    breakfast: {
      items: ["Masala Dosa", "Upma", "Poha", "Sambar", "Tomato Onion Chutney", "BBJ, Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Paneer Peas Curry",
        "Spinach Kootu",
        "Rice, Sambar, Rasam, Curd",
        "Fryums, Pickle",
        "Sugar, Salt, Ghee, Podi",
        "Seasonal Fruit Juice, Onion",
      ],
    },
    dinner: {
      items: [
        "Special Dinner (rotates weekly)",
        "Veg: Naan with Paneer Butter Masala OR Roti with Paneer Tikka Masala",
        "Non-Veg: Naan with Butter Chicken OR Roti with Kadai Chicken",
        "Hyderabadi Veg Biryani / Veg Pulao",
        "Aloo Curry, Raitha",
        "Lemon Juice",
        "Ice Cream (Vanilla / Strawberry / Chocolate)",
        "Fruit Custard",
        "Seasonal Fruits (4 varieties)",
      ],
    },
  },
  thursday: {
    breakfast: {
      items: ["Mysore Bonda (3)", "Coconut Chutney", "BBJ, Sprouts", "Seasonal Cut Fruits*** / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Baigan Methi Curry",
        "Aloo Masala Curry",
        "Rice, Sambar, Rasam, Curd",
        "Gongura Chutney, Papad",
        "Sugar, Salt, Ghee, Podi",
        "Salad, Onion",
      ],
    },
    dinner: {
      items: [
        "Tawa Chapathi, Veg Biryani",
        "Bagara Rice, Black Channa Curry",
        "Buttermilk, Onion",
        "Paruppu Payasam with Jaggery",
      ],
    },
  },
  friday: {
    breakfast: {
      items: ["Rava Idly", "Vada (3)", "Sambar", "Tomato Onion Chutney", "BBJ, Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Phulka",
        "Chilli Soya Bean Dry***, Perugu Pachadi",
        "Hyderabadi Veg Pulao, Raita",
        "Sugar, Salt, Ghee, Podi",
        "Seasonal Fruit Juice, Onion",
      ],
    },
    dinner: {
      items: [
        "Chole Bature, Idiyappam",
        "Plain Rice, Mixed Dal",
        "Butter Milk, Papad",
        "Bread Halwa***",
      ],
    },
  },
  saturday: {
    breakfast: {
      items: ["Methi Paratha", "Kabuli Channa Masala", "BBJ, Sprouts", "Seasonal Cut Fruits*** / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Kabuli Channa Masala (with Rice, Sambar, Rasam)",
        "Rice, Sambar, Rasam",
        "Banana",
      ],
    },
    dinner: {
      items: [
        "Millet Dosa, Peanut Chutney",
        "Phulka, Gutti Vankaya Curry",
      ],
    },
  },
};

const ODD_WEEK: WeekMenu = {
  sunday: {
    breakfast: {
      items: ["Rava Dosa", "Semiya Upma", "Sambar", "Groundnut Chutney", "BBJ, Boiled Groundnuts", "Seasonal Cut Fruits*** / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Tawa Chapathi",
        "Palak Paneer Curry / Chicken Curry",
        "Veg Biryani, Raitha",
        "Badusha (1)",
        "Seasonal Fruit Juice, Ice Cream (1)",
        "Salad, Onion",
      ],
    },
    dinner: {
      items: [
        "Chapatti, Mix Veg Curry (Punjabi style)",
        "Tamarind Rice, Buttermilk, Aloo Bhujiya Sabhji, Fryums",
        "Pickle",
        "Seasonal Cut Fruits***, Turmeric Milk",
      ],
    },
  },
  monday: {
    breakfast: {
      items: ["Pongal", "Vada (3)", "Sambar", "Coconut Chutney", "BBJ, Sprouts", "Banana (1) / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Pulkha, Dal Makhani",
        "Plantain Poriyal",
        "Rice, Sambar, Rasam, Curd",
        "Pickle, Papad",
        "Sugar, Salt, Ghee, Podi",
        "Seasonal Fruit Juice, Onion",
      ],
    },
    dinner: {
      items: [
        "Chole Bature, Onion Mirch Salad",
        "Rice, Snake Gourd Kootu",
        "Curd, Rasam",
        "Banana (1)",
      ],
    },
  },
  tuesday: {
    breakfast: {
      items: ["Wheat Dosa (or Pesarattu)", "Sambar", "Tomato Onion Chutney", "BBJ, Boiled Groundnuts", "Seasonal Cut Fruits*** / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Dum Aloo",
        "Beans Carrot Poriyal",
        "Rice, Panchratan Dal, Rasam, Curd, Fryums",
        "Pickle",
        "Sugar, Salt, Ghee, Podi",
        "Salad, Onion",
      ],
    },
    dinner: {
      items: [
        "Tawa Chapathi, Channa Masala",
        "Rice, Sambar, Beet Root Poriyal, Buttermilk",
        "Fryums, Dal Fry",
        "Bread Halwa",
      ],
    },
  },
  wednesday: {
    breakfast: {
      items: ["Puri", "Channa Masala", "BBJ, Sprouts", "Banana (1) / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Pulkha, Soya Curry",
        "Onion Pakoda***, Perugu Pachadi",
        "Rice, Rasam, Puli Kolambu, Papad, Cabbage Moongdal Coconut Poriyal",
        "Pickle",
        "Sugar, Salt, Ghee, Podi",
        "Seasonal Fruit Juice, Onion",
      ],
    },
    dinner: {
      items: [
        "Phulka, Kambu (Pearl Millet) Idli",
        "Sambar, Tomato Onion Chutney",
        "Buttermilk",
        "Sabudhana Kheer, Kulfi (1, medium) (Malai, Pista, Mango, Strawberry)",
      ],
    },
  },
  thursday: {
    breakfast: {
      items: ["Wheat Rava Upma", "Poha", "Channa Masala, Curd, Pickle", "Seasonal Cut Fruits*** / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Tawa Chapathi",
        "Kadai Paneer***",
        "Rice, Masala Sambar, Curd, Fryums, Spinach Kootu",
        "Pickle",
        "Sugar, Salt, Ghee, Podi",
        "Salad, Onion",
      ],
    },
    dinner: {
      items: [
        "Flavoured Chapati, Paneer Kofta Curry",
        "Rice, Sambar, Rasam, Kovakai Poriyal",
        "Salad, Buttermilk",
        "Vermicelli Payasam",
      ],
    },
  },
  friday: {
    breakfast: {
      items: ["Idli", "Vada (3)", "Mysore Bonda (3)", "Groundnut Chutney", "BBJ, Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Phulka, Rajma Curry",
        "Keerai Sambar",
        "Rice, Rasam, Curd, Fryums, Pumpkin Kootu",
        "Gongura Chutney",
        "Sugar, Salt, Ghee, Podi",
        "Seasonal Fruit Juice, Onion",
      ],
    },
    dinner: {
      items: [
        "Set Dosa, Veg Pulao",
        "Vada Curry",
        "Raitha, Buttermilk",
        "Kesari Bath***",
      ],
    },
  },
  saturday: {
    breakfast: {
      items: ["Aloo Paratha", "Sambar", "Coconut Chutney", "BBJ, Sprouts", "Seasonal Cut Fruits*** / Boiled Egg (1)"],
      beverages: ["Tea", "Coffee", "Milk", "Sugar", "Salt"],
    },
    lunch: {
      items: [
        "Tawa Chapathi",
        "Lauki Chana Dal, Gobi 65***",
        "Rice, Rasam, Curd, Tomato Andhra Dal, Papad, Plantain Stem Kootu",
        "Pickle",
        "Sugar, Salt, Ghee, Podi",
        "Banana Juice, Onion",
      ],
    },
    dinner: {
      items: [
        "Pulka, Channa Peas Palak",
        "Sambar Rice, Curd, Soya Chilli",
        "Kara Boondi, Pickle",
        "Gulab Jamun (2)",
      ],
    },
  },
};

export const MENUS: Record<"even" | "odd", WeekMenu> = {
  even: EVEN_WEEK,
  odd: ODD_WEEK,
};
