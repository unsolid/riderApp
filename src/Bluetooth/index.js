import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Seperator from './seperator';
import Layout from './bluetoothListLayout';
import Empty from './empty';
import Toggle from './toggle';
import Subtitle from './subtitle';

import BluetoothSerial from 'react-native-bluetooth-serial-next';

const Bluetooth = () => {
  const [device, setDevice] = useState('');
  const [list, setList] = useState([]);
  const [bolEnable, setBolEnable] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [paired, setPaired] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    async function init() {
      const enable = await BluetoothSerial.requestEnable();
      const list = await BluetoothSerial.list();
      const isConnected = await BluetoothSerial.isConnected();
      setList(list);
      setBolEnable(enable);
      setIsConnected(true);
      console.log(list);
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

  const enableBluetooth = async () => {
    try {
      await BluetoothSerial.requestEnable();
      const list = await BluetoothSerial.list();
      await BluetoothSerial.stopScanning();
      setBolEnable(true);
      setList(list);
    } catch (error) {
      console.log(error);
    }
  };

  const disableBluetooth = async () => {
    try {
      await BluetoothSerial.disable();
      await BluetoothSerial.stopScanning();
      setBolEnable(false);
      setList([]);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleBluetooth = ({value}) => {
    if (value) {
      return enableBluetooth();
    }
    disableBluetooth();
  };

  const Device = ({name, setDevice, iconLeft, id}) => {
    const handlePress = () => {
      console.log(id);
      pairDevice(id);
      connectDevice(id);
    };
    return (
      <>
        <TouchableOpacity style={styles.wrapper} onPress={handlePress}>
          <View style={styles.wrapperLeft}>
            <Image style={styles.iconLeft} source={iconLeft} />
          </View>
          <View style={styles.wrapperName}>
            <Text style={styles.name}> {name}</Text>
          </View>
        </TouchableOpacity>
        <Seperator />
      </>
    );
  };

  const pairDevice = async (id) => {
    try {
      const paired = await BluetoothSerial.pairDevice(id);
      if (paired) {
        console.log('paired');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectDevice = async (id) => {
    try {
      const connected = await BluetoothSerial.device(id).connect();
      if (connected) {
        console.log('connected');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderEmpty = () => {
    return <Empty text="연결가능한 디바이스가 없습니다" />;
  };

  const renderItem = ({item}) => {
    return <Device {...item} iconLeft={'굿'} setDevice={setDevice} />;
  };

  return (
    <Layout>
      <Toggle value={bolEnable} onValueChange={toggleBluetooth} />
      <Subtitle title="연결 가능 디바이스" />
      <FlatList
        data={list}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default Bluetooth;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperName: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconLeft: {
    width: 20,
    height: 20,
  },
});
