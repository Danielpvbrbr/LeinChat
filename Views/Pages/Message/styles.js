import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FAF8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  area: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

  },
  areaMsg: {
    alignItems: 'center',
    paddingTop: 10,
    height: '91%'
  },
  msg: {
    maxWidth: 280,
    margin: 7,
    borderBottomStartRadius: 13,
    borderBottomEndRadius: 13,
    borderTopEndRadius: 13,
    padding: 8.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.23,
    shadowRadius: 4.62,

    elevation: 7,
  },
  emojiArea: {
    height: 310,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:'#fff'
  },
  textMsg: {
    fontSize: 10
  },
  text: {
    fontSize: 16
  },
  areaTextMsg: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.23,
    shadowRadius: 4.62,
    elevation: 9,
  },
  areaInputMsg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
    padding: 2,
    backgroundColor: '#F8F6F3'
  },
  inputMsg: {
    width: '68%',
    height: 50,
    paddingLeft: 10
  },


});
