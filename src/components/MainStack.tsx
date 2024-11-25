import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Portfolio } from "./Portfolio";
import { StockList } from "./StockList";
import { TradeView } from "./TradeView";
import { Wallet } from "./Wallet";
import { Competitions } from "./competitions/Competitions";
import { CompetitionDetails } from "./competitions/CompetitionDetails";
import { CompetitionPortfolio } from "./competitions/CompetitionPortfolio";
import { CompetitionMarket } from "./competitions/CompetitionMarket";

// Import authentication screens
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ForgotPassword } from "./ForgotPassword";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="SignIn" // Set default screen as SignIn
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#1a1a1a",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            {/* Authentication Screens */}
            <StackNavigator.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: "Sign In" }}
            />
            <StackNavigator.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: "Sign Up" }}
            />
            <StackNavigator.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ title: "Forgot Password" }}
            />

            {/* Main App Screens */}
            <StackNavigator.Screen
                name="Portfolio"
                component={Portfolio}
                options={{ title: "My Portfolio" }}
            />
            <StackNavigator.Screen
                name="StockList"
                component={StockList}
                options={{ title: "Market" }}
            />
            <StackNavigator.Screen
                name="Trade"
                component={TradeView}
                options={{ title: "Trade Stock" }}
            />
            <StackNavigator.Screen
                name="Wallet"
                component={Wallet}
                options={{ title: "My Wallet" }}
            />
            <StackNavigator.Screen
                name="Competitions"
                component={Competitions}
                options={{ title: "Competitions" }}
            />
            <StackNavigator.Screen
                name="CompetitionDetails"
                component={CompetitionDetails}
                options={{ title: "Competition Details" }}
            />
            <StackNavigator.Screen
                name="CompetitionPortfolio"
                component={CompetitionPortfolio}
                options={{ title: "Competition Portfolio" }}
            />
            <StackNavigator.Screen
                name="CompetitionMarket"
                component={CompetitionMarket}
                options={{ title: "Competition Market" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
