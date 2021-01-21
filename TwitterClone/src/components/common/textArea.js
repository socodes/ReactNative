import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';

const TextArea = ({placeholder,onChangeText, value}) => {
    return(
        <View style={styles.TextAreaWrapper}>
            <TextInput placeholder={placeholder}
                       onChangeText={onChangeText}
                       multiline={true}
                       value={value}
                       style={styles.TextArea}/>
        </View>
    );
}

const styles = StyleSheet.create({
    TextArea:{
        height:200,
        color:'#7B8D93',
        fontSize:18
    },
    TextAreaWrapper:{
        borderWidth:1,
        borderColor: '#CFD8DC',
        height:200,
    }

})

export {TextArea};