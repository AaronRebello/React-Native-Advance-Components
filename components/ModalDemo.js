import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Button, TouchableOpacity } from 'react-native'

class ModalDemo extends Component {
    state = {
        modalVisible: false,
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={styles.modal}>
                        <Text style={{padding:10}}>This post will give you an idea about How to Show a Modal in React Native for
                        Android and IOS. React Native Modal is a component to present content above an enclosing
                        view. This is supported by Android and IOs both. Modal contains its own view which is visible
                        when we open the modal. Here is a small example to show how can we make modal
                            in our React Native App.</Text>
                        <Button title="close modal" onPress={() => {
                            this.toggleModal(!this.state.modalVisible)
                        }}></Button>
                    </View>
                </Modal>

                <TouchableHighlight onPress={() => { this.toggleModal(true) }}>
                    <Text style={styles.text}>Open Modal</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
export default ModalDemo

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 30,
        margin: 20,
        borderRadius: 10
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink',
        margin: 10,
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
})