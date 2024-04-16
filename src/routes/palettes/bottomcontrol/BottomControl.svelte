<script lang="ts">
    import UndoRedo from "./UndoRedo.svelte"
    import DiceButton from "./DiceButton.svelte"
</script>

<div class="absolute bottom-1 ml-auto mr-auto flex w-full justify-center md:pb-6">
    <div
        class="z-50 flex items-center gap-10 rounded-full border-2 border-gray-200 bg-gray-100 px-10 py-4 shadow-md"
    >
        <UndoRedo direction="back" />
        <DiceButton />
        <UndoRedo direction="forward" />
    </div>
</div>
