<script lang="ts">
    import { Redo, Undo } from "lucide-svelte"
    import { getContext } from "svelte"
    import { historyBack, historyForward } from "../store"

    export let direction: "back" | "forward"

    const moveHistory: (direction: "back" | "forward") => void = getContext("moveHistory")
</script>

<div
    class="inline sm:tooltip"
    data-tip={direction === "back"
        ? "Go to previous palette [Ctrl + z]"
        : "Go to next palette [Ctrl + y]"}
>
    <button
        class="btn btn-circle btn-ghost"
        disabled={(direction === "back" && $historyBack.length < 2) ||
            (direction === "forward" && $historyForward.length === 0)}
        on:click={() => {
            moveHistory(direction)
        }}
    >
        {#if direction === "back"}
            <Undo />
        {:else}
            <Redo />
        {/if}
    </button>
</div>
