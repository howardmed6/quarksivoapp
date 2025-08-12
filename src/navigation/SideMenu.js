import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  ScrollView,
  Animated 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './SideMenu.styles';

const SideMenu = ({ isVisible, onClose, navigation }) => {
  const menuItems = [
    {
      id: 'help',
      title: 'Ayuda',
      icon: 'help-outline',
      onPress: () => {
        console.log('Navegando a Ayuda');
        onClose();
      }
    },
    {
      id: 'settings',
      title: 'Configuración',
      icon: 'settings',
      onPress: () => {
        console.log('Navegando a Configuración');
        onClose();
      }
    },
    {
      id: 'terms',
      title: 'Términos y Condiciones',
      icon: 'description',
      onPress: () => {
        console.log('Navegando a Términos');
        onClose();
      }
    },
    {
      id: 'privacy',
      title: 'Política de Privacidad',
      icon: 'privacy-tip',
      onPress: () => {
        console.log('Navegando a Privacidad');
        onClose();
      }
    },
    {
      id: 'favorites',
      title: 'Favoritos',
      icon: 'favorite-outline',
      onPress: () => {
        console.log('Navegando a Favoritos');
        onClose();
      }
    },
    {
      id: 'history',
      title: 'Historial',
      icon: 'history',
      onPress: () => {
        console.log('Navegando a Historial');
        onClose();
      }
    },
    {
      id: 'about',
      title: 'Acerca de',
      icon: 'info-outline',
      onPress: () => {
        console.log('Navegando a Acerca de');
        onClose();
      }
    }
  ];

  const renderMenuItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={item.onPress}
      activeOpacity={0.7}
    >
      <Icon name={item.icon} size={24} color="#9ca3af" style={styles.menuIcon} />
      <Text style={styles.menuText}>{item.title}</Text>
      <Icon name="chevron-right" size={20} color="#6b7280" />
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* Área tocable para cerrar el menú */}
        <TouchableOpacity 
          style={styles.closeArea} 
          activeOpacity={1} 
          onPress={onClose}
        />
        
        {/* Contenedor del menú */}
        <View style={styles.menuContainer}>
          {/* Header del menú */}
          <View style={styles.menuHeader}>
            <View style={styles.userInfo}>
              <View style={styles.avatar}>
                <Icon name="person" size={32} color="#ffffff" />
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.userName}>Usuario</Text>
                <Text style={styles.userEmail}>usuario@email.com</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Icon name="close" size={24} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          {/* Separador */}
          <View style={styles.separator} />

          {/* Lista de opciones del menú */}
          <ScrollView style={styles.menuList} showsVerticalScrollIndicator={false}>
            {menuItems.map(renderMenuItem)}
          </ScrollView>

          {/* Footer del menú */}
          <View style={styles.menuFooter}>
            <Text style={styles.appVersion}>Versión 1.0.0</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SideMenu;