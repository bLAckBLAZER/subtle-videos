import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    description: "All categories",
  },
  {
    _id: uuid(),
    categoryName: "naruto",
    description:
      "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
  },
  {
    _id: uuid(),
    categoryName: "one piece",
    description:
      "Monkey D. Luffy wants to become the King of all pirates. Along his quest he meets: a skilled swordsman named Roronoa Zolo; Nami, a greedy thief who has a knack for navigation; Usopp, a great liar who has an affinity for inventing; Sanji, a warrior cook; Chopper, a sentient deer who is also a skilled physician; and Robin, former member of Baroque Works. The gang sets sail to unknown seas in Grand Line to find the treasure of One Piece.",
  },
  {
    _id: uuid(),
    categoryName: "bleach",
    description:
      "Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace",
  },
  {
    _id: uuid(),
    categoryName: "demon slayer",
    description:
      "A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.",
  },
];
