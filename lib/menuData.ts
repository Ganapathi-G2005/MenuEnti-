// Menu data digitized from the uploaded mess menu PDF.
//
// This version was re-verified against the ORIGINAL PDF TABLE by rasterizing
// every page and visually reading each cell (rather than relying on the
// jumbled/merged-cell text extraction). Multiple items in the previous
// version were shifted by one weekday (especially Even Week Lunch and
// Dinner) because the source PDF's merged header cells threw off a naive
// column-by-column text reconstruction. Those are all corrected below.
//
// NEW: a separate `ON_THE_TABLE` export holds the items that are IDENTICAL
// every single day of the week (both weeks) — e.g. breakfast beverages,
// "BBJ" (Bread/Butter/Jam), lunch's "Sugar, Salt, Ghee, Podi", and the
// "Onion" that accompanies every lunch salad/juice. These were previously
// duplicated verbatim into every single day entry. They're now kept out of
// the day-by-day items so each day only lists what's actually special to
// that day, and the constant "always on the table" items are rendered once.
// (Items that vary day-to-day even though they look like accompaniments —
// e.g. Sprouts vs. Boiled Groundnuts, Fryums/Pickle vs. Papad/Pickle,
// Salad vs. Seasonal Fruit Juice — stay in the per-day items since they
// actually change.)
//
// The mess runs a two-week rotating cycle: an "even" week menu and an
// "odd" week menu. Which one applies on a given calendar date is decided
// by ISO-8601 week number parity in `lib/getTodayMenu.ts` (even ISO week
// -> even-week menu, odd ISO week -> odd-week menu). If your mess's
// actual rotation is offset from this, flip `WEEK_PARITY_EVEN_MEANS`
// in that file.
//
// The PDF also has a standalone "Snacks" meal (previously missing from
// this file entirely) and a small, day-agnostic rotation table at the
// bottom of page 2 for Seasonal Cut Fruits / Pickle / Seasonal Fruit
// Juice varieties (only 4-5 entries, not mapped 1:1 to weekdays) — see
// `SEASONAL_ROTATION` at the bottom of this file.

export type DayName =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

export type MealKey = "breakfast" | "lunch" | "snacks" | "dinner";

export interface Meal {
  items: string[];
  beverages?: string[];
}

export interface DayMenu {
  breakfast: Meal;
  lunch: Meal;
  snacks: Meal;
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

// Items that are IDENTICAL on every single day of the week, for both
// even and odd weeks. Render these once per meal rather than repeating
// them in every day's list.
export const ON_THE_TABLE: Record<"breakfast" | "lunch" | "snacks", string[]> = {
  breakfast: ["BBJ (Bread, Butter, Jam)", "Tea", "Coffee", "Milk", "Sugar", "Salt"],
  lunch: ["Sugar, Salt, Ghee, Podi", "Onion"],
  snacks: ["Tea", "Coffee", "Milk", "Sugar"],
};

const EVEN_WEEK: WeekMenu = {
  sunday: {
    breakfast: {
      items: ["Onion Carrot Uttapam", "Sambar", "Coconut Chutney", "Sprouts", "Seasonal Cut Fruits / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Sev Tomato Gravy",
        "Hyderabadi Paneer Biryani, Raitha / Hyderabadi Chicken Biryani, Raitha",
        "Ice Cream (1)",
        "Salad",
      ],
    },
    snacks: {
      items: ["Bhel Puri"],
      beverages: ["Boost Sachets"],
    },
    dinner: {
      items: [
        "Peanut Coconut Rice, Veg Kurma",
        "Phulka, Gutti Vankaya Curry",
        "Curd",
        "Gulab Jamun (2)",
      ],
    },
  },
  monday: {
    breakfast: {
      items: ["Poori", "Aloo Masala Curry", "Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Pulkha, Garlic Tomato Curry",
        "Kerala Sadya, Avial",
        "Rice, Vatha Kolambu, Curd",
        "Fryums, Pickle",
        "Seasonal Fruit Juice",
      ],
    },
    snacks: {
      items: ["Sundal (Boiled Black Channa, Boiled Green Gram Dal)"],
      beverages: ["Raagi Malt Powder"],
    },
    dinner: {
      items: [
        "Tawa Chapathi, Channa Masala",
        "Rice, Sambar, Rasam, Cauliflower Peas Poriyal",
        "Buttermilk, Fryums",
        "Boondi Laddu (1)",
      ],
    },
  },
  tuesday: {
    breakfast: {
      items: ["Ragi Dosa", "Upma", "Sambar", "Groundnut Chutney", "Sprouts", "Seasonal Cut Fruits / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Dum Aloo",
        "Andhra Tomato Dal, Greens Poriyal",
        "Jeera Rice, Rice, Rasam, Curd",
        "Papad, Pickle",
        "Salad",
      ],
    },
    snacks: {
      items: ["Onion Pakoda"],
      beverages: ["Boost Sachets"],
    },
    dinner: {
      items: [
        "Idli, Sambar, Karam Podi, Tomato Onion Chutney, Ghee",
        "Lemon Rice, Curd, Rice, Potato Poriyal",
        "Pickle",
        "Sweet Pongal",
      ],
    },
  },
  wednesday: {
    breakfast: {
      items: ["Masala Dosa", "Sambar", "Tomato Onion Chutney", "Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Pulkha, Yellow Channa Dal Masala",
        "Kovakai Fry",
        "Rice, Sambar, Rasam, Curd",
        "Fryums, Pickle",
        "Seasonal Fruit Juice",
      ],
    },
    snacks: {
      items: ["Banana Bajji (3)", "Kadalai Chutney"],
      beverages: ["Raagi Malt Powder"],
    },
    dinner: {
      items: [
        "Special Dinner (rotates weekly)",
        "Veg: Naan with Paneer Butter Masala OR Roti with Paneer Tikka Masala",
        "Non-Veg: Naan with Butter Chicken OR Roti with Kadai Chicken",
        "Hyderabadi Veg Biryani / Veg Pulao",
        "Raita, Lemon Juice",
        "Ice Cream (Vanilla / Strawberry / Chocolate)",
        "Fruit Custard",
        "Seasonal Fruits (4 varieties: Apple, Banana, Grapes, Papaya, Pomegranate, Country Guava)",
      ],
    },
  },
  thursday: {
    breakfast: {
      items: ["Upma", "Poha", "Mysore Bonda (3)", "Coconut Chutney", "Sprouts", "Banana (1) / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Paneer Peas Curry",
        "Spinach Kootu",
        "Rice, Sambar, Rasam, Curd",
        "Fryums, Pickle",
        "Salad",
      ],
    },
    snacks: {
      items: ["Sweet Corn (half piece - 6cm)"],
      beverages: ["Boost Sachets"],
    },
    dinner: {
      items: [
        "Tawa Chapathi, Veg Biryani",
        "Aloo Curry, Raitha",
        "Buttermilk",
        "Pineapple Kesari",
      ],
    },
  },
  friday: {
    breakfast: {
      items: ["Rava Idly", "Vada (3)", "Sambar", "Tomato Onion Chutney", "Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Phulka",
        "Aloo Masala Curry",
        "Hyderabadi Veg Pulao, Raita",
        "Gongura Chutney, Papad",
        "Seasonal Fruit Juice",
      ],
    },
    snacks: {
      items: ["Mix Veg Maggi (130gm)", "Tomato Sauce"],
      beverages: ["Raagi Malt Powder"],
    },
    dinner: {
      items: [
        "Chole Bature, Idiyappam",
        "Bagara Rice, Black Channa Curry",
        "Buttermilk",
        "Paruppu Payasam with Jaggery",
      ],
    },
  },
  saturday: {
    breakfast: {
      items: ["Methi Paratha", "Kabuli Channa Masala", "Sprouts", "Seasonal Cut Fruits / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Baigan Methi Curry",
        "Chilli Soya Bean Dry, Perugu Pachadi",


        "Rice, Sambar, Rasam",
        "Papad, Pickle",
        "Banana Juice",
      ],
    },
    snacks: {
      items: ["Aloo Samosa (2, should contain peas also)", "Tomato Sauce", "Mint Chutney"],
      beverages: ["Boost Sachets"],
    },
    dinner: {
      items: [
        "Millet Dosa, Peanut Chutney",
        "Plain Rice, Mixed Dal",
        "Buttermilk, Papad",
        "Bread Halwa",
      ],
    },
  },
};

const ODD_WEEK: WeekMenu = {
  sunday: {
    breakfast: {
      items: ["Rava Dosa", "Semiya Upma", "Sambar", "Groundnut Chutney", "Boiled Groundnuts", "Seasonal Cut Fruits / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Tawa Chapathi",
        "Palak Paneer Curry / Chicken Curry",
        "Veg Biryani, Raitha",
        "Badusha (1)",
        "Seasonal Fruit Juice, Ice Cream (1)",
        "Salad",
      ],
    },
    snacks: {
      items: ["Pani Puri (6)", "Green Chutney", "Tamarind Chutney"],
      beverages: ["Raagi Malt Powder"],
    },
    dinner: {
      items: [
        "Chapatti, Mix Veg Curry (Punjabi style)",
        "Tamarind Rice, Buttermilk, Aloo Bhujiya Sabhji, Fryums",
        "Pickle",
        "Seasonal Cut Fruits, Turmeric Milk",
      ],
    },
  },
  monday: {
    breakfast: {
      items: ["Pongal", "Vada (3)", "Sambar", "Coconut Chutney", "Sprouts", "Banana (1) / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Pulkha, Dal Makhani",
        "Plantain Poriyal",
        "Rice, Sambar, Rasam, Curd",
        "Pickle, Papad",
        "Seasonal Fruit Juice",
      ],
    },
    snacks: {
      items: ["Pasta"],
      beverages: ["Boost Sachets"],
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
      items: ["Wheat Dosa (or Pesarattu)", "Sambar", "Tomato Onion Chutney", "Boiled Groundnuts", "Seasonal Cut Fruits / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Tawa Chapathi, Dum Aloo",
        "Beans Carrot Poriyal",
        "Rice, Panchratan Dal, Rasam, Curd, Fryums",
        "Pickle",
        "Salad",
      ],
    },
    snacks: {
      items: ["Masala Vada (3)", "Pottukadalai Chutney"],
      beverages: ["Raagi Malt Powder"],
    },
    dinner: {
      items: [
        "Tawa Chapathi, Channa Masala",
        "Rice, Sambar, Beet Root Poriyal, Buttermilk",
        "Fryums",
        "Bread Halwa",
      ],
    },
  },
  wednesday: {
    breakfast: {
      items: ["Puri", "Channa Masala", "Sprouts", "Banana (1) / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Pulkha, Soya Curry",
        "Onion Pakoda, Perugu Pachadi",
        "Rice, Rasam, Puli Kolambu, Papad, Cabbage Moongdal Coconut Poriyal",
        "Pickle",
        "Seasonal Fruit Juice",
      ],
    },
    snacks: {
      items: ["Boiled Groundnuts Chat"],
      beverages: ["Boost Sachets"],
    },
    dinner: {
      items: [
        "Phulka, Kambu (Pearl Millet) Idli",
        "Sambar, Tomato Onion Chutney",
        "Dal Fry, Buttermilk",
        "Sabudhana Kheer, Kulfi (1, medium) (Malai, Pista, Mango, Strawberry)",
      ],
    },
  },
  thursday: {
    breakfast: {
      items: ["Wheat Rava Upma", "Poha", "Mysore Bonda (3)", "Groundnut Chutney", "Boiled Groundnuts", "Seasonal Cut Fruits / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Tawa Chapathi",
        "Kadai Paneer",
        "Rice, Masala Sambar, Curd, Fryums, Spinach Kootu",
        "Pickle",
        "Salad",
      ],
    },
    snacks: {
      items: ["Channa Chat"],
      beverages: ["Raagi Malt Powder"],
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
      items: ["Idli", "Vada (3)", "Sambar", "Coconut Chutney", "Sprouts", "Banana (1) / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Phulka, Rajma Curry",
        "Keerai Sambar",
        "Rice, Rasam, Curd, Fryums, Pumpkin Kootu",
        "Gongura Chutney",
        "Seasonal Fruit Juice",
      ],
    },
    snacks: {
      items: ["Boiled Green Moong Dal"],
      beverages: ["Boost Sachets"],
    },
    dinner: {
      items: [
        "Set Dosa, Veg Pulao",
        "Vada Curry",
        "Raitha, Buttermilk",
        "Kesari Bath",
      ],
    },
  },
  saturday: {
    breakfast: {
      items: ["Aloo Paratha", "Channa Masala, Curd, Pickle", "Boiled Groundnuts", "Seasonal Cut Fruits / Boiled Egg (1)"],
    },
    lunch: {
      items: [
        "Tawa Chapathi",
        "Lauki Chana Dal, Gobi 65",
        "Rice, Rasam, Curd, Tomato Andhra Dal, Papad, Plantain Stem Kootu",
        "Pickle",
        "Banana Juice",
      ],
    },
    snacks: {
      items: ["Millet Puttu"],
      beverages: ["Raagi Malt Powder"],
    },
    dinner: {
      items: [
        "Pulka, Channa Peas Palak",
        "Sambar Rice, Curd Rice, Soya Chilli",
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

// Day-agnostic rotation table printed at the bottom of the PDF (page 2).
// It is NOT mapped 1:1 to specific weekdays in the source (only 4-5
// entries each, not 7) — treat it as "these varieties come up in
// rotation" rather than a fixed per-day lookup.
export const SEASONAL_ROTATION = {
  seasonalCutFruits: ["Watermelon", "Papaya", "Guava", "Pineapple"],
  pickle: ["Mango", "Garlic", "Tomato", "Lemon", "Ginger"],
  seasonalFruitJuice: ["Watermelon", "Banana", "Muskmelon", "Papaya", "Pineapple"],
};