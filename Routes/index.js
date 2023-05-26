import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, StyleSheet, StatusBar, LogBox } from 'react-native';

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
    const { height, width } = Dimensions.get('window');

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {true ?
                <AppRoutes height={Number(height.toFixed(0))} width={Number(width.toFixed(0))} />
                :
                <AuthRoutes />
            }
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    }
});
export default Routes;