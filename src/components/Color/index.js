import React from 'react'
import * as _ from 'lodash'

class Color extends React.Component {

    generateColor = () => {
        function ColorWithAlphaToColor(color, alpha) {
            return color * alpha + 255 * (1 - alpha);
        }

        function RGBAToHex(r, g, b, a) {
            let red = ColorWithAlphaToColor(r, a)
            let green = ColorWithAlphaToColor(g, a)
            let blue = ColorWithAlphaToColor(b, a)

            return rgbToHex(parseInt(red), parseInt(green), parseInt(blue))
        }

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        function rgbToHex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
        for (let index = 1; index < 11; index++) {
            document.getElementById(`color-${index}`).innerHTML = RGBAToHex(
                document.getElementById("r").value,
                document.getElementById("g").value,
                document.getElementById("b").value,
                index / 10
            )
        }
    }

    onChange = (event) => {
        this.setState({ array: event.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    R<input name="r" id="r" size="5" /> <br />
                G<input name="g" id="g" size="5" /> <br />
                B<input name="b" id="b" size="5" /> <br />
                </div>
                <div>
                    {
                        [...Array(10).keys()].map((item, index) => {
                            return (
                                <p id={`color-${item + 1}`}></p>
                            )
                        }
                        )
                    }
                    <button onClick={this.generateColor}>
                        generate
                </button>
                </div>
            </div>
        )
    }
}

export default Color
