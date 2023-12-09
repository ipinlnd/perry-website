tailwind.config = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      gray: "#1C2938",
      lightGray: "#DDDDDD",
      hover: "#2D3030",
      red: "#CD3F3E",
      pink: "#FF9C91",
      white: "#F4F6F6",
      darkGreen: "#004225",
    },
    fontFamily: {
      title: ["title"],
      main: ["main"],
      comic: ["comic"],
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      },
    },
  },
  plugins: [],
};

openImage = function (url) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = url;
};

closeModal = function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  modalImg.src = null;
};
