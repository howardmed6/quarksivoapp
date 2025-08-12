import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    
    // Sección del botón de descarga
    downloadSection: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#1a1a1a',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    
    downloadButton: {
        backgroundColor: '#4CAF50',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    
    downloadButtonDisabled: {
        backgroundColor: '#333',
        elevation: 0,
        shadowOpacity: 0,
    },
    
    downloadIcon: {
        marginRight: 10,
    },
    
    downloadButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    
    downloadButtonTextDisabled: {
        color: '#666',
    },
    
    scrollContainer: {
        flex: 1,
    },
    
    // Sección de selección de archivos
    fileSelectionSection: {
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    
    fileUploadArea: {
        borderWidth: 2,
        borderColor: '#444',
        borderStyle: 'dashed',
        borderRadius: 15,
        padding: 40,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
    },
    
    fileUploadContent: {
        alignItems: 'center',
    },
    
    fileUploadTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 15,
        marginBottom: 8,
        textAlign: 'center',
    },
    
    fileUploadSubtitle: {
        color: '#999',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 22,
    },
    
    fileCount: {
        color: '#4CAF50',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 15,
        textAlign: 'center',
    },
    
    // Contenedor de opciones
    optionsContainer: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    
    optionSection: {
        marginBottom: 25,
        backgroundColor: '#1a1a1a',
        borderRadius: 12,
        padding: 20,
        borderWidth: 1,
        borderColor: '#333',
    },
    
    optionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        textAlign: 'center',
    },
    
    optionRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
    },
    
    optionButton: {
        backgroundColor: '#2a2a2a',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        minWidth: (width - 80) / 2 - 5, // Para que quepan 2 por fila
        alignItems: 'center',
        marginBottom: 10,
    },
    
    optionButtonSelected: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    
    optionText: {
        color: '#ccc',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    
    optionTextSelected: {
        color: '#fff',
        fontWeight: '600',
    },
});