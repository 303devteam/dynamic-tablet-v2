import Navigation from './navigation';
import { Dialog } from '@rneui/themed';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import axios from 'axios';

export default function Map({navigation}) {
    const [fontLoaded, setFontLoaded] = useState(false)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [table, setTable] = useState({})
    const [tables, setTables] = useState([])
    const [tableId, setTableId] = useState(0)
    const [playerType, setPlayerType] = useState('')

    const startGame = async () => {
        axios.put(`https://dynamic-routes-f4txc.ondigitalocean.app/startGame/${tableId}/${playerType}`).then(res => {
            setOpen(false)
        })
    }
    
    const endGame = async () => {
        axios.put(`https://dynamic-routes-f4txc.ondigitalocean.app/endGame/${tableId}`).then(res => {
            setOpen2(false)
        })
    }

    useEffect(() => {
        axios.get('https://dynamic-routes-f4txc.ondigitalocean.app/tables').then(res => {
            setTables(res.data)
        }).catch((err) => {
            console.error('Error fetching data')
        })
    }, [open, open2])

    useEffect(() => {
        axios.get(`https://dynamic-routes-f4txc.ondigitalocean.app/table/${tableId}`).then(res => {
            setTable(res.data)
        }).catch((err) => {
            console.error('Error fetching data')
        })
    }, [tableId])
    
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
                            source={require('../assets/images/poolTable2.png')}
                            style={{width: 45, height:40}}
                        />
                        <Text style={styles.sectionTitle}>MAP</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <View style={styles.section1}>
                            {
                                tables[2]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(3)}}>
                                        <Image
                                            source={require('../assets/images/tables/table3.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(3)}}>
                                        <Image
                                            source={require('../assets/images/tables/table3Ocp.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                tables[1]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(2)}}>
                                        <Image
                                            source={require('../assets/images/tables/table2.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(2)}}>
                                        <Image
                                            source={require('../assets/images/tables/table2Ocp.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                tables[0]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(1)}}>
                                        <Image
                                            source={require('../assets/images/tables/table1.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(1)}}>
                                        <Image
                                            source={require('../assets/images/tables/table1Ocp.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style={styles.section2}>
                            {
                                tables[3]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(4)}}>
                                        <Image
                                            source={require('../assets/images/tables/table4.png')}
                                            style={{width: 115, height:170}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(4)}}>
                                        <Image
                                            source={require('../assets/images/tables/table4Ocp.png')}
                                            style={{width: 115, height:170}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                tables[4]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(5)}}>
                                        <Image
                                            source={require('../assets/images/tables/table5.png')}
                                            style={{width: 115, height:170}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(5)}}>
                                        <Image
                                            source={require('../assets/images/tables/table5Ocp.png')}
                                            style={{width: 115, height:170}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style={styles.section1}>
                            {
                                tables[5]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(6)}}>
                                        <Image
                                            source={require('../assets/images/tables/table6.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(6)}}>
                                        <Image
                                            source={require('../assets/images/tables/table6Ocp.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                tables[6]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(7)}}>
                                        <Image
                                            source={require('../assets/images/tables/table7.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(7)}}>
                                        <Image
                                            source={require('../assets/images/tables/table7Ocp.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                tables[7]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(8)}}>
                                        <Image
                                            source={require('../assets/images/tables/table8.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(8)}}>
                                        <Image
                                            source={require('../assets/images/tables/table8Ocp.png')}
                                            style={{width: 165, height:115}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style={styles.section2}>
                            {
                                tables[8]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(9)}}>
                                        <Image
                                            source={require('../assets/images/tables/table9.png')}
                                            style={{width: 115, height:170}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(9)}}>
                                        <Image
                                            source={require('../assets/images/tables/table9Ocp.png')}
                                            style={{width: 115, height:170}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                            {
                                tables[9]?.status == 'Free' ? (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen(true); setTableId(10)}}>
                                        <Image
                                            source={require('../assets/images/tables/table10.png')}
                                            style={{width: 115, height:170}}
                                        />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => {setOpen2(true); setTableId(10)}}>
                                        <Image
                                            source={require('../assets/images/tables/table10Ocp.png')}
                                            style={{width: 115, height:170}}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <Dialog
                            isVisible={open}
                            onBackdropPress={() => setOpen(false)}
                            overlayStyle={styles.modal1}
                        >
                            <Text style={styles.modalTtile}>Table: {tableId}</Text>
                            <View style={styles.tableStatus}>
                                <Text style={styles.statusTitle}>Status:</Text>
                                <Text style={styles.status}>{table.status}</Text>
                            </View>
                            <Text style={styles.playerType}>PLAYER TYPE: {playerType}</Text>
                            <View style={styles.buttonSection}>
                                <TouchableOpacity onPress={() => setPlayerType('Member')} activeOpacity={0.5} style={styles.playerButton}><Text style={styles.buttonText}>MEMBER</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => setPlayerType('Private')} activeOpacity={0.5} style={styles.playerButton}><Text style={styles.buttonText}>PRIVATE</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => setPlayerType('Comm')} activeOpacity={0.5} style={styles.playerButton}><Text style={styles.buttonText}>COMMERCIAL</Text></TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => startGame()} activeOpacity={0.5} style={styles.startButton}><Text style={styles.buttonText}>START GAME</Text></TouchableOpacity>
                        </Dialog>
                        <Dialog
                            isVisible={open2}
                            onBackdropPress={() => setOpen2(false)}
                            overlayStyle={styles.modal1}
                        >
                            <Text style={styles.modalTtile}>Table: {tableId}</Text>
                            <View style={styles.tableStatus}>
                                <Text style={styles.statusTitle}>Status:</Text>
                                <Text style={styles.status2}>OCCUPIED</Text>
                            </View>
                            <View style={styles.tableStatus}>
                                <Text style={styles.statusTitle}>Player Type:</Text>
                                <Text style={styles.statusTitle}>Member</Text>
                            </View>
                            <TouchableOpacity onPress={() => endGame()} activeOpacity={0.5} style={styles.endButton}><Text style={styles.buttonText}>END GAME</Text></TouchableOpacity>
                        </Dialog>
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
        height: '99%'
    },
    innerContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '90%',
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'row',
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
    section1: {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    section2: {
        width: '25%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    modal1: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 20,
        width: '50%',
    },
    modalTtile: {
        display: 'flex',
        alignSelf: 'center',
        marginBottom: 5,
        fontFamily: 'Montserrat',
        fontSize: 20,
        paddingRight: 10,
        paddingLeft: 10
    },
    tableStatus: {
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: 10,
        paddingLeft: 10,
    },
    statusTitle: {
        fontFamily: 'Montserrat',
        fontSize: 16
    },
    status: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#7CD295'
    },
    status2: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#E9313C'
    },
    buttonSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },
    playerButton: {
        backgroundColor: '#2F2E30',
        padding: 7,
        borderRadius: 20,
        width: 125,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5, // for Android shadow
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Montserrat'
    },
    startButton: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#7CD295',
        width: 120,
        alignContent: 'center',
        alignItems: 'center',
        padding: 7,
        borderRadius: 20,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5, // for Android shadow
    },
    endButton: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor: '#E9313C',
        width: 120,
        alignContent: 'center',
        alignItems: 'center',
        padding: 7,
        borderRadius: 20,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5, // for Android shadow
    },
    playerType: {
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Montserrat',
        alignSelf: 'center'
    }

})