import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

import BluetoothSerial, {isConnected} from 'react-native-bluetooth-serial-next';

const Delievery = () => {
  const [device, setDevice] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [helmetStatus, setHelmetStatus] = useState(false);

  useEffect(() => {
    async function init() {
      const enable = await BluetoothSerial.requestEnable();
      const list = await BluetoothSerial.list();
      const isConnected = await BluetoothSerial.isConnected();
      console.log(isConnected);
    }
    init();
    return () => {
      async function remove() {
        await BluetoothSerial.stopScanning();
        console.log('termino scanning');
      }
    };
    remove();
  }, []);

  const connectDevice = async (id) => {
    try {
      const connected = await BluetoothSerial.device(id).connect();
      if (connected) {
        console.log('connected');

        setConnectedState(true);
        setDeviceId(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const helmetRead = async () => {
    try {
      const data = await BluetoothSerial.readFromDevice(deviceId);
      console.log(data);
      if (data == 1) {
        setHelmetStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleHelmet = () => {
    connectDevice(id);
    helmetRead();

    if (helmetStatus) canDeliever();
    else canNotDeliever();
  };

  return (
    <Button title="배달 시작" onPress={handleHelmet} />
    //   {connectedState ? (
    //     <TouchableOpacity onPress={handleMessage}>
    //       <Text>its connected</Text>
    //     </TouchableOpacity>
    //   ) : (
    //     <Text>it ain't connected </Text>
    //   )}
    //   {connectedState ? (
    //     <TouchableOpacity onPress={handleRead}>
    //       <Text>read data</Text>
    //     </TouchableOpacity>
    //   ) : (
    //     <Text> </Text>
    //   )}
  );
};

export default Delievery;
