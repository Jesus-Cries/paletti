<script lang="ts">
    import { Columns, StretchVertical } from "lucide-svelte"
    import { colorSettings } from "../store"
    import SettingWrapper from "./SettingWrapper.svelte"
    import { onMount } from "svelte"

    interface ButtonProps {
        icon: typeof Columns | typeof StretchVertical
        text: string
        value: boolean
    }

    const buttons: ButtonProps[] = [
        {
            icon: Columns,
            text: "No gaps",
            value: false,
        },
        {
            icon: StretchVertical,
            text: "Gaps",
            value: true,
        },
    ]

    // Toggle show gap when receiving corresponding event
    onMount(() => {
        function toggleShowGap() {
            colorSettings.update((settings) => ({
                ...settings,
                showGap: !$colorSettings.showGap,
            }))
        }

        document.addEventListener("toggleShowGap", toggleShowGap)

        return () => {
            document.removeEventListener("toggleShowGap", toggleShowGap)
        }
    })
</script>

<SettingWrapper label="Spacing">
    <div class="flex w-full gap-2">
        {#each buttons as button}
            <button
                class={`btn flex h-fit flex-1 flex-col gap-2 border-2 border-gray-200 bg-white py-2.5 hover:bg-gray-100 active:border-paletti-300 ${
                    $colorSettings.showGap === button.value
                        ? "border-paletti-500 text-gray-900 shadow-inner hover:border-paletti-500"
                        : "text-gray-400 shadow hover:text-gray-900 active:shadow-inner"
                }`}
                on:click={() => {
                    colorSettings.update((settings) => ({
                        ...settings,
                        showGap: button.value,
                    }))
                }}
            >
                <div class="drop-shadow-lg">
                    <svelte:component this={button.icon} size={24}></svelte:component>
                </div>
                <p class="text-xs">{button.text}</p>
            </button>
        {/each}
    </div>
</SettingWrapper>
