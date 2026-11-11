import type { ComponentType, ReactNode } from 'react';
import type * as ExpoRouter from 'expo-router';

declare module 'expo-router' {
  export interface Theme {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
  }

  export const DarkTheme: Theme;
  export const DefaultTheme: Theme;
  export const ThemeProvider: ComponentType<{ value: Theme; children: ReactNode }>;

  export const Stack: typeof ExpoRouter.Stack & {
    Protected: ComponentType<{
      guard: boolean;
      children?: ReactNode;
    }>;
  };
}

declare module 'expo-router/unstable-native-tabs' {
  export interface NativeTabsProps {
    backgroundColor?: string;
    indicatorColor?: string;
    labelStyle?: {
      selected?: {
        color?: string;
      };
    };
    children?: ReactNode;
  }

  export interface TriggerProps {
    name: string;
    children?: ReactNode;
  }

  export interface LabelProps {
    children?: ReactNode;
  }

  export interface IconProps {
    sf?: string;
    md?: string;
  }

  export interface TriggerComponent extends ComponentType<TriggerProps> {
    Label: ComponentType<LabelProps>;
    Icon: ComponentType<IconProps>;
  }

  export interface NativeTabsComponent extends ComponentType<NativeTabsProps> {
    Trigger: TriggerComponent;
  }

  export const NativeTabs: NativeTabsComponent;
}
