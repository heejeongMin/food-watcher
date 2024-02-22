// ProfileScreen.js
import React, { useEffect, useState }from 'react';
import { View, StyleSheet, Text , Button,Modal, Alert, Pressable, SafeAreaView, ActivityIndicator} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { fetchProductDetail } from '../service/Api';

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisiable, setModalVisiable] = useState(false);
  const [productDetail, setProductDetail] = useState('');
  const [isLoading, setLoading] = useState(false);

  const showModal = (text) => {
    setProductDetail(text);
    setModalVisiable(true);
  }

  const hideModal = () => {
    setProductDetail('');
    setModalVisiable(false);
  }
  

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log(type, data);
    setScanned(true);
    setLoading(true);

    fetchProductDetail(data).then((result) => {
      setLoading(false);
      showModal(result);
      }
    )
  };

  if (hasPermission === null) {
    return <Text style={styles.centeredText}>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.centeredText}>No access to camera</Text>;
  }



  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
      {isLoading? (<ActivityIndicator/>) : (
          <SafeAreaView style={StyleSheet.CenteredView}>
          <Modal
            visible={modalVisiable}
            animationType="slide"
            transparent = {true}
            >
            <View 
              style={styles.CenteredView} 
              onTouchEnd = {() => hideModal()}
              >
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{productDetail}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => hideModal()}>
                    <Text style={styles.textStyle}>저장하기</Text>
                  </Pressable>
                </View>
          </View>

              {/* <Text style={StyleSheet.centeredText}>{productDetail}</Text> */}
              {/* <Button style={StyleSheet.ModalButton} title="Hide" onPress={hideModal}/> */}
          </Modal>
          </SafeAreaView>
      )}
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
  },
  CenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  }, 
  modalView: {
    margin: 20,
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
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});


export default ScanScreen;
