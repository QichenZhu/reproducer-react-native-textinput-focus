import React, {useEffect, useRef} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function App() {
  const textInputRef = useRef(null);

  useEffect(() => {
    textInputRef.current?.focus?.();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', paddingTop: 30}}>
      <TextInput ref={textInputRef} placeholder="TextInput" style={{height: 50}} />
      <Button title="Focus" onPress={() => textInputRef.current?.focus?.()} />
      <Button title="Blur" onPress={() => textInputRef.current?.blur?.()} />
    </View>
  );
}

export default App;
