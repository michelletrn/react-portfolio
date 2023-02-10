import { projectPlaceholder, noteTaker, codeQuiz, weatherDash } from "./assets";

const projects = [
  {
    title: "Note Taker",
    tech: "Express",
    description:
      "Note-taking application where users can create, delete, and open notes created.",
    link: "https://note-taker-app-mt.herokuapp.com/",
    github: "https://github.com/michelletrn/note-taker",
    photo: noteTaker,
    alt: "Note taker app screenshot",
  },
  {
    title: "Self Journal Post",
    tech: "Handlebars | MySQL | Express",
    description:
      "Journal posting application that requires user authentication. Users can see latest news articles, read/post/comment other users entries.",
    link: "https://self-journal-post.herokuapp.com/",
    github: "https://github.com/jennahopeclem/self-journal",
    photo: projectPlaceholder,
    alt: "Journal app screenshot",
  },
  {
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
    title: "Weather Dashboard",
    tech: "API | Bootstrap",
    description:
      "Application that displays a 4-day weather forecast based on user's inputted city. For each search a user makes, a button will render under 'Searched Cities' and can be clicked to reveal the forcast for that city.",
    link: "https://michelletrn.github.io/weather-dashboard/",
    github: "https://github.com/michelletrn/weather-dashboard",
    photo: weatherDash,
    alt: "Note taker app screenshot",
  },
  {
    title: "Coming Soon",
    tech: "MERN Stack",
    description:
      "Receipe app where users create suggested receipes, share recipes, and create post dishes created and comment on other user's posts.",
    link: "https://note-taker-app-mt.herokuapp.com/",
    github: "",
    photo: projectPlaceholder,
    alt: "mealplanner app screenshot",
  },
];

export { projects };