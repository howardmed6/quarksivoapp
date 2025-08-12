import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ScrollView, 
    Alert 
} from 'react-native';
import { styles } from './PngToJpg.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PngToJpgScreen = ({ navigation }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedQuality, setSelectedQuality] = useState('alta');
    const [selectedSize, setSelectedSize] = useState('original');
    const [selectedFormat, setSelectedFormat] = useState('jpg');
    const [selectedCompression, setSelectedCompression] = useState('media');

    const handleFileSelection = () => {
        // Aquí se implementará la lógica para seleccionar archivos
        Alert.alert('Seleccionar archivos', 'Funcionalidad pendiente de implementar');
    };

    const handleDownload = () => {
        if (selectedFiles.length === 0) {
            Alert.alert('Sin archivos', 'Primero selecciona archivos para convertir');
            return;
        }
        // Aquí se implementará la lógica de conversión y descarga
        Alert.alert('Descargar', 'Funcionalidad de conversión pendiente');
    };

    const qualityOptions = [
        { id: 'alta', label: 'Alta Calidad', value: 'alta' },
        { id: 'media', label: 'Media Calidad', value: 'media' },
        { id: 'baja', label: 'Baja Calidad', value: 'baja' },
        { id: 'custom', label: 'Personalizada', value: 'custom' }
    ];

    const sizeOptions = [
        { id: 'original', label: 'Tamaño Original', value: 'original' },
        { id: 'small', label: 'Pequeño', value: 'small' },
        { id: 'medium', label: 'Mediano', value: 'medium' },
        { id: 'large', label: 'Grande', value: 'large' }
    ];

    const formatOptions = [
        { id: 'jpg', label: 'JPG', value: 'jpg' },
        { id: 'jpeg', label: 'JPEG', value: 'jpeg' },
        { id: 'webp', label: 'WebP', value: 'webp' },
        { id: 'bmp', label: 'BMP', value: 'bmp' }
    ];

    const compressionOptions = [
        { id: 'ninguna', label: 'Sin Compresión', value: 'ninguna' },
        { id: 'baja', label: 'Compresión Baja', value: 'baja' },
        { id: 'media', label: 'Compresión Media', value: 'media' },
        { id: 'alta', label: 'Compresión Alta', value: 'alta' }
    ];

    const renderOptionSection = (title, options, selectedValue, onSelect) => (
        <View style={styles.optionSection}>
            <Text style={styles.optionTitle}>{title}</Text>
            <View style={styles.optionRow}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        style={[
                            styles.optionButton,
                            selectedValue === option.value && styles.optionButtonSelected
                        ]}
                        onPress={() => onSelect(option.value)}
                    >
                        <Text style={[
                            styles.optionText,
                            selectedValue === option.value && styles.optionTextSelected
                        ]}>
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Botón de descarga */}
            <View style={styles.downloadSection}>
                <TouchableOpacity
                    style={[
                        styles.downloadButton,
                        selectedFiles.length === 0 && styles.downloadButtonDisabled
                    ]}
                    onPress={handleDownload}
                    disabled={selectedFiles.length === 0}
                >
                    <Icon 
                        name="download" 
                        size={24} 
                        color={selectedFiles.length > 0 ? '#fff' : '#666'} 
                        style={styles.downloadIcon}
                    />
                    <Text style={[
                        styles.downloadButtonText,
                        selectedFiles.length === 0 && styles.downloadButtonTextDisabled
                    ]}>
                        DESCARGAR
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollContainer}>
                {/* Área de selección de archivos */}
                <View style={styles.fileSelectionSection}>
                    <TouchableOpacity
                        style={styles.fileUploadArea}
                        onPress={handleFileSelection}
                    >
                        <View style={styles.fileUploadContent}>
                            <Icon name="cloud-upload" size={48} color="#666" />
                            <Text style={styles.fileUploadTitle}>
                                Seleccionar archivos PNG
                            </Text>
                            <Text style={styles.fileUploadSubtitle}>
                                Toca para elegir archivos de tu dispositivo
                            </Text>
                            {selectedFiles.length > 0 && (
                                <Text style={styles.fileCount}>
                                    {selectedFiles.length} archivo(s) seleccionado(s)
                                </Text>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Opciones de configuración */}
                <View style={styles.optionsContainer}>
                    {renderOptionSection(
                        'Calidad de salida',
                        qualityOptions,
                        selectedQuality,
                        setSelectedQuality
                    )}

                    {renderOptionSection(
                        'Tamaño de imagen',
                        sizeOptions,
                        selectedSize,
                        setSelectedSize
                    )}

                    {renderOptionSection(
                        'Formato de salida',
                        formatOptions,
                        selectedFormat,
                        setSelectedFormat
                    )}

                    {renderOptionSection(
                        'Nivel de compresión',
                        compressionOptions,
                        selectedCompression,
                        setSelectedCompression
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default PngToJpgScreen;