<script lang="ts">
    import { Info } from "lucide-svelte"

    export let label: string
    export let labelSize: "small" | "medium" = "medium"
    export let infoText: string | undefined = undefined
    export let value: number | undefined = undefined
    export let tooltipPosition: "top" | "bottom" | "left" | "right" = "top"

    const tooltipPositionClass: string = {
        top: "tooltip-top",
        bottom: "tooltip-bottom",
        left: "tooltip-left",
        right: "tooltip-right",
    }[tooltipPosition]
</script>

<div class={`flex w-full flex-col ${labelSize === "small" ? "gap-3" : "gap-2"}`}>
    <div class={`flex w-full items-baseline justify-between ${labelSize === "small" && "text-sm"}`}>
        <div class="flex items-center gap-1.5">
            <label for={label} class="font-semibold">
                {label}
            </label>
            {#if infoText !== undefined}
                <div
                    class="tooltip z-50 -translate-y-px text-base-content before:max-w-[180px] {tooltipPositionClass}"
                    data-tip={infoText}
                >
                    <Info size={labelSize === "medium" ? "16" : "14"} />
                </div>
            {/if}
        </div>
        {#if value !== undefined}
            <p>{value}</p>
        {/if}
    </div>
    <slot />
</div>
