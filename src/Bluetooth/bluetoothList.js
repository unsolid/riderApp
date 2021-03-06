import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Layout from './bluetoothListLayout';
import Empty from './empty';
import Toggle from './toggle';
import Subtitle from './subtitle';
import Device from './device';

import BluetoothSerial from 'react-native-bluetooth-serial-next';

const BluetoothList = () => {
  const [device, setDevice] = useState('');
  const [list, setList] = useState([]);
  const [bolEnable, setBolEnable] = useState(false);
  const [paired, setPaired] = useState(false);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    async function init() {
      const enable = await BluetoothSerial.requestEnable();
      const list = await BluetoothSerial.list();
      setList(list);
      setBolEnable(enable);
      console.log(list);
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

  const pairDevice = async () => {
    try {
      const paired = await BluetoothSerial.pairDevice(id);
      if (paired) {
        console.log('paired');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectDevice = async () => {
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
    <Layout title="블루투스">
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

export default BluetoothList;
