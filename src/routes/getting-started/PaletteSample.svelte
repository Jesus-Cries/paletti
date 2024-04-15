<script lang="ts">
    export let colors: string[]
</script>

<div class="flex h-5 w-full">
    {#each colors as color}
        <div class="h-full flex-1 {color}" />
    {/each}
</div>
