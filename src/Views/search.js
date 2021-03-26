import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, Text, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Style } from './style';

const DATA = {
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg',
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg',
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Michael',
      last_name: 'Funke',
      avatar: 'https://reqres.in/img/faces/9-image.jpg',
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://reqres.in/img/faces/10-image.jpg',
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://reqres.in/img/faces/11-image.jpg',
    },
    {
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg',
    },
  ],
  data2: [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg',
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg',
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Michael',
      last_name: 'Funke',
      avatar: 'https://reqres.in/img/faces/9-image.jpg',
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://reqres.in/img/faces/10-image.jpg',
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://reqres.in/img/faces/11-image.jpg',
    },
    {
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg',
    },
  ],
  support: {
    url: 'https://reqres.in/#support-heading',
    text:
            'To keep ReqRes free, contributions towards server costs are appreciated!',
  },
};
export default function search() {
  const searchRef = useRef();
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);

  useEffect(() => {
    setData(DATA.data);
    setCopyData(DATA.data);
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>
        {item.first_name}
        {' '}
        {item.last_name}

      </Text>

    </View>
  );
  const ItemSeparator = () => (
    <View style={Style.ItemSeparator} />
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'height'}
      style={Style.Container}
    >
      <View style={Style.Page}>
        <View style={Style.SearchBarContainer}>
          <View style={Style.SearchBarIcon}>
            <Icon style={Style.Icon} name="search" size={17} color="#58555A" />
          </View>
          <View style={Style.SearchBar}>
            <TextInput
              style={Style.input}
              value={value}
              placeholder=" ID or Username.."
              placeholderTextColor="#A1A3A6"
              textAlign="left"
              ref={searchRef}
              onChangeText={text => {
                setValue(text);
                setData((copyData).filter(x => (
                  (x.first_name).includes(text))));
              }}
            />
          </View>
        </View>
        <View style={Style.Body}>

          <FlatList
            style={Style.FlatList}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparator}
            ListFooterComponent={ItemSeparator}
          />
          <View />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
