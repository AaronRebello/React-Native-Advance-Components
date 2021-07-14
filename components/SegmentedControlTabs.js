
// Segmented Control Tab in React Native for Android and iOS
// https://aboutreact.com/react-native-segmented-control-tab/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use 
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// importing Segmented Control Tab
import SegmentedControlTab from 'react-native-segmented-control-tab';

const SegmentedControlTabs = () => {
  // For single select SegmentedControlTab
  const [selectedIndex, setSelectedIndex] = useState(0);
  // For multi select SegmentedControlTab
  const [selectedIndices, setSelectedIndices] = useState([0]);
  // For custom SegmentedControlTab
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleSingleIndexSelect = (index) => {
    // For single Tab Selection SegmentedControlTab
    setSelectedIndex(index);
  };

  const handleMultipleIndexSelect = (index) => {
    // For multi Tab Selection SegmentedControlTab
    if (selectedIndices.includes(index)) {
      console.log(selectedIndices.filter((i) => i !== index));
      //if included in the selected array then remove
      setSelectedIndices(selectedIndices.filter((i) => i !== index));
    } else {
      //if not included in the selected array then add
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleCustomIndexSelect = (index) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    setCustomStyleIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Simple Segmented Control*/}
        <Text style={styles.headerText}>
          Simple Segmented Control with Single Selection
        </Text>
        <SegmentedControlTab
          values={['Segment One', 'Segment two']}
          selectedIndex={selectedIndex}
          style={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
        />
        <View style={styles.seperator} />

        {/* Additional badges in Simple Segmented Control*/}
        <Text style={styles.headerText}>
          Simple Segmented Control with Single Selection + Badges
        </Text>
        <SegmentedControlTab
          badges={[12, 24]}
          values={['Segment One', 'Segment two']}
          selectedIndex={selectedIndex}
          onTabPress={handleSingleIndexSelect}
        />
        <View style={styles.seperator} />

        {/* Simple Segmented Control with multi Select*/}
        <Text style={styles.headerText}>
          Simple Segmented Control with Multiple Selection
        </Text>
        <SegmentedControlTab
          values={['Segment One', 'Segment two', 'Segment Three']}
          multiple
          //You need to add the multiple as conpared to single select
          selectedIndices={selectedIndices}
          //pass the selected index array for the default selection
          onTabPress={handleMultipleIndexSelect}
          //Pushing the selected option index in selected item array
        />
        <View style={styles.seperator} />
        <Text style={styles.headerText}>
          Custom segmented control with custom styles
        </Text>

        {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={['one', 'two']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
          tabStyle={{
            backgroundColor: '#F2F2F2',
            borderWidth: 0,
            borderColor: 'transparent',
          }}
          activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
          tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#888888' }}
        />
        {customStyleIndex === 0 && (
          <Text style={styles.tabContent}> Tab one</Text>
        )}
        {customStyleIndex === 1 && (
          <Text style={styles.tabContent}> Tab two</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SegmentedControlTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
});
