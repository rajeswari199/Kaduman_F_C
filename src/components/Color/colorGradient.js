

function generateColor() {
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
    RGBAToHex(50, 168, 82, 1)
}
