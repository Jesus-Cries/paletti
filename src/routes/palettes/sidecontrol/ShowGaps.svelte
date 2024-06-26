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

<SettingWrapper
    label="Spacing"
    infoText="Colors lined up next to each other can look like a color gradient. Using gaps can prevent this."
    tooltipPosition="right"
>
    <div class="flex w-full gap-2">
        {#each buttons as button}
            <button
                class={`btn flex h-fit flex-1 flex-col gap-2 border-2 border-base-300 bg-base-100 py-2.5 hover:bg-base-100 ${
                    $colorSettings.showGap === button.value
                        ? "border-primary text-base-content shadow-inner hover:border-primary dark:border-primary-600 dark:hover:border-primary-600"
                        : "text-gray-400 shadow hover:text-base-content active:shadow-inner dark:hover:border-gray-700"
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
