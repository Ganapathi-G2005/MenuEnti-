// =============================================================
// MESS MENU DATA — Extracted from official menu PDF
// Even/Odd week determined by ISO week number of the date.
// Days: 0 = Sunday, 1 = Monday … 6 = Saturday
// =============================================================

const MENU_DATA = {
  even: {
    0: { // Sunday
      breakfast: {
        main: ["Rava Dosa", "Semiya Upma"],
        sides: ["Sambar", "Groundnut Chutney"],
        extras: ["BBJ", "Boiled Groundnuts", "Seasonal Cut Fruits / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Tawa Chapathi"],
        sides: ["Palak Paneer Curry / Chicken Curry"],
        rice: ["Veg Biryani", "Raitha"],
        extras: ["Salad", "Onion"],
        accompaniments: ["Badusha (1)", "Seasonal Fruit Juice", "Ice Cream (1)"],
      },
      snacks: {
        main: ["Pani Puri (6)"],
        sides: ["Green Chutney", "Tamarind Chutney"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Raagi Malt Powder"],
      },
      dinner: {
        main: ["Chapatti", "Mix Veg Curry (Punjabi Style)"],
        sides: [],
        rice: ["Tamarind Rice"],
        extras: ["Buttermilk", "Aloo Bhujiya Sabji", "Fryums", "Pickle"],
        sweet: ["Seasonal Cut Fruits ★", "Turmeric Milk"],
      },
    },
    1: { // Monday
      breakfast: {
        main: ["Poori"],
        sides: ["Aloo Masala Curry"],
        extras: ["BBJ", "Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Pulkha", "Garlic Tomato Curry"],
        sides: ["Kerela Sadiya Avial"],
        rice: ["Rice", "Vatha Kolambu", "Curd"],
        extras: ["Fryums", "Pickle", "Seasonal Fruit Juice", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Sundal (Boiled Black Channa, Boiled Green Gram Dal)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Raagi Malt Powder"],
      },
      dinner: {
        main: ["Tawa Chapathi", "Channa Masala"],
        sides: [],
        rice: ["Rice", "Sambar", "Rasam", "Cauliflower Peas Poriyal"],
        extras: ["Buttermilk", "Fryums"],
        sweet: ["Boondi Laddu (1)"],
      },
    },
    2: { // Tuesday
      breakfast: {
        main: ["Ragi Dosa", "Upma"],
        sides: ["Sambar", "Groundnut Chutney"],
        extras: ["BBJ", "Sprouts", "Seasonal Cut Fruits / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Tawa Chapathi", "Dum Aloo"],
        sides: ["Andhra Tomato Dal", "Greens Poriyal"],
        rice: ["Jeera Rice", "Rice", "Rasam", "Curd"],
        extras: ["Papad", "Pickle", "Salad", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Onion Pakoda"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Boost Sachets"],
      },
      dinner: {
        main: ["Idli", "Sambar", "Karam Podi", "Tomato Onion Chutney", "Ghee"],
        sides: [],
        rice: ["Lemon Rice", "Curd Rice", "Potato Poriyal"],
        extras: ["Pickle"],
        sweet: ["Sweet Pongal ★"],
      },
    },
    3: { // Wednesday
      breakfast: {
        main: ["Masala Dosa"],
        sides: ["Sambar", "Tomato Onion Chutney"],
        extras: ["BBJ", "Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Pulkha", "Yellow Channa Dal Masala"],
        sides: ["Kovakai Fry"],
        rice: ["Rice", "Sambar", "Rasam", "Curd"],
        extras: ["Fryums", "Pickle", "Seasonal Fruit Juice", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Banana Bajji (3)"],
        sides: ["Kadalai Chutney"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Raagi Malt Powder"],
      },
      dinner: {
        main: ["Special Dinner"],
        sides: ["See Special Dinner Menu (rotates Veg / Non-Veg)"],
        rice: [],
        extras: [],
        sweet: [],
      },
    },
    4: { // Thursday
      breakfast: {
        main: ["Upma", "Poha"],
        sides: ["Mysore Bonda (3)", "Coconut Chutney"],
        extras: ["BBJ", "Sprouts", "Seasonal Cut Fruits / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Tawa Chapathi", "Paneer Peas Curry"],
        sides: ["Spinach Kootu"],
        rice: ["Rice", "Sambar", "Rasam", "Curd"],
        extras: ["Fryums", "Pickle", "Salad", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Mix Veg Maggi (130g)"],
        sides: ["Tomato Sauce"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Boost Sachets"],
      },
      dinner: {
        main: ["Tawa Chapathi", "Veg Biryani"],
        sides: ["Aloo Curry", "Raitha"],
        rice: [],
        extras: ["Butter Milk"],
        sweet: ["Pineapple Kesari ★"],
      },
    },
    5: { // Friday
      breakfast: {
        main: ["Rava Idly", "Vada (3)"],
        sides: ["Sambar", "Tomato Onion Chutney"],
        extras: ["BBJ", "Boiled Groundnuts", "Banana (1) / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Phulka"],
        sides: ["Aloo Masala Curry"],
        rice: ["Hyderabadi Veg Pulao", "Raita"],
        extras: ["Gongura Chutney", "Papad", "Seasonal Fruit Juice", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Aloo Samosa (2) (with peas)"],
        sides: ["Tomato Sauce", "Mint Chutney"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Raagi Malt Powder"],
      },
      dinner: {
        main: ["Chole Bature", "Idiyappam"],
        sides: [],
        rice: ["Bagara Rice", "Black Channa Curry"],
        extras: ["Buttermilk", "Onion"],
        sweet: ["Paruppu Payasam with Jaggery"],
      },
    },
    6: { // Saturday
      breakfast: {
        main: ["Methi Paratha"],
        sides: ["Kabuli Channa Masala"],
        extras: ["BBJ", "Sprouts", "Seasonal Cut Fruits / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Tawa Chapathi", "Baigan Methi Curry"],
        sides: ["Chilli Soyabean Dry ★", "Perugu Pachadi"],
        rice: ["Rice", "Sambar", "Rasam"],
        extras: ["Papad", "Pickle", "Banana Juice", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Sweet Corn (half piece - 6cm)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Boost Sachets"],
      },
      dinner: {
        main: ["Millet Dosa", "Peanut Chutney"],
        sides: [],
        rice: ["Plain Rice", "Mixed Dal"],
        extras: ["Butter Milk", "Papad"],
        sweet: ["Bread Halwa ★"],
      },
    },
  },

  odd: {
    0: { // Sunday
      breakfast: {
        main: ["Onion Carrot Uttapam"],
        sides: ["Sambar", "Coconut Chutney"],
        extras: ["BBJ", "Sprouts", "Seasonal Cut Fruits / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Tawa Chapathi", "Sev Tomato Gravy"],
        sides: [],
        rice: ["Hyderabadi Paneer Biryani, Raitha", "Hyderabadi Chicken Biryani, Raitha"],
        extras: ["Salad", "Onion"],
        accompaniments: ["Ice Cream (1)"],
      },
      snacks: {
        main: ["Bhel Puri"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Boost Sachets"],
      },
      dinner: {
        main: ["Peanut Coconut Rice", "Veg Kurma"],
        sides: ["Phulka", "Gutti Vankaya Curry"],
        rice: [],
        extras: ["Curd"],
        sweet: ["Gulab Jamun (2)"],
      },
    },
    1: { // Monday
      breakfast: {
        main: ["Pongal", "Vada (3)"],
        sides: ["Sambar", "Coconut Chutney"],
        extras: ["BBJ", "Sprouts", "Banana (1) / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Pulkha", "Dal Makhani"],
        sides: ["Plantain Poriyal"],
        rice: ["Rice", "Sambar", "Rasam", "Curd"],
        extras: ["Pickle", "Papad", "Seasonal Fruit Juice", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Pasta"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Boost Sachets"],
      },
      dinner: {
        main: ["Chole Bature", "Onion Mirch Salad"],
        sides: [],
        rice: ["Rice", "Snake Gourd Kootu"],
        extras: ["Curd", "Rasam"],
        sweet: ["Banana (1)"],
      },
    },
    2: { // Tuesday
      breakfast: {
        main: ["Wheat Dosa (or) Pesarattu"],
        sides: ["Sambar", "Tomato Onion Chutney"],
        extras: ["BBJ", "Boiled Groundnuts", "Seasonal Cut Fruits / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Tawa Chapathi", "Dum Aloo"],
        sides: ["Beans Carrot Poriyal"],
        rice: ["Rice", "Panchratan Dal", "Rasam", "Curd", "Fryums"],
        extras: ["Pickle", "Salad", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Masala Vada (3)"],
        sides: ["Pottukadalai Chutney"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Raagi Malt Powder"],
      },
      dinner: {
        main: ["Tawa Chapathi", "Channa Masala"],
        sides: [],
        rice: ["Rice", "Sambar", "Beet Root Poriyal", "Buttermilk"],
        extras: ["Fryums"],
        sweet: ["Bread Halwa"],
      },
    },
    3: { // Wednesday
      breakfast: {
        main: ["Puri"],
        sides: ["Channa Masala"],
        extras: ["BBJ", "Sprouts", "Banana (1) / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Pulkha", "Soya Curry"],
        sides: ["Onion Pakoda ★", "Perugu Pachadi"],
        rice: ["Rice", "Rasam", "Puli Kolambu", "Papad", "Cabbage Moong Dal Coconut Poriyal"],
        extras: ["Pickle", "Seasonal Fruit Juice", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Boiled Groundnuts Chat"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Boost Sachets"],
      },
      dinner: {
        main: ["Phulka", "Kambu (Pearl Millet) Idli"],
        sides: ["Sambar", "Tomato Onion Chutney"],
        rice: [],
        extras: ["Fryums"],
        sweet: ["Sabudana Kheer", "Kulfi (1) — Malai / Pista / Mango / Strawberry"],
      },
    },
    4: { // Thursday
      breakfast: {
        main: ["Wheat Rava Upma", "Poha"],
        sides: ["Mysore Bonda (3)", "Groundnut Chutney"],
        extras: ["BBJ", "Boiled Groundnuts", "Seasonal Cut Fruits / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Tawa Chapathi"],
        sides: ["Kadai Paneer ★"],
        rice: ["Rice", "Masala Sambar", "Curd", "Fryums", "Spinach Kootu"],
        extras: ["Pickle", "Salad", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Channa Chat"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Raagi Malt Powder"],
      },
      dinner: {
        main: ["Flavoured Chapati", "Paneer Kofta Curry"],
        sides: [],
        rice: ["Rice", "Sambar", "Rasam", "Kovakai Poriyal"],
        extras: ["Salad", "Buttermilk"],
        sweet: ["Vermicelli Payasam"],
      },
    },
    5: { // Friday
      breakfast: {
        main: ["Idli", "Vada (3)"],
        sides: ["Sambar", "Coconut Chutney"],
        extras: ["BBJ", "Sprouts", "Banana (1) / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Phulka", "Rajma Curry"],
        sides: ["Keerai Sambar"],
        rice: ["Rice", "Rasam", "Curd", "Fryums", "Pumpkin Kootu"],
        extras: ["Gongura Chutney", "Seasonal Fruit Juice", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Boiled Green Moong Dal"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Boost Sachets"],
      },
      dinner: {
        main: ["Set Dosa", "Veg Pulao"],
        sides: ["Vada Curry"],
        rice: [],
        extras: ["Raitha", "Buttermilk"],
        sweet: ["Kesari Bath ★"],
      },
    },
    6: { // Saturday
      breakfast: {
        main: ["Aloo Paratha"],
        sides: ["Channa Masala", "Curd", "Pickle"],
        extras: ["BBJ", "Boiled Groundnuts", "Seasonal Cut Fruits / Boiled Egg (1)"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Salt"],
      },
      lunch: {
        main: ["Tawa Chapathi"],
        sides: ["Lauki Chana Dal", "Gobi 65 ★"],
        rice: ["Rice", "Rasam", "Curd", "Tomato Andhra Dal", "Papad", "Plantain Stem Kootu"],
        extras: ["Pickle", "Banana Juice", "Onion"],
        accompaniments: ["Sugar", "Salt", "Ghee", "Podi"],
      },
      snacks: {
        main: ["Millet Puttu"],
        beverages: ["Tea / Coffee / Milk", "Sugar", "Raagi Malt Powder"],
      },
      dinner: {
        main: ["Pulka", "Channa Peas Palak"],
        sides: [],
        rice: ["Sambar Rice", "Curd Rice", "Soya Chilli"],
        extras: ["Kara Boondi", "Pickle"],
        sweet: ["Gulab Jamun (2)"],
      },
    },
  },

  specialDinner: {
    note: "One of these two combinations is served on rotation.",
    veg: {
      option1: ["Naan + Paneer Butter Masala", "Hyderabadi Veg Biryani"],
      option2: ["Roti + Paneer Tikka Masala", "Hyderabadi Veg Pulao"],
      accompaniments: ["Raita", "Lemon Juice"],
      desserts: ["Ice Cream (Vanilla / Strawberry / Chocolate)", "Fruit Custard"],
      fruits: ["Apple", "Banana", "Grapes", "Papaya", "Pomegranate", "Country Guava"],
    },
    nonVeg: {
      option1: ["Naan + Butter Chicken", "Hyderabadi Veg Biryani"],
      option2: ["Roti + Kadai Chicken", "Hyderabadi Veg Pulao"],
      accompaniments: ["Raita", "Lemon Juice"],
      desserts: ["Ice Cream (Vanilla / Strawberry / Chocolate)", "Fruit Custard"],
      fruits: ["Apple", "Banana", "Grapes", "Papaya", "Pomegranate", "Country Guava"],
    },
  },
};

// Seasonal items reference
const SEASONAL_CUT_FRUITS = {
  1: "Watermelon", 2: "Papaya", 3: "Guava", 4: "Pineapple",
};
const SEASONAL_FRUIT_JUICE = {
  1: "Watermelon Juice", 2: "Banana Juice", 3: "Muskmelon Juice", 4: "Papaya Juice", 5: "Pineapple Juice",
};
const PICKLE_ROTATION = ["Mango Pickle", "Garlic Pickle", "Tomato Pickle", "Lemon Pickle", "Ginger Pickle"];

const MENU_NOTES = [
  "★ Items marked ★ are available in limited quantity.",
  "Item 1 / Item 2: You can choose either, not both.",
  "Snacks are served in limited quantity.",
  "BBJ = Bread, Butter, Jam.",
];

// ─── Helper Functions ─────────────────────────────────────────

function getISOWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function getWeekType(date) {
  // ISO week 36 (Sep 1 2026) = Odd college week → flip standard parity
  return getISOWeekNumber(date) % 2 === 0 ? "odd" : "even";
}

function getDayMenu(date) {
  const weekType = getWeekType(date);
  const day = date.getDay();
  return MENU_DATA[weekType]?.[day] ?? null;
}

function getCurrentMeal(date) {
  const h = date.getHours();
  if (h < 10) return "breakfast";
  if (h < 15) return "lunch";
  if (h < 18) return "snacks";
  return "dinner";
}

const MEAL_META = {
  breakfast: { label: "Breakfast", emoji: "🌅", time: "7:00 – 10:00 AM", accent: "#FFAC82" },
  lunch: { label: "Lunch", emoji: "🍛", time: "10:00 AM – 3:00 PM", accent: "#FF8FAB" },
  snacks: { label: "Snacks", emoji: "🍿", time: "3:00 – 6:00 PM", accent: "#C4ABFF" },
  dinner: { label: "Dinner", emoji: "🌙", time: "6:00 PM onwards", accent: "#82CAFE" },
};

const SECTION_LABELS = {
  main: { icon: "🍽️", label: "Main Dish" },
  sides: { icon: "🥣", label: "Sides" },
  rice: { icon: "🍚", label: "Rice & Accompaniments" },
  extras: { icon: "🥗", label: "Extras" },
  accompaniments: { icon: "🧂", label: "Condiments" },
  beverages: { icon: "☕", label: "Beverages" },
  sweet: { icon: "🍮", label: "Sweet" },
};