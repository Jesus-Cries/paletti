<!--
  @component

  Shows content in slot after page is loaded.
  This automatically triggers all defined svelte "in" transitions.

  @slot - Content to show after mounting
-->
<script lang="ts">
    import { onMount } from "svelte"

    let play: boolean = false
    onMount(() => {
        play = true
    })
</script>

{#if play}
    <slot />
{:else}
    <div class="w-full opacity-0">
        <slot />
    </div>
{/if}
