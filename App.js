import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from "./component/SearchBar"
import Screen from "./component/Screen"
import FeaturedNews from "./component/featurednews"
import data from "./fakedata"
import BreakingNews from "./component/BreakingNews"
import TechNews from './component/TechNews';

const breakingNews = data.filter( item => item.category === "breaking-news")
const techNews = data.filter(item => item.category === "tech")

export default function App() {
  return (
    <Screen>
      <SearchBar/>
     <FeaturedNews item ={{
       id: "1",
       title: "This is the title no one.",
       desc:
         "Desc is the short form of description and this format is the actual same as our real database.",
       thumbnail: "http://lorempixel.com/400/200/",
       category: "breaking-news"

     }}/>
   <BreakingNews data={breakingNews}/>
   <BreakingNews data={breakingNews}/>
  
    </Screen>
  );
}


