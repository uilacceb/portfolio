import p9 from "../../assets/projects/project9.png";
import p8 from "../../assets/projects/project8.png";
import p7 from "../../assets/projects/project7.png";
import p10 from "../../assets/projects/project10.png";
import p11 from "../../assets/projects/project11.png";
import p2 from "../../assets/projects/project2.png";
import p1 from "../../assets/projects/project1s.png";

const stacks = {
  Frontend: "frontend",
  FullStack: "full stack"
}

const expenseTracker = {
  title: "Expense Tracker",
  img: p9,
  description: "Stay on top of your finances with this easy-to-use expense tracking app! Effortlessly add, edit, and delete expenses, and keep your records organized by sorting transactions by amount or date. With Google login support, you can securely access your data anytime, anywhere.",
  technologies: "React, JS, TailwindCSS, node.js, MongoDB",
  url: "https://expense-project-frontend.vercel.app/",
  stack: stacks.FullStack
}
const TCGPShoppingCards = {
  title: "TCG Pocket shopping cards",
  img: p10,
  description: "Welcome to the TCG Pocket shopping cards app: Browse the complete, up-to-date library of pocket cards, filter them by rarity or pack, and “mock buy” the ones you want to plan your perfect collection.",
  technologies: "React, JS, CSS, node.js, MongoDB",
  url: "https://tcgp-frontend.vercel.app/",
  stack: stacks.FullStack
}
const VoiceToDo = {
  title: "Voice To do list App",
  img: p8,
  description: "A simple and intuitive mobile to-do list app that makes task management effortless. Users can add tasks by typing or using voice commands to speak the task name, eliminating the need for manual input. Perfect for staying organized on the go!",
  technologies: "React Native, TypeScript, Node.js, MongoDB, GoogleAI",
  url: "https://tcgp-frontend.vercel.app/",
  stack: stacks.FullStack
}
const FindGrant = {
  title: "Find Grant",
  img: p11,
  description:
    "FindGrant is your gateway to diverse funding opportunities across Canada, including small business, research, sustainability, and BIPOC grants P.S.This is a capstone project for findGrant Company",
  technologies: "React Native Web, Node.js",
  url: "https://findgrant.ca/",
  stack: stacks.FullStack
}
const PokemonFinder = {
  title: "Pokémon Finder",
  img: p7,
  description: "The Pokémon Finder is a simple app that lets you search for Pokémon by name or number. It fetches data from the PokéAPI and displays the Pokémon&#39;s official artwork along with its name. Supports en-US and zh-TW.",
  technologies: "React, JS, TailwindCSS",
  url: "https://pikachu-api.vercel.app/",
  stack: stacks.Frontend
}
const TheaterApp = {
  title: "Theater App",
  img: p2,
  description: "The Theatre App is designed to tackle the dispersed structure of the theatre industry, where details and ticket sales are frequently distributed across various platforms, websites, and physical venues.",
  technologies: "React, JS, CSS, Node.js, MongoDB",
  url: "https://theater-app-frontend.vercel.app/",
  stack: stacks.FullStack
}


const FancyCounter = {
  title: "Fancy counter",
  img: p1,
  description: "Count up to 5 with basic version. Unlock the pro version to keep counting beyond 5!You can use space to increase the number.",
  technologies: "React, JS",
  url: "https://new-fancy-counter.vercel.app/",
  stack: stacks.Frontend
}



export const projects = [expenseTracker, TCGPShoppingCards, VoiceToDo, FindGrant, PokemonFinder, TheaterApp, FancyCounter];