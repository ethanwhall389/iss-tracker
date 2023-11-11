export default class Convert {
    
    static toKm (meters) {
        const rounded = Math.round(meters * 0.001)
        return `${rounded.toLocaleString()} Kilometers`;
    }

    static toMi (meters) {
        const rounded = Math.round(meters * 0.000621371);
        return `${rounded.toLocaleString()} Miles`
    }
}