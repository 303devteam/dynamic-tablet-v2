import Navigation from './navigation';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import axios from 'axios';

export default function AnnualLog({navigation}) {
    const [fontLoaded, setFontLoaded] = useState(false)
    const [annualLog, setAnnualLog] = useState([])
    let total = 0

    useEffect(() => {
        axios.get('https://dynamic-routes-f4txc.ondigitalocean.app/annualLog').then(res => {
            setAnnualLog(res.data)
        })
    }, [])

    return(
        <>
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/dynamiclogo.png')}
                    style={styles.logo}
                />
                <Navigation navigation={navigation} />
                <View style={styles.rightSection}>
                    <View style={styles.sectionHead}>
                        <Image
                            source={require('../assets/images/calendar2.png')}
                            style={{width: 40, height:42}}
                        />
                        <Text style={styles.sectionTitle}>ANNUAL LOG</Text>
                    </View>
                    <ScrollView style={styles.innerContainer} stickyHeaderIndices={[0]}>
                        <View>
                            <View style={styles.tableHead}>
                                <Text style={styles.tableHeadText}>{'Year'}</Text>
                                <Text style={styles.tableHeadText}>{'Commercial\nRevenue'}</Text>
                                <Text style={styles.tableHeadText}>{'Member\nRevenue'}</Text>
                                <Text style={styles.tableHeadText}>{'Private Member\nRevenue'}</Text>
                                <Text style={styles.tableHeadText2}>TOTAL</Text>
                            </View>
                        </View>
                        {
                            annualLog.map((item, index) => {
                                total += item.commercial_revenue + item.private_member_revenue + item.member_revenue;
                                return(
                                    <View key={index} style={styles.tableEntry}>
                                        <Text style={styles.tableEntryText}>{item.year}</Text>
                                        <Text style={styles.tableEntryText}>{(item.commercial_revenue).toFixed(2)}KM</Text>
                                        <Text style={styles.tableEntryText}>{(item.member_revenue).toFixed(2)}KM</Text>
                                        <Text style={styles.tableEntryText}>{(item.private_member_revenue).toFixed(2)}KM</Text>
                                        <Text style={styles.tableEntryText}>{(item.commercial_revenue + item.member_revenue + item.private_member_revenue).toFixed(2)}KM</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={styles.tableFooter}>
                        <Text style={styles.tableFooterText}>TOTAL:</Text>
                        <Text style={styles.tableFooterText}>{total.toFixed(2)}KM</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 40,
        backgroundColor: '#201E21',
        display: 'flex',
        flexDirection: 'row'
    },
    rightSection: {
        marginLeft: 20,
        width: '78%',
        height: '99%',
    },
    innerContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        opacity: 0.9
    },
    tableHead: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: 'white'
    },
    tableHeadText: {
        display: 'flex',
        width: '20%',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Montserrat',
        color: '#676767'
    },
    tableHeadText2: {
        display: 'flex',
        width: '20%',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        color: '#676767'
    },
    tableEntry: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1
    },
    tableEntryText: {
        width: '20%',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 15,
    },
    tableFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderTopColor: '#C0C0C0',
        borderTopWidth: 1,
    },
    tableFooterText: {
        fontFamily: 'Montserrat-Bold'
    },
    logo: {
        position: 'absolute',
        left: 40,
        bottom: 10,
        width: 250,
        height: 300
    },
    sectionHead: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    sectionTitle: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        marginLeft: 15,
        color: 'white'
    }
})