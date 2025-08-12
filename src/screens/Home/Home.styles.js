import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  logo: {
    width: 64,
    height: 10,
    backgroundColor: COLORS.logoBackground,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 32,
  },
  scrollContainer: {
    flex: 1,
  },
  toolsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  toolRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  toolButton: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  toolEmoji: {
    fontSize: 24,
  },
  toolText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 12,
  },
  emptySpace: {
    width: '23%',
  },
});