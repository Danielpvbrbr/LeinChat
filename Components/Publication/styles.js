import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    width: 80,
    height: 102,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.4)',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    top: 0,
    paddingLeft: 3,
    paddingRight: 3
  },
  profile: {
    width: 280,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    width: 220,
    color: '#fff',
    fontWeight: '500',
  },
  footer: {
    height: 127,
    backgroundColor: 'rgba(255,255,255,0.4)',
    position: 'absolute',
    alignItems: 'center',
    zIndex: 1,
    bottom: 0,
  },
  nvIcon: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3
  },
  description: {
    color: '#fff'
  }


});
