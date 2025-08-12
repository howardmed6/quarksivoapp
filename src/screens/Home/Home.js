import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './Home.styles';
import { TOOLS_DATA } from '../../data/tools';
import { Logo } from '../../assets/logo';

const Home = ({ navigation }) => {
    const organizeInRows = (tools) => {
        const rows = [];
        for (let i = 0; i < tools.length; i += 4) {
            rows.push(tools.slice(i, i + 4));
        }
        return rows;
    };

    const handleToolPress = (tool) => {
        // Por ahora solo manejamos PNG a JPG
        if (tool.id === 28) { // PNG a JPG
            navigation.navigate('PngToJpg');
        }
        // Aquí se pueden agregar más navegaciones para otros tools
    };

    const toolRows = organizeInRows(TOOLS_DATA);

    return (
        <View style={styles.container}>
            <View style={[styles.logoContainer, {backgroundColor: 'transparent'}]}>
                <View style={[styles.logo, {backgroundColor: 'transparent'}]}>
                    <Logo width={50} height={50}/> 
                </View>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.toolsContainer}>
                    {toolRows.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.toolRow}>
                            {row.map((tool) => (
                                <TouchableOpacity
                                    key={tool.id}
                                    style={[styles.toolButton, { backgroundColor: tool.color }]}
                                    onPress={() => handleToolPress(tool)}
                                >
                                    <Text style={styles.toolEmoji}>{tool.emoji}</Text>
                                    <Text style={styles.toolText}>{tool.name}</Text>
                                </TouchableOpacity>
                            ))}
                            {row.length < 4 &&
                                Array.from({ length: 4 - row.length }).map((_, emptyIndex) => (
                                    <View key={`empty-${emptyIndex}`} style={styles.emptySpace} />
                                ))
                            }
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;