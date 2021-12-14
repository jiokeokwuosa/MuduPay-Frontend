import React, {useState, useEffect} from 'react';
import { 
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateArticle } from './../../redux/actions/articleActions';

const EditPlan = ({show,setShow, title, index}) => { 
    const dispatch = useDispatch()
    useEffect(() => {
      setNewTitle(title)        
    }, []);
    
    const [newTitle, setNewTitle] = useState('');
  
   
    const handleUpdateTask = () =>{        
        if(newTitle){
          const data = {
            text:newTitle,
            completed:false        
          }         
          dispatch(updateArticle(data,index))
          // setNewTitle('')        
        }   
        setShow(false)     
    }
    
    return ( 
        <>       
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}       
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={[styles.text,styles.heading]}>Edit Item</Text>
                    <TextInput
                        style={[styles.text,styles.textInput]} 
                        placeholder='Type here...'
                        onChangeText={text => setNewTitle(text)}
                        defaultValue={newTitle}
                    />                   
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={handleUpdateTask}
                    >                     
                    <View style={styles.submitButton}>
                        <Text style={[styles.text, styles.buttonText]}>UPDATE</Text>
                    </View>
                    </TouchableOpacity>   
                </View>
            </View>
        </Modal>        
        </> 
    );
};

const styles = StyleSheet.create({ 
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:'80%'
  },
  heading:{
      fontSize:20
  },
  textInput:{     
    height:40,
    borderBottomWidth:0.7,
    borderBottomColor:'black',
    marginBottom:10,
    fontSize:14,
    marginTop:10,
    width:'100%'
  },
  text:{
    fontFamily:'monospace',
    color:'#20232a',
    fontSize:18
  },
  submitButton:{
    backgroundColor: '#6A5ACD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 7,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 15    
  },
  buttonText:{
    color:'white'   
  },
  timeBox:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      marginVertical:10
  },
  timeBoxText:{
      fontSize:12
  }
});


export default EditPlan;
