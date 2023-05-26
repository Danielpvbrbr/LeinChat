import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  nav: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  area: {
    flex: 1,
    height: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  search:{
    height: 40,
    borderBottomWidth:0.2,
    borderColor:'#E7E5E5'
  }
});
