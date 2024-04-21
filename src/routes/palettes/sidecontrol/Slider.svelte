<script lang="ts">
    export let style: string
    export let min: number
    export let max: number
    export let step: number
    export let value: number
    export let onInput: (e: Event) => void
</script>

<input
    type="range"
    class="slider h-3 w-full rounded-full border border-base-300 text-gray-400 shadow-inner dark:text-gray-300"
    {style}
    {min}
    {max}
    {step}
    {value}
    on:input={onInput}
/>

<style>
    /* 
    Custom slider styling
    Credit: https://www.w3schools.com/howto/howto_js_rangeslider.asp 
    */

    /* The slider itself */
    .slider {
        -webkit-appearance: none; /* Override default CSS styles */
        appearance: none;
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #fff; /* Green background */
        cursor: pointer; /* Cursor on hover */
        border-radius: 100%;
        border: 2px solid currentColor;
        transition: transform 0.2s ease-in-out;
    }

    .slider::-webkit-slider-thumb:hover {
        transform: scale(1.1);
    }

    .slider::-moz-range-thumb {
        -moz-appearance: none; /* Override default look for Firefox */
        appearance: none;
        width: 25px; /* Set a specific slider handle width */
        height: 25px; /* Slider handle height */
        background: #fff; /* Green background */
        cursor: pointer; /* Cursor on hover */
        border-radius: 100%;
        border: 2px solid #90949e;
        transition: transform 0.2s ease-in-out;
    }

    .slider::-moz-range-thumb:hover {
        transform: scale(1.1);
    }
</style>
