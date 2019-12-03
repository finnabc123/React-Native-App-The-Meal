import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

/* Custom Component for Filter*/
const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch trackColor={{ true: Colors.primaryColor }} thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''} value={props.value} onValueChange={props.onChange} />
    </View>
  );
}

const FiltersScreen = props => {

  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarin, setIsVegetarin] = useState(false);

  const saveFilters = useCallback(() => {
    console.log('Hello')
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarin
    }
    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarin])

  /* State change function */
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label='Gluten-free' value={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
      <FilterSwitch label='Lactose-free' value={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
      <FilterSwitch label='Vegan' value={isVegan} onChange={newValue => setIsVegan(newValue)} />
      <FilterSwitch label='Vegetarian' value={isVegetarin} onChange={newValue => setIsVegetarin(newValue)} />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;
