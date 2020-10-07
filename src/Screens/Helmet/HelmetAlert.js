import React, {useRef} from 'react';
import AlertPro from 'react-native-alert-pro';

const HelmetAlert = () => {
  const alertRef = useRef();
  return (
    <AlertPro
      ref={alertRef}
      onConfirm={() => AlertPro.close()}
      title="Delete confirmation"
      message="Are you sure to delete the entry?"
      textCancel="Cancel"
      textConfirm="Delete"
      customStyles={{
        mask: {
          backgroundColor: 'transparent',
        },
        container: {
          borderWidth: 1,
          borderColor: '#9900cc',
          shadowColor: '#000000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        buttonCancel: {
          backgroundColor: '#4da6ff',
        },
        buttonConfirm: {
          backgroundColor: '#ffa31a',
        },
      }}
    />
  );
};

export default HelmetAlert;
