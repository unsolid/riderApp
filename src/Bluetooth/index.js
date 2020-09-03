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

import BluetoothSerial, {isConnected} from 'react-native-bluetooth-serial-next';

const Bluetooth = () => {
  const [device, setDevice] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [list, setList] = useState([]);
  const [bolEnable, setBolEnable] = useState(false);
  const [connectedState, setConnectedState] = useState(false);
  const [readA, setReadA] = useState('읽은게 없음');
  const [readB, setReadB] = useState('읽은게 없음');

  useEffect(() => {
    async function init() {
      const enable = await BluetoothSerial.requestEnable();
      const list = await BluetoothSerial.list();
      const isConnected = await BluetoothSerial.isConnected();
      setList(list);
      setBolEnable(enable);
      console.log(list);
      console.log(isConnected);
      console.log(connectedState);

      // readOnly();
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

        setConnectedState(true);
        setDeviceId(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRead = async () => {
    try {
      const data = await BluetoothSerial.readFromDevice(deviceId);
      console.log(data);
      if (data == 1) {
        setReadA(data);
      }
      if (data == 2) {
        setReadB(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const write = async () => {
    try {
      await BluetoothSerial.device(deviceId).write('콜 받을꺼에요?');
      console.log('Successfuly wrote to device');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleMessage = () => {
    return write();
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

      {connectedState ? (
        <TouchableOpacity onPress={handleMessage}>
          <Text>its connected</Text>
        </TouchableOpacity>
      ) : (
        <Text>it ain't connected </Text>
      )}
      {connectedState ? (
        <TouchableOpacity onPress={handleRead}>
          <Text>read data</Text>
        </TouchableOpacity>
      ) : (
        <Text> </Text>
      )}
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
