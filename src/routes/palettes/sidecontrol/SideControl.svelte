<script lang="ts">
    import ColorPicker from "./ColorPicker.svelte"
    import HueSlider from "./HueSlider.svelte"
    import ShowGaps from "./ShowGaps.svelte"
    import Export from "./Export.svelte"
</script>

<div
    class="m-3 ml-1 mt-0 flex w-1/6 min-w-[300px] flex-col justify-between rounded-xl border-2 border-gray-200 bg-gray-100 p-4 shadow-md"
>
    <div class="flex w-full flex-col items-start gap-8">
        <p class="-mb-4 text-lg font-bold">Settings</p>

        <ColorPicker />

        <div class="divider -my-4" />

        <HueSlider />

        <ShowGaps />
    </div>

    <Export />
</div>
