<script lang="ts">
    import { ChevronUp } from "lucide-svelte"
    import { onMount } from "svelte"

    let showButton: boolean = false

    /** Shows scroll button in bottom right corner if scrolled down more than 500px */
    function handleScroll() {
        showButton = window.scrollY > 500
    }

    onMount(() => {
        document.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    })
</script>

<button
    on:click={() => {
        window.scrollTo(0, 0)
    }}
    disabled={!showButton}
    class="btn btn-circle btn-primary fixed bottom-6 right-6 z-[100] border-none bg-primary-600 shadow-md hover:bg-primary-500 {!showButton &&
        'opacity-0'}"
>
    <ChevronUp color="#fff" size="26" />
</button>
