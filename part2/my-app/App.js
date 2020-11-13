import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
        <View>
            <TextInput
                placeholder={'Course Goal'}
                style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    padding: 10
                }}
            />
            <Button title={'ADD'} />
        </View>
        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
