/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import CodePush from 'react-native-code-push'
import DeviceInfo from 'react-native-device-info';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        getUniqueID: DeviceInfo.getUniqueID(),
        getManufacturer: DeviceInfo.getManufacturer(),
        getBrand: DeviceInfo.getBrand(),
        getModel: DeviceInfo.getModel(),
        getDeviceId: DeviceInfo.getDeviceId(),
        getSystemName: DeviceInfo.getSystemName(),
        getSystemVersion: DeviceInfo.getSystemVersion(),
        getBundleId: DeviceInfo.getBundleId(),
        getApplicationName: DeviceInfo.getApplicationName(),
        getBuildNumber: DeviceInfo.getBuildNumber(),
        getVersion: DeviceInfo.getVersion(),
        getReadableVersion: DeviceInfo.getReadableVersion(),
        getDeviceName: DeviceInfo.getDeviceName(),
        getUserAgent: DeviceInfo.getUserAgent(),
        getDeviceLocale: DeviceInfo.getDeviceLocale(),
        getDeviceCountry: DeviceInfo.getDeviceCountry(),
        getTimezone: DeviceInfo.getTimezone(),
        getInstanceID: DeviceInfo.getInstanceID(),
        getInstallReferrer: DeviceInfo.getInstallReferrer(),
        // isEmulator: () => boolean;
        // isTablet: () => boolean;
        // getFontScale: () => number;
        // is24Hour: () => boolean;
        // isPinOrFingerprintSet: (cb: (isPinOrFingerprintSet: boolean) => void) => void;
        // getFirstInstallTime: () => number;
        // getLastUpdateTime: () => number;
        // getSerialNumber: DeviceInfo.getBundleId(),
        // getIPAddress: () => Promise<string>
        // getMACAddress: () => Promise<string>
        // getPhoneNumber: DeviceInfo.getBundleId(),
        // getAPILevel: () => number;
        // getCarrier: DeviceInfo.getBundleId(),
        // getTotalMemory: () => number;
        // getMaxMemory: () => number;
        // getTotalDiskCapacity: () => number;
        // getFreeDiskStorage: () => number;
        // getBatteryLevel: () => Promise<number>
    }

    componentDidMount() {
        CodePush.sync({
            // updateDialog: true,
            installMode: CodePush.InstallMode.IMMEDIATE,
            mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        })
    }

    render() {
        const {
            getUniqueID,
            getManufacturer,
            getBrand,
            getModel,
            getDeviceId,
            getSystemName,
            getSystemVersion,
            getBundleId,
            getApplicationName,
            getBuildNumber,
            getVersion,
            getReadableVersion,
            getDeviceName,
            getUserAgent,
            getDeviceLocale,
            getDeviceCountry,
            getTimezone,
            getInstanceID,
            getInstallReferrer,
        } = this.state
        return (
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.instructions}>唯一id：{getUniqueID}</Text>
                    <Text style={styles.instructions}>生产厂家：{getManufacturer}</Text>
                    <Text style={styles.instructions}>{getBrand}</Text>
                    <Text style={styles.instructions}>{getModel}</Text>
                    <Text style={styles.instructions}>设备号： {getDeviceId}</Text>
                    <Text style={styles.instructions}>系统名：{getSystemName}</Text>
                    <Text style={styles.instructions}>系统版本：{getSystemVersion}</Text>
                    <Text style={styles.instructions}>bundleID：{getBundleId}</Text>
                    <Text style={styles.instructions}>应用名：{getApplicationName}</Text>
                    <Text style={styles.instructions}>bundleId版本：{getBuildNumber}</Text>
                    <Text style={styles.instructions}>app版本号：{getVersion}</Text>
                    <Text style={styles.instructions}>可读版本：{getReadableVersion}</Text>
                    <Text style={styles.instructions}>设备名：{getDeviceName}</Text>
                    <Text style={styles.instructions}>UserAgent：{getUserAgent}</Text>
                    <Text style={styles.instructions}>getDeviceLocale：{getDeviceLocale}</Text>
                    <Text style={styles.instructions}>getDeviceCountry：{getDeviceCountry}</Text>
                    <Text style={styles.instructions}>getTimezone：{getTimezone}</Text>
                    <Text style={styles.instructions}>getInstanceID：{getInstanceID}</Text>
                    <Text style={styles.instructions}>getInstallReferrer：{getInstallReferrer}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    instructions: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        // // textAlign: 'center',
        // color: '#333333',
        marginBottom: 5,
    },
});
