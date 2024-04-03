<script lang="ts">
    import { fade } from "svelte/transition"
    import Logo from "./Logo.svelte"
</script>

<div transition:fade={{ duration: 100 }} class="absolute w-full">
    <div class="flex w-screen flex-col items-center">
        <div class="flex w-fit flex-col items-center gap-12 pt-6 md:gap-20">
            <Logo classOverride="scale-[1.5] md:scale-[2]" />
            <div class="flex flex-col items-center gap-4">
                <p class="text-3xl font-medium tracking-wider text-gray-600 md:text-5xl">
                    Unlock your
                </p>
                <p class="text-3xl font-medium tracking-wider text-gray-600 md:text-5xl">
                    inner designer
                </p>
            </div>
        </div>
    </div>
</div>
