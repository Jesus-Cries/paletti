<script lang="ts">
    import ColorPicker from "./ColorPicker.svelte"
    import HueSlider from "./HueSlider.svelte"
    import LightnessSliders from "./LightnessSliders.svelte"
    import ShowGaps from "./ShowGaps.svelte"
    import Export from "./Export.svelte"
</script>

<div
    class="m-3 ml-1.5 hidden w-1/6 min-w-[300px] flex-col justify-between rounded-xl bg-base-200 p-4 shadow-md md:flex dark:border-2 dark:border-base-300"
>
    <div class="flex h-full w-full flex-col items-start gap-7">
        <p class="-mb-4 text-lg font-bold">Settings</p>

        <ColorPicker />

        <div class="divider -my-4" />

        <LightnessSliders />

        <HueSlider />

        <ShowGaps />
    </div>

    <Export />
</div>
