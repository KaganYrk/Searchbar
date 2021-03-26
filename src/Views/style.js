import { StyleSheet, Platform, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Style = StyleSheet.create({

  SearchBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    padding: Platform.OS === 'android' ? 40 : 0,
    justifyContent: 'center',
    zIndex: 3,
  },
  SearchBarIcon: {
    position: 'absolute',
  },
  SearchBar: {
    width: windowWidth / (5 / 4),
  },
  Body: {
    paddingTop: windowHeight / 8,
    flex: 1,
    color: 'black',
    backgroundColor: '#F29F05',
    alignItems: 'center',
  },
  Icon: {
    position: 'absolute',
    backgroundColor: '#76777B',
    top: windowHeight / 15,
    right: windowWidth / 3.1,
    zIndex: 2,
  },
  input: {
    paddingLeft: 35,
    color: 'white',
    borderWidth: 0,
    borderRadius: 8,
    paddingVertical: 7,
    backgroundColor: '#76777B',
  },
  Container: {
    flex: 1,
  },
  Page: {
    flex: 1,
  },
  ItemSeparator: {
    height: 1,
    marginVertical: 10,
    backgroundColor: 'white',
    width: windowWidth / (5 / 4),
  },
});
