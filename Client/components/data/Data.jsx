const Data = () => {
  const chowmin = [
    {
      name: "Veg Chow",
      priceNot: "70",
      price: "50",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Egg Chow",
      price: "60",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Chicken Chow",
      price: "70",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Mix Chow",
      price: "80",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Chicken Soup Chow",
      price: "80",
      image: require("../../assets/chowmin.png"),
    },
  ];
  const friedRice = [
    {
      name: "Veg Fried Rice",
      price: "50",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Egg Fried Rice",
      price: "60",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Chicken Fried Rice",
      price: "80",
      image: require("../../assets/chowmin.png"),
    },
  ];
  const mainCourse = [
    {
      name: "Rice/Roti Veg Thali",
      price: "50",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Rice/Roti Egg Thali",
      price: "60",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Rice/Roti Chicken Thali",
      price: "80",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Chili Chicken dry (6pc)",
      price: "60",
      image: require("../../assets/chowmin.png"),
    },
    {
      name: "Chili Chicken Gravy (5pc)",
      price: "80",
      image: require("../../assets/chowmin.png"),
    },
  ];
  const special = [
    {
      head1: "Today's Special Offer",
      head2: "on Special Burger",
      price: "50",
      image: require("../../assets/burger.png"),
    },
  ]

  return {
    chowmin,
    friedRice,
    mainCourse,
    special,
  };
};

export default Data;
