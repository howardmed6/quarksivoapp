import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.headerBackground,
    paddingVertical: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  emoji: {
    fontSize: 24,
  },
  tabText: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 4,
  },
});