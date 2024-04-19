<script lang="ts">
    // Inspired by Hyperplexed: https://www.youtube.com/watch?v=5a8NyGLlorI

    import { onMount } from "svelte"

    export let colors: string[] = ["6F0021", "EF347C", "FFB9CE"]
    export let useMouseAnimation: boolean = false
    export let classOverride: string = ""

    let logo: HTMLElement

    const animationDelay: number = 2000

    if (useMouseAnimation)
        // Wait for logo transition before getting its position
        setTimeout(() => {
            if (logo === undefined) return
            if (logo === null) return

            logoX = logo.getBoundingClientRect().left + logo.getBoundingClientRect().width / 2
            logoY = logo.getBoundingClientRect().top + logo.getBoundingClientRect().height / 2
        }, animationDelay)

    let logoX: number = 0
    let logoY: number = 0

    const translateXDefault: number = 6.5
    const translateYDefault: number = 0

    const maxTranslateX: number = 9
    const maxTranslateY: number = 7

    let translateX: number = translateXDefault
    let translateY: number = translateYDefault

    /** Describes if mouse has left the screen. */
    let isMouseGone: boolean = false

    /** Calculate translate values if mouse moves. */
    function handleMouseMove(event: PointerEvent) {
        if (event.pointerType === "touch") return

        isMouseGone = false

        let mouseX: number = event.pageX
        let mouseY: number = event.pageY

        /** This number is responsible for damping the logo translate.
         * The higher the number, the less the letters will move.
         * The lower, the more they will move.
         */
        const translateDamper: number = 85

        translateX = (mouseX - logoX) / translateDamper
        translateY = (mouseY - logoY) / translateDamper

        translateX = Math.min(translateX, maxTranslateX)
        translateY = Math.min(translateY, maxTranslateY)
    }

    /** Reset translate values if mouse leaves screen. */
    function handleMouseLeave() {
        isMouseGone = true

        translateX = translateXDefault
        translateY = translateYDefault
    }

    onMount(() => {
        if (useMouseAnimation)
            // Wait for logo transition before adding mousemove event listener
            setTimeout(() => {
                document.addEventListener("pointermove", handleMouseMove)
            }, animationDelay)

        document.body.onmouseleave = handleMouseLeave

        return () => {
            document.removeEventListener("pointermove", handleMouseMove)
        }
    })
</script>

<div
    bind:this={logo}
    class="flex cursor-default {classOverride} relative [&>div]:transition-transform [&>div]:duration-75 [&>div]:ease-linear {isMouseGone &&
        '[&>div]:!duration-500 [&>div]:!ease-out'}"
>
    <div class="museomoderno text-6xl font-black" style="color: #{colors[0]}">p</div>
    <div
        class="museomoderno absolute text-6xl font-black"
        style="color: #{colors[1]}; transform: translate({translateX}px, {translateY}px)"
    >
        p
    </div>
    <div
        class="museomoderno absolute text-6xl font-black"
        style="color: #{colors[2]}; transform: translate({translateX * 2}px, {translateY * 2}px)"
    >
        p
    </div>
</div>

<style>
    .museomoderno {
        font-family: "MuseoModerno", sans-serif;
    }
</style>
