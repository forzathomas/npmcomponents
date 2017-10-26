import React, { Component } from 'react'
import { Button } from "react-native"

class EpicButton3 extends Component {
    render() {
        const {onPress} = this.props
        return (
            <Button title="Dit is de 3de knop fix" onPress={onPress}/>
        )
    }
}

export default EpicButton3