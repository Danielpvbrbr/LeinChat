import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  area: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  areaContent: {
    height: 320,
    marginTop: 10,
    borderColor: '#D9D9D9',
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  areaImg: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    width: '100%',
    height: 320,
    borderRadius: 11,
    borderColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgMin: {
    width: 50,
    height: 50,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FF9900',
    borderColor: '#FF9900',
    margin: 3
  },
  form: {
    borderColor: '#D9D9D9',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#F4F2F2',
    borderRadius: 4
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    height: 50,
    justifyContent: 'space-between',
    borderRadius: 8,
    backgroundColor: '#FF9900',
    flexDirection:'row',
    alignItems: 'center',
    marginTop:20,
    paddingEnd:10
  },
  areaButton:{
    width:'60%',
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize:15,
    textAlign:'right'

  }

});
