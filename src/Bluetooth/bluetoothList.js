import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Layout from './bluetoothListLayout';
import Empty from './empty';
import Toggle from './toggle';
import Subtitle from './subtitle';
import Bluetooth from 'react-native-bluetooth-serial-next';

const BluetoothList = () => {
  const list = [
    {
      name: '아두이노 블루투스',
      key: 1,
    },
    {
      name: '라즈베리파이 블루투스',
      key: 2,
    },
  ];

  const renderEmpty = () => {
    <Empty text="연결가능한 디바이스가 없습니다" />;
  };

  return (
    <Layout title="블루투스">
      <Toggle />
      <Subtitle title="연결 가능 디바이스" />
      <FlatList
        data={list}
        ListEmptyComponent={renderEmpty}
        renderItem={({item}) => <Text style={{fontSize: 20}}>{item.name}</Text>}
      />
    </Layout>
  );
};

export default BluetoothList;
