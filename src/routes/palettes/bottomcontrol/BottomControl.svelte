<script lang="ts">
    import UndoRedo from "./UndoRedo.svelte"
    import DiceButton from "./DiceButton.svelte"
</script>

<div
    class="fixed bottom-6 z-50 ml-auto mr-auto flex w-full justify-center md:absolute md:bottom-1 md:pb-6"
>
    <div
        class="z-[100] flex items-center gap-10 rounded-full border-2 border-base-300/50 bg-base-100 px-10 py-4 shadow-md dark:border-base-300 dark:bg-base-200"
    >
        <UndoRedo direction="back" />
        <DiceButton />
        <UndoRedo direction="forward" />
    </div>
</div>
