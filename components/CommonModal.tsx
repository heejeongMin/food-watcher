// import React, {useState} from 'react';
// import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

// export const CommonModal = ({
//   message,
//   title,
//   visible,
//   onConfirm,
// }: {
//   title: string;
//   message: string;
//   visible: boolean;
//   onConfirm: () => void;
// }) => {
//   return (
//     <Modal isVisible={visible} backdropTransitionOutTiming={0}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>{title}</Text>
//         <Text style={styles.messageText}>{message}</Text>
//         <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
//           <Text style={styles.confirmButtonText}>Ok</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });