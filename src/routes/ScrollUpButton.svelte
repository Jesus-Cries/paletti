<script lang="ts">
    import { onMount } from "svelte"
    import { ChevronUp } from "lucide-svelte"
    import { afterNavigate } from "$app/navigation"

    let showButton: boolean = false
    let throttled: boolean = false

    /** Shows scroll button in bottom right corner if scrolled down more than 500px. */
    function handleScroll() {
        if (throttled) return

        throttled = true

        showButton = window.scrollY > 500

        // Blocks multiple calls due to scroll event within 100ms
        setTimeout(() => {
            throttled = false
        }, 100)
    }

    // Hides button after navigation
    afterNavigate(() => {
        setTimeout(() => {
            showButton = false
        }, 100)
    })

    onMount(() => {
        document.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    })
</script>

<div
    class="!fixed bottom-6 right-6 z-[100] transition-all duration-300 sm:tooltip
    {!showButton && 'opacity-0'}"
    data-tip="To top"
>
    <button
        on:click={() => {
            window.scrollTo(0, 0)
        }}
        disabled={!showButton}
        class="btn btn-circle btn-primary border-none bg-primary-700 shadow-md sm:hover:bg-primary-600"
    >
        <ChevronUp color="#fff" size="26" />
    </button>
</div>
