// How to use Currency Symbols in React Native
// https://aboutreact.com/react-native-currency-symbols/

// import React in our code
import React from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';

const CurrencySymbolsDemo = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    How to use Currency Symbols in React Native
        </Text>
                <ScrollView>
                    <View>
                        <Text style={styles.textStyle}> DOLLAR SIGN -- {'\u0024'}</Text>
                        <Text style={styles.textStyle}> CENT SIGN -- {'\u00A2'}</Text>
                        <Text style={styles.textStyle}> POUND SIGN -- {'\u00A3'}</Text>
                        <Text style={styles.textStyle}> YEN SIGN -- {'\u00A5'}</Text>
                        <Text style={styles.textStyle}>
                            {' '}
              ARMENIAN DRAM SIGN -- {'\u058F'}
                        </Text>
                        <Text style={styles.textStyle}> AFGHANI SIGN -- {'\u060B'}</Text>
                        <Text style={styles.textStyle}>
                            {' '}
              BENGALI RUPEE MARK -- {'\u09F2'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              BENGALI RUPEE SIGN -- {'\u09F3'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              BENGALI GANDA MARK -- {'\u09FB'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              GUJARATI RUPEE SIGN -- {'\u0AF1'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              TAMIL RUPEE SIGN -- {'\u0BF9'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              THAI CURRENCY SYMBOL BAHT -- {'\u0E3F'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              KHMER CURRENCY SYMBOL RIEL -- {'\u17DB'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              EURO-CURRENCY SIGN -- {'\u20A0'}
                        </Text>
                        <Text style={styles.textStyle}> COLON SIGN -- {'\u20A1'}</Text>
                        <Text style={styles.textStyle}> CRUZEIRO SIGN -- {'\u20A2'}</Text>
                        <Text style={styles.textStyle}>
                            {' '}
              FRENCH FRANC SIGN -- {'\u20A3'}
                        </Text>
                        <Text style={styles.textStyle}> LIRA SIGN -- {'\u20A4'}</Text>
                        <Text style={styles.textStyle}> MILL SIGN -- {'\u20A5'}</Text>
                        <Text style={styles.textStyle}> NAIRA SIGN -- {'\u20A6'}</Text>
                        <Text style={styles.textStyle}> PESETA SIGN -- {'\u20A7'}</Text>
                        <Text style={styles.textStyle}> RUPEE SIGN -- {'\u20A8'}</Text>
                        <Text style={styles.textStyle}> WON SIGN -- {'\u20A9'}</Text>
                        <Text style={styles.textStyle}> NEW SHEQEL SIGN -- {'\u20AA'}</Text>
                        <Text style={styles.textStyle}> DONG SIGN -- {'\u20AB'}</Text>
                        <Text style={styles.textStyle}> EURO SIGN -- {'\u20AC'}</Text>
                        <Text style={styles.textStyle}> KIP SIGN -- {'\u20AD'}</Text>
                        <Text style={styles.textStyle}> TUGRIK SIGN -- {'\u20AE'}</Text>
                        <Text style={styles.textStyle}> DRACHMA SIGN -- {'\u20AF'}</Text>
                        <Text style={styles.textStyle}>
                            {' '}
              GERMAN PENNY SIGN -- {'\u20B0'}
                        </Text>
                        <Text style={styles.textStyle}> PESO SIGN -- {'\u20B1'}</Text>
                        <Text style={styles.textStyle}> GUARANI SIGN -- {'\u20B2'}</Text>
                        <Text style={styles.textStyle}> AUSTRAL SIGN -- {'\u20B3'}</Text>
                        <Text style={styles.textStyle}> HRYVNIA SIGN -- {'\u20B4'}</Text>
                        <Text style={styles.textStyle}> CEDI SIGN -- {'\u20B5'}</Text>
                        <Text style={styles.textStyle}>
                            {' '}
              LIVRE TOURNOIS SIGN -- {'\u20B6'}
                        </Text>
                        <Text style={styles.textStyle}> SPESMILO SIGN -- {'\u20B7'}</Text>
                        <Text style={styles.textStyle}> TENGE SIGN -- {'\u20B8'}</Text>
                        <Text style={styles.textStyle}>
                            {' '}
              INDIAN RUPEE SIGN -- {'\u20B9'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              TURKISH LIRA SIGN -- {'\u20BA'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              NORDIC MARK SIGN -- {'\u20BB'}
                        </Text>
                        <Text style={styles.textStyle}> MANAT SIGN -- {'\u20BC'}</Text>
                        <Text style={styles.textStyle}> RUBLE SIGN -- {'\u20BD'}</Text>
                        <Text style={styles.textStyle}> LARI SIGN -- {'\u20BE'}</Text>
                        <Text style={styles.textStyle}> BITCOIN SIGN -- {'\u20BF'}</Text>
                        <Text style={styles.textStyle}>
                            {' '}
              NORTH INDIC RUPEE MARK -- {'\uA838'}
                        </Text>
                        <Text style={styles.textStyle}> RIAL SIGN -- {'\uFDFC'}</Text>
                        <Text style={styles.textStyle}>
                            {' '}
              SMALL DOLLAR SIGN -- {'\uFE69'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              FULLWIDTH DOLLAR SIGN -- {'\uFF04'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              FULLWIDTH CENT SIGN -- {'\uFFE0'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              FULLWIDTH POUND SIGN -- {'\uFFE1'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              FULLWIDTH YEN SIGN -- {'\uFFE5'}
                        </Text>
                        <Text style={styles.textStyle}>
                            {' '}
              FULLWIDTH WON SIGN -- {'\uFFE6'}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    textStyle: {
        marginTop: 10,
        color: '#646464',
        fontSize: 16,
    },
});

export default CurrencySymbolsDemo;
