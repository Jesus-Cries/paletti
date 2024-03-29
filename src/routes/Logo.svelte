<script lang="ts">
    export let colors: string[]
</script>

<a class="flex w-fit content-center items-baseline gap-4" href="/">
    <div class="flex">
        <div class="museomoderno -mr-8 text-6xl font-black" style="color: #{colors[0]}">p</div>
        <div class="museomoderno text-6xl font-black" style="color: #{colors[1]}">p</div>
        <div class="museomoderno -ml-8 text-6xl font-black" style="color: #{colors[2]}">p</div>
    </div>
    <p class="comfortaa none text-3xl font-bold">paletti</p>
</a>

<style>
    .comfortaa {
        font-family: "Comfortaa", sans-serif;
    }

    .museomoderno {
        font-family: "MuseoModerno", sans-serif;
    }
</style>
