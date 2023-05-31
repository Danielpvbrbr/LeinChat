import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  area: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#999999',
    fontSize: 15,
    padding:8
  },
  buttonArea: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textbtn: {
    fontSize: 16,
    paddingLeft: 7,
    color: '#222020'
  }
});
