"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecipeApp extends Model {
    static associate(models) {
    }
  }
  RecipeApp.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          minLengthForTitle(value) {
            if (value.length <= 3) {
              throw new Error(
                "Length of title can not be less than 3 characters."
              );
            }
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          maxLengthDescription(value) {
            if (value.length > 500) {
              throw new Error(
                "Length of description can not be more than 500 characters."
              );
            }
          },
        },
      },
      ingredients: {
        type: DataTypes.STRING,
        validate: {
          maxLengthIngredients(value) {
            if (value.length > 1000) {
              throw new Error(
                "Length of ingredients can not be more than 1000 characters."
              );
            }
          },
        },
      },
      instructions: {
        type: DataTypes.STRING,
        validate: {
          maxLengthInstructions(value) {
            if (value.length > 5000) {
              throw new Error(
                "Length of instructions can not be more than 5000 characters."
              );
            }
          },
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "RecipeApp",
      tableName: "recipe_apps", // Snake cased table name
      underscored: true, // This will converts camelCased columns to snake_case in the DB
    }
  );
  return RecipeApp;
};