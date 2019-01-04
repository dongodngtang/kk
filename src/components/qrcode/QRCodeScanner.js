import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Vibration,
    Platform,
    PixelRatio,
    StatusBar
} from 'react-native';

import QRScannerView from './QRScannerRectView'

const pixelRatio = PixelRatio.get()

/**
 * 扫描界面
 */
export default class QRCodeScanner extends PureComponent {
    constructor(props) {
        super(props);
        //通过这句代码屏蔽 YellowBox
        console.disableYellowBox = true;
        this.state = {
            scanning: false,
            barCodeSize: {}
        }
    }

    static defaultProps = {
        onRead: () => {
        },
        renderTopView: () => {
        },
        renderBottomView: () => <View style={{flex: 1, backgroundColor: '#0000004D'}}/>,
        rectHeight: 200,
        rectWidth: 200,
        flashMode: false,  // 手电筒模式
        finderX: 0,    // 取景器X轴偏移量
        finderY: 0,     // 取景器Y轴偏移量
        zoom: 0,
        translucent: false,
        isRepeatScan: false
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <RNCamera
                    style={{
                        flex: 1
                    }}
                    onBarCodeRead={this._handleBarCodeRead}
                    flashMode={!this.props.flashMode ? RNCamera.Constants.FlashMode.off : RNCamera.Constants.FlashMode.torch}
                    zoom={this.props.zoom}>
                    <View style={[styles.topButtonsContainer, this.props.topViewStyle]}>
                        {this.props.renderTopView()}
                    </View>
                    <QRScannerView
                        maskColor={this.props.maskColor}
                        cornerColor={this.props.cornerColor}
                        borderColor={this.props.borderColor}
                        rectHeight={this.props.rectHeight}
                        rectWidth={this.props.rectWidth}
                        borderWidth={this.props.borderWidth}
                        cornerBorderWidth={this.props.cornerBorderWidth}
                        cornerBorderLength={this.props.cornerBorderLength}
                        isLoading={this.props.isLoading}
                        cornerOffsetSize={this.props.cornerOffsetSize}
                        isCornerOffset={this.props.isCornerOffset}
                        bottomHeight={this.props.bottomHeight}
                        scanBarAnimateTime={this.props.scanBarAnimateTime}
                        scanBarColor={this.props.scanBarColor}
                        scanBarHeight={this.props.scanBarHeight}
                        scanBarMargin={this.props.scanBarMargin}
                        hintText={this.props.hintText}
                        hintTextStyle={this.props.hintTextStyle}
                        scanBarImage={this.props.scanBarImage}
                        hintTextPosition={this.props.hintTextPosition}
                        isShowScanBar={this.props.isShowScanBar}
                        finderX={this.props.finderX}
                        finderY={this.props.finderY}
                        returnSize={this.barCodeSize}/>
                    <View style={[styles.bottomButtonsContainer, this.props.bottomViewStyle]}>
                        {this.props.renderBottomView()}
                    </View>
                </RNCamera>
            </View>
        );
    }

    isShowCode = false;

    barCodeSize = (size) => this.setState({barCodeSize: size})

    returnMax = (a, b) => a > b ? a : b

    returnMin = (a, b) => a < b ? a : b

    _handleBarCodeRead = (e) => {
        if (this.props.isRepeatScan) {
            Vibration.vibrate();
            this.props.onRead(e)
        } else {
            if (!this.isShowCode) {
                this.isShowCode = true;
                Vibration.vibrate();
                this.props.onRead(e)
            }
        }
    }
}

const styles = StyleSheet.create({
    topButtonsContainer: {
        position: 'absolute',
        height: 100,
        top: 0,
        left: 0,
        right: 0
    },
    bottomButtonsContainer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0
    }
});

QRCodeScanner.propTypes = {
    isRepeatScan: PropTypes.bool,
    onRead: PropTypes.func,
    maskColor: PropTypes.string,
    borderColor: PropTypes.string,
    cornerColor: PropTypes.string,
    borderWidth: PropTypes.number,
    cornerBorderWidth: PropTypes.number,
    cornerBorderLength: PropTypes.number,
    rectHeight: PropTypes.number,
    rectWidth: PropTypes.number,
    isLoading: PropTypes.bool,
    isCornerOffset: PropTypes.bool, //边角是否偏移
    cornerOffsetSize: PropTypes.number,
    bottomHeight: PropTypes.number,
    scanBarAnimateTime: PropTypes.number,
    scanBarColor: PropTypes.string,
    scanBarImage: PropTypes.any,
    scanBarHeight: PropTypes.number,
    scanBarMargin: PropTypes.number,
    hintText: PropTypes.string,
    hintTextStyle: PropTypes.object,
    hintTextPosition: PropTypes.number,
    renderTopView: PropTypes.func,
    renderBottomView: PropTypes.func,
    isShowScanBar: PropTypes.bool,
    topViewStyle: PropTypes.object,
    bottomViewStyle: PropTypes.object,
    flashMode: PropTypes.bool,
    finderX: PropTypes.number,
    finderY: PropTypes.number,
    zoom: PropTypes.number,
    translucent: PropTypes.bool
}