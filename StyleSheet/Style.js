import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    myStatusBar: {
        backgroundColor: "#8600b3"
    },
    // *****************Styling on OnBoardingScreen 1 2 3 starts***********************

    onBoardingScreenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        // flex: 0.5,
        justifyContent: "center",
        width: "90%",
        height: 400,
        // margin: 50
    },
    textViewStyle: {
        alignItems: "center",
    },
    paragraphStyle: {
        textAlign: "center",
        padding: 15,
        width: "70%",
        // height:100
    },
    headingTextStyle: {
        fontSize: 27,
        fontWeight: "700",
        marginTop: 20,
        textAlign: "center"
    },
    nextButtonStyle: {
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: "#8600b3",
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        borderRadius: 20
    },
    nextTextStyle: {
        color: "#fff"
    },
    skipButtonStyle: {
        marginTop: 20,
    },
    skipTextStyle: {
        color: 'orange',
        textDecorationLine: 'underline'
    },
    dot: {
        height: 12,
        borderRadius: 6,
        backgroundColor: "orange",
        marginHorizontal: 6,
        alignContent: "center",
        alignItems: "center",
        borderColor: 'grey',
        borderWidth: 1,
    },

    // **************************Styling of SignUpScreen starts***************************
    signUpContainer: {
        flex: 1,
        // flexDirection: 'column',
        backgroundColor: "#8600b3",
    },
    section1: {
        height: "40%",
    },
    section2: {
        margin: 10,
        padding: 20,
        backgroundColor: "white",
        height: "60%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    text: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 15
        // alignSelf: 'center',
    },
    signUpTextView: {
        alignItems: "center",
        height: 150,
        marginTop: 50
    },
    //********************** */ Personal Information Screen Styling*************************


})