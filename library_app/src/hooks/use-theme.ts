/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useTheme() {
  const scheme = useColorScheme();
  const theme = ((scheme as unknown as string) === 'unspecified' || !scheme ? 'light' : scheme) as 'light' | 'dark';

  return Colors[theme];
}
