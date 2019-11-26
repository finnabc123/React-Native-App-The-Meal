import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,

    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: '#6c756c',
        headerTitle: 'Help'
    },

})

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);