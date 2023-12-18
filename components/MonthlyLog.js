import Navigation from './navigation';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import axios from 'axios';
import SelectDropdown from "react-native-select-dropdown";


export default function MonthlyLog({navigation}) {
    const date = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]
    const [selectedYear, setYear] = useState(date.getFullYear());
    const [selectedMonth, setMonth] = useState((date.getMonth()+1));
    const [monthlyLog, setMontlyLog] = useState([])
    let total = 0

    useEffect(() => {
        const formattedMonth = String(selectedMonth).padStart(2, '0');
        axios.get(`https://dynamic-routes-f4txc.ondigitalocean.app/monthlyLog/${formattedMonth}/${selectedYear}`)
        .then(response => {
            setMontlyLog(response.data)            
        }).catch(error => {
            console.log('Error fetching data')
        })
    }, [ , selectedMonth, selectedYear])

    return(
        <>
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
                            source={require('../assets/images/table2.png')}
                            style={{width: 40, height:40}}
                        />
                        <Text style={styles.sectionTitle}>MONTHLY LOG</Text>
                        <View style={styles.dropdowns}>
                            <SelectDropdown
                                data={months}
                                buttonStyle={styles.monthButton}
                                defaultButtonText={months[selectedMonth - 1]}
                                buttonTextStyle={{
                                    fontFamily: 'Montserrat'
                                }}
                                dropdownStyle={{
                                    borderRadius: 10,
                                    fontFamily: 'Montserrat'
                                }}
                                onSelect={(selectedMonth, index) => {
                                    setMonth(index + 1)
                                }}
                            />
                            <SelectDropdown
                                data={years}
                                buttonStyle={styles.yearButton}
                                defaultButtonText={selectedYear}
                                buttonTextStyle={{
                                    fontFamily: 'Montserrat'
                                }}
                                dropdownStyle={{
                                    borderRadius: 10,
                                    fontFamily: 'Montserrat'
                                }}
                                onSelect={(selectedYear, index) => {
                                    setYear(parseInt(selectedYear))
                                }}
                            />
                    </View>
                    </View>
                    <ScrollView style={styles.innerContainer} stickyHeaderIndices={[0]}>
                        <View>
                            <View style={styles.tableHead}>
                                <Text style={styles.tableHeadText}>{'Day'}</Text>
                                <Text style={styles.tableHeadText}>{'Commercial'}</Text>
                                <Text style={styles.tableHeadText}>{'Member'}</Text>
                                <Text style={styles.tableHeadText}>{'Private'}</Text>
                                <Text style={styles.tableHeadText}>{'Total'}</Text>
                                <Text style={styles.tableHeadTextTotal}>Revenue</Text>
                            </View>
                        </View>
                            {monthlyLog.map((log) => {
                                total += log.commercial_revenue + log.private_member_revenue + log.member_revenue;
                                return (
                                    <View style={styles.tableEntry} key={log.id}>
                                        <Text style={styles.tableEntryText}>{log.day.split(' ')[0]}</Text>
                                        <Text style={styles.tableEntryText}>{(log.commercial_revenue).toFixed(2)}</Text>
                                        <Text style={styles.tableEntryText}>{(log.member_revenue).toFixed(2)}</Text>
                                        <Text style={styles.tableEntryText}>{(log.private_member_revenue).toFixed(2)}</Text>
                                        <Text style={styles.tableEntryText}>{(log.commercial_revenue + log.member_revenue + log.private_member_revenue).toFixed(2)}KM</Text>
                                    </View>
                                )
                            }
                            )}
                    </ScrollView>
                    <View style={styles.tableFooter}>
                        <Text style={styles.tableFooterText}>TOTAL:</Text>
                        <Text style={styles.tableFooterText}>{total.toFixed(2)}KM</Text>
                    </View>
                </View>
            </View>
        </>
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
        opacity: 0.9,
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
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingRight: 125,
    },
    tableHeadText: {
        display: 'flex',
        width: '25%',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Montserrat',
        color: '#676767'
    },
    tableHeadTextTotal: {
        display: 'flex',
        width: '25%',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        color: '#676767',
        paddingRight: 20,
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
        width: '20.5%',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 15,
        justifyContent: 'space-between', 
        paddingLeft: 10,
    },
    dropdowns:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 340,
        marginLeft: 190,   
    },
    monthButton:{
        borderRadius: 20,
        height: 36,
        width: 140,
        marginRight: 10,  
    },
    yearButton:{
        borderRadius: 20,
        height: 36,
        width: 140,
        marginLeft: 10
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
    },
})