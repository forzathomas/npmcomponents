import React, { Component } from 'react'
import { Button } from "react-native"

class EpicButton extends Component {
    render() {
        const {onPress} = this.props
        return (
            <Button title="Epic btn" onPress={onPress}/>
        )
    }
}

export default EpicButton