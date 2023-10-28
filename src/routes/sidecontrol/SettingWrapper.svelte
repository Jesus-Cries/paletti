<script lang="ts">
    export let label: string
    export let labelSize: "small" | "medium" = "medium"
    export let value: number | undefined = undefined
</script>

<div class={`flex w-full max-w-md flex-col ${labelSize === "small" ? "gap-3" : "gap-2"}`}>
    <div class={`flex w-full items-baseline justify-between ${labelSize === "small" && "text-sm"}`}>
        <label for={label} class="font-semibold">
            {label}
        </label>
        {#if value !== undefined}
            <p>{value}</p>
        {/if}
    </div>
    <slot />
</div>
