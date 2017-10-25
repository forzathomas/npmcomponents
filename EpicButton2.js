import React, { Component } from 'react'
import { Button } from "react-native"

class EpicButton2 extends Component {
    render() {
        const {onPress} = this.props
        return (
            <Button title="Epic btn 4" onPress={onPress}/>
        )
    }
}

export default EpicButton2