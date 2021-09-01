import React from 'react';

import Tab from 'react-native-elements';
import { View } from 'react-native';


export default function FullWidthTabs(index, setIndex) {

  return (
    <View>
        
        <Tab value={index} onChange={setIndex}>
        <Tab.Item title="recent" />
        <Tab.Item title="favorite" />
        <Tab.Item title="cart" />
        </Tab>

        <TabView value={index} onChange={setIndex} >
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
            <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
            <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
            <Text h1>Cart</Text>
        </TabView.Item>
        </TabView>
    </View>
  );
}