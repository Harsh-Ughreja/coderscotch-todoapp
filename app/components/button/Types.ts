import React from "react";

export interface HeaderButtonParamType {
    onPress: () => void,
    icon: React.JSX.Element,
}

export interface PrimeButtonPropsType {
    text: string,
    onPress: () => void,
}