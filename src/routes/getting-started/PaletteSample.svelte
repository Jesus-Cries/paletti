<script lang="ts">
    export let colors: string[]
</script>

<div class="flex h-5 w-full rounded-full">
    {#each colors as color, index}
        <div
            class="h-full flex-1 {color} {index === 0 && 'rounded-l-full'} {index ===
                colors.length - 1 && 'rounded-r-full'}"
        />
    {/each}
</div>
