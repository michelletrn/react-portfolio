import { projectPlaceholder, noteTaker, codeQuiz, weatherDash, recipefinder } from "./assets";

const projects = [
  {
    id: 1,
    title: "recipefinder | Front-end",
    tech: "MERN Stack | Stripe | JWT",
    description:
      "Receipe app where users search recipes by searching by name, ingredient, cuisine, and category. Once logged in, users gain the ability to save their recipes to their personal profiles and email their shopping list. This application also has Stripe implemented were users can add the ingredient items to their cart and checkout.",
    link: "https://k-meal-planner.herokuapp.com/",
    github: "https://github.com/michelletrn/k-meal-planner",
    photo: recipefinder,
    alt: "mealplanner app screenshot",
  },
  {
    id: 2,
    title: "Self Journal Post | Back-end",
    tech: "Handlebars | MySQL | Express",
    description:
      "Journal posting application that requires user authentication. Users can see latest news articles, read/post/comment other users entries.",
    link: "https://self-journal-post.herokuapp.com/",
    github: "https://github.com/jennahopeclem/self-journal",
    photo: projectPlaceholder,
    alt: "Journal app screenshot",
  },
  {
    id: 3,
    title: "Note Taker | Back-end",
    tech: "Express",
    description:
      "Note-taking application where users can create, delete, and open notes created.",
    link: "https://note-taker-app-mt.herokuapp.com/",
    github: "https://github.com/michelletrn/note-taker",
    photo: noteTaker,
    alt: "Note taker app screenshot",
  },
  {
    id: 4,
    title: "Code Quiz Game",
    tech: "Javascript",
    description:
      "Timed quiz game created from scratch to demonstrate knowledge in ability to update HTML and CSS dynamically using pure Javascript.",
    link: "https://michelletrn.github.io/Mod4-Code-Quiz/",
    github: "https://github.com/michelletrn/Mod4-Code-Quiz",
    photo: codeQuiz,
    alt: "Quiz game screenshot",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    tech: "API | Bootstrap",
    description:
      "Application that displays a 5-day weather forecast based on user's inputted city. For each search a user makes, a button will render under 'Searched Cities' and can be clicked to reveal the forcast for that city.",
    link: "https://michelletrn.github.io/weather-dashboard/",
    github: "https://github.com/michelletrn/weather-dashboard",
    photo: weatherDash,
    alt: "Note taker app screenshot",
  },
];

export { projects };