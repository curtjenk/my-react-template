// Usage example
// await Delay(3000);  //simulate time to make api call

export function Delay(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}