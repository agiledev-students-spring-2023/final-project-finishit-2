import './NewBadge.css'
import React, { useState } from 'react'

const NewBadge = props => {
    const textColorFromBackground = background => {
        const hexToRGB = hex => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
            return result ? [
                parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)
            ] : null
        }

        const rgb = hexToRGB(background)
        return (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) > 154 ? 'black' : 'white'
    }

    const [badgeColor, setBadgeColor] = useState('#000000')
    const [badgeText, setBadgeText] = useState('Sample Label Text')

    return (
        <div id="badgeform">
            <form action="/badges">
                <label>Badge Color</label>
                <br />
                <input id="badgecolor" type="color" value={badgeColor} onChange={e => setBadgeColor(e.target.value)} />
                <br />
                <span>(Click the colored section to change the color.)</span>
                <br />
                <br />
                <label>Badge Text</label>
                <br />
                <input className="inputBox" type="text" value={badgeText} onChange={e => setBadgeText(e.target.value)} />
                <br />
                <br />
                <label>Badge Preview</label>
                <br />
                <br />
                <span className="badge" style={{ color: textColorFromBackground(badgeColor), background: badgeColor }}>{badgeText}</span>
                <br />
                <br />
                <br />
                <br />
                <center><button className="submitButton" type="submit">Create New Badge</button></center>
            </form>
        </div>
    )
}

export default NewBadge
