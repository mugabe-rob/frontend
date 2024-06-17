import menu_1 from './1.jpg'
import menu_2 from './2.jpg'
import menu_3 from './3.jpg'

import menu_5 from './beef.jpg'
import menu_6 from './beer.jpg'
import menu_7 from './chicken.jpg'
import menu_8 from './wine.jpg'
import logo from './logo.svg'
import search from './search-icon.png'
import basket_icon from './cart.png'
import bag from './bag.png'
import stars from './rating_icon.png'
import china_food from './chinese.jpg'
import add_icon from './add.png'
import remove_icon from './remove_icon_red.png'
import add_icon_black from './add_icon_green.png'

export const assets = {
    menu_1,
    menu_2,
    menu_3, 
    menu_5,
    menu_6,
    menu_7,
    menu_8,
    logo,
    search,
    basket_icon,
    bag,
    stars,
    china_food,
    add_icon,
    remove_icon,
    add_icon_black
}
export const menu_list = [
    {
        menu_name: "Italian Dish",
        menu_image: menu_1,
    },
    {
        menu_name: "American Salad",
        menu_image: menu_2,
    },
    {
        menu_name: "Turkish Kebab",
        menu_image: menu_3,
    },
    {
        menu_name: "Chinese Beef",
        menu_image: menu_5,
    },
    {
        menu_name: "Beer",
        menu_image: menu_6,
    },
    {
        menu_name: "Chicken",
        menu_image: menu_7,
    },
    {
        menu_name: "British Cocktail",
        menu_image: menu_8,
    },
    {
        menu_name: "Chinese Dish",
        menu_image: china_food,
    }
]
export const food_list = [
    {
        _id: "1",
        name: "Spaghetti Carbonara",
        image: menu_1,
        price: 12,
        description: "Spaghetti Carbonara is a classic pasta dish that is simple to make and tastes great.",
        category: "Italian Dish"
    },
    {
        id: "2",
        name: "Caesar Salad",
        image: menu_2,
        price: 8,
        description: "Caesar Salad is a classic salad that is made with romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
        category: "American Salad"
    },
    {
        id: "3",
        name: "Doner Kebab",
        image: menu_3,
        price: 10,
        description: "Doner Kebab is a popular street food in Turkey that is made with meat that is cooked on a vertical rotisserie. ",
        category: "Turkish Kebab"
    },
    {
        id: "5",
        name: "Beef and Broccoli",
        image: menu_5,
        price: 15,
        description: "Beef and Broccoli is a classic Chinese dish that is made with beef, broccoli, and a savory sauce. ",
        category: "Chinese Beef"
    },
    {
        id: "6",
        name: "Beer",
        image: menu_6,
        price: 5,
        description: "Beer is a popular alcoholic beverage that is made from fermented grains. ",
        category: "Beer"
    },
    {
        id: "7",
        name: "Roast Chicken",
        image: menu_7,
        price: 12,
        description: "Roast Chicken is a classic dish that is made by roasting a whole chicken in the oven. ",
        category: "Chicken"
    },
    {
        id: "8",
        name: "British Cocktail",
        image: menu_8,
        price: 10,
        description: "British Cocktail is a classic cocktail that is made with gin, lemon juice, sugar, and soda water.",
        category: "British Cocktail"
    },
    {
        id: "9",
        name: "Chinese Dish",
        image: china_food,
        price: 10,
        description: "Chinese Dish is a classic Chinese dish that is made with beef, broccoli, and a savory sauce. ",
        category: "Chinese Dish"
    }
]