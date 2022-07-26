// imports
import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

// local imports
import OrderTrackingHeaderComponent from './components/OrderTrackingHeader/orderTrackingHeader.component';
import OrderTrackingPartnerInfo from './components/OrderTrackingPartnerInfo/orderTrackingPartnerInfo.component';
import OrderTrakingStyles from './orderTracking.styles';
import MapViewComponent from './components/MapView/mapView.component';
import {DemoAppTheme} from './themes';

const OrderTrackingScreen = () => {
  return (
    <SafeAreaView style={OrderTrakingStyles.orderTrackingContainer}>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle="dark-content"
        showHideTransition="slide"
        backgroundColor={DemoAppTheme.colors.green_1}
      />
      <View style={OrderTrakingStyles.orderTrackingHeaderContainer}>
        <OrderTrackingHeaderComponent />
      </View>
      <View style={OrderTrakingStyles.orderTrackingMapContainer}>
        <Text>Map Section</Text>
        {/* <MapViewComponent /> */}
      </View>
      <View style={OrderTrakingStyles.orderTrackingBottomContainer}>
        <OrderTrackingPartnerInfo />
      </View>
    </SafeAreaView>
  );
};

export default OrderTrackingScreen;
