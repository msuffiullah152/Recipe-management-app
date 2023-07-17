"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recipe_apps",
      [
        {
          title: "Spaghetti",
          description:
            "Classic Italian pasta dish with meat sauce.",
          ingredients:
            "8 ounces spaghetti, 1 tablespoon olive oil, 1 onion (chopped), 2 cloves garlic (minced), 1 pound ground beef, 1 can diced tomatoes, 1 can tomato sauce, 1 teaspoon dried basil, 1 teaspoon dried oregano, Salt and pepper to taste, Grated Parmesan cheese for serving",
          instructions:
            "1. Cook spaghetti according to package instructions. 2. In a large skillet, heat olive oil over medium heat. Add onion and garlic, sauté until softened. 3. Add ground beef, cook until browned. Drain excess fat. 4. Stir in diced tomatoes, tomato sauce, basil, oregano, salt, and pepper. Simmer for 20 minutes. 5. Serve the meat sauce over cooked spaghetti. Sprinkle with grated Parmesan cheese.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipe_apps", null, {});
    
  },
};