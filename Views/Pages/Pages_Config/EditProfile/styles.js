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
  areaPhoto: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaOption: {
    width: '100%',
    marginTop: 65
  },
  select: {
    height: 50,
    marginBottom: 20,
  },
  buttonArea: {
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
    fontSize:16,
    paddingLeft: 7,
    color: '#222020'
  }
});
