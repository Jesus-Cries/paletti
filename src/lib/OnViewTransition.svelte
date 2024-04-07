<!--
  @component

  Shows content in slot after it is seen on screen
  This automatically triggers all defined svelte "in" transitions.

  @slot - Content to show after being in view
  @param {boolean} repeat - Determines if the transition is played again when the element is scrolled out of view and back into view
  @param {string} containerClass - CSS class which is applied to the outer container
  @param {string} rootMargin - Offset to delay the trigger of the transition ({@link https://github.com/maciekgrzybek/svelte-inview#animations})
-->
<script lang="ts">
    import { inview } from "svelte-inview"

    export let repeat: boolean = false
    export let containerClass: string = ""
    export let rootMargin: string = "-10%"

    let isInView: boolean = false
</script>

<div
    use:inview={{ unobserveOnEnter: !repeat, rootMargin: rootMargin }}
    on:change={({ detail }) => {
        isInView = detail.inView
    }}
    class={containerClass}
>
    {#if isInView}
        <slot />
    {:else}
        <div class="w-full opacity-0">
            <slot />
        </div>
    {/if}
</div>
