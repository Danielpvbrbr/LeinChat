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
  areaImg: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 201,
  },
  coverPhoto: {
    height: 200,

  },
  camCoverIco: {
    width: 26,
    height: 25,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: 10,
    left: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camIco: {
    width: 25,
    height: 25,
    position: 'absolute',
    backgroundColor: '#00FFF0',
    bottom: -8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ciclePerfil: {
    width: 121,
    height: 121,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -55
  },
  photoPerfil: {
    width: 115,
    height: 115,
    borderRadius: 60,
  },
  areaPerfil: {
    height: 160,
  },
  areaEscorts: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  escorts: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleEscorts: {
    fontSize: 15,
    color: '#585858',
    fontWeight: '500',
  },
  textEscorts: {
    color: '#585858',
    fontWeight: 'bold',
    fontSize: 15,
  },
  areaInfoPerfil: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#585858',
    fontWeight: 'bold',
    fontSize: 16,
  },
  user: {
    color: '#585858',
    fontWeight: '400',
    marginTop: 5,
    fontSize: 14,
  },
  bio: {
    color: '#585858',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5
  },
  areaButton: {
    height: 51,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
