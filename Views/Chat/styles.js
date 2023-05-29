import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  area: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 40,
    marginRight: 15,
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 0,
    backgroundColor: '#EEEEEE'
  },
  list: {
    width: '90%',
    flex: 1,
    marginTop:7
  },
  line: {
    width: '100%',
    height: 60,
    marginRight: 15,
    borderRadius: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:2,
    borderBottomWidth:0.2,
    borderBottomColor:'#E7E5E5'

  },
  lineInfo: {
    width: '80%',
  },
  online: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#00FF19',
    alignSelf:'flex-start',
    marginTop:15
  }
});
