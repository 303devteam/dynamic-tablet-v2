import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"

export default function Navigation(props) {
    const [fontLoaded, setFontLoaded] = useState(false)

    return(
        <>
                <View style={styles.navigation} >
                    <TouchableOpacity onPress={() => props.navigation.navigate('Map')} activeOpacity={0.5} style={styles.navButton}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/poolTable.png')}
                                style={{width: 40, height:30}}
                            />
                        </View>
                        <Text style={styles.navButtonText}>MAP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('DailyLog')} activeOpacity={0.5} style={styles.navButton}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/table.png')}
                                style={{width: 30, height:30}}
                            />
                        </View>
                        <Text style={styles.navButtonText}>DAILY LOG</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => props.navigation.navigate('MonthlyLog')} activeOpacity={0.5} style={styles.navButton}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/Rectangle.png')}
                                style={{width: 40, height:36}}
                            />
                        </View>
                        <Text style={styles.navButtonText}>MONTHLY LOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('AnnualLog')} activeOpacity={0.5} style={styles.navButton}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/Rectangle.png')}
                                style={{width: 40, height:36}}
                            />
                        </View>
                        <Text style={styles.navButtonText}>ANNUAL LOG</Text>
                    </TouchableOpacity>
                </View>
        </>
    )
}

const styles = StyleSheet.create({
    navigation: {
        height: '100%',
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        
    },
    navButton: {
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 20,
        borderRadius: 15,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5, // for Android shadow
    },
    navButtonText: {
        fontFamily: 'Montserrat',
    },
    imageContainer: {
        width: 40,
        height: 30,
        width: '20%',
        display: 'flex',
        justifyContent: 'flex-start'
    }
})