import { StyleSheet } from 'react-native';
import { colors, typography, textSizes, margins } from '../../config/styles';

export const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        padding: margins.marginL + margins.marginL,
    },
    image: {
        position: 'absolute',
        top: 0,
        backgroundColor: colors.lightestGreen,
    },
    contentWrapper: {
        backgroundColor:'transparent',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTextWrapper: {
        margin: margins.marginL,
    },
    welcomeText: {
        fontFamily: typography.fontHeavy,
        fontSize: textSizes.title1,
        textAlign: "center",
        color: colors.red,
        marginBottom: margins.marginL,
    },
    journeyText: {
        fontFamily: typography.fontHeavy,
        fontSize: textSizes.bodyL,
        textAlign: "center",
        color: colors.darkGreen,
        marginBottom: margins.marginL,
    }, 

    registerContainer: {
        flex: 1,
        paddingTop: 50,
    },
    stepIndicatorWrapper: {
        marginBottom: margins.marginL,
    },
    registerContentContainer: {
        position: 'absolute',
        bottom: 20,
    },
    contentQuestionWrapper: {
        padding: margins.marginL + margins.marginL,
    },
    registerExplainText: {
        backgroundColor: 'transparent',
        fontFamily: typography.fontHeavy,
        fontSize: textSizes.title2,
        textAlign: "center",
        color: "white",
        marginVertical: margins.marginL,
    },
    arrowButtonWrapper: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    loginText: {
        fontSize: textSizes.bodyL,
        color: colors.red,
        fontFamily: typography.fontHeavy,
        textAlign: "right",
        marginRight: margins.marginL,
        backgroundColor: 'transparent',
    },


    meetText: {
        fontFamily: typography.fontHeavy,
        fontSize: textSizes.title1,
        textAlign: "center",
        color: colors.darkGreen,
        marginBottom: margins.marginL,
    },
    checkEmailText: {
        fontFamily: typography.fontHeavy,
        fontSize: textSizes.bodyL,
        textAlign: "center",
        color: "white",
        marginBottom: margins.marginL,
    }, 

    textFieldText: {
        fontFamily: typography.fontHeavy,
        fontSize: textSizes.bodyL,
        textAlign: 'center',
        color: colors.darkGreen,
        margin: margins.marginM,
        marginTop: 0,
        height: 40,
        borderColor: 'white',
        borderBottomWidth: 3,
    },
})