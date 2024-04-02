<script lang="ts">
    export let colors: string[]
</script>

<div class="flex">
    <div class="museomoderno -mr-8 text-6xl font-black" style="color: #{colors[0]}">p</div>
    <div class="museomoderno text-6xl font-black" style="color: #{colors[1]}">p</div>
    <div class="museomoderno -ml-8 text-6xl font-black" style="color: #{colors[2]}">p</div>
</div>

<style>
    .museomoderno {
        font-family: "MuseoModerno", sans-serif;
    }
</style>
