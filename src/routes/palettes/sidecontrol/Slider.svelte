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
    class="slider h-3 w-full rounded-full border border-base-300 text-gray-300 shadow-inner"
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

    .slider {
        -webkit-appearance: none; /* Override default CSS styles */
        appearance: none;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look for Chrome, Opera, Safari and Edge */
        appearance: none;
        width: 20px;
        height: 20px;
        background: #fff;
        cursor: pointer;
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
        width: 20px;
        height: 20px;
        background: #fff;
        cursor: pointer;
        border-radius: 100%;
        border: 2px solid currentColor;
        transition: transform 0.2s ease-in-out;
    }

    .slider::-moz-range-thumb:hover {
        transform: scale(1.1);
    }
</style>
