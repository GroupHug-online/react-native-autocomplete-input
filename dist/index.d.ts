import React from 'react';
import type { FlatListProps, TextInputProps, StyleProp, ViewStyle } from 'react-native';
export type AutocompleteInputProps<T> = TextInputProps & {
    containerStyle?: StyleProp<ViewStyle>;
    hideResults?: boolean;
    inputContainerStyle?: StyleProp<ViewStyle>;
    listContainerStyle?: StyleProp<ViewStyle>;
    onShowResults?: (showResults: boolean) => void;
    renderResultList?: (props: FlatListProps<T>) => React.ReactElement;
    renderTextInput?: (props: TextInputProps) => React.ReactElement;
    flatListProps?: Partial<Omit<FlatListProps<T>, 'data'>>;
    data: readonly T[];
};
declare function AutocompleteInputComponent<Item, Ref>(props: AutocompleteInputProps<Item>, ref: React.ForwardedRef<Ref>): React.ReactElement;
export declare const AutocompleteInput: typeof AutocompleteInputComponent;
export default AutocompleteInput;
