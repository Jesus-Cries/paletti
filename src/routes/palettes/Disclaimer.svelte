<script lang="ts">
    import { onMount } from "svelte"

    /** Ref to modal element */
    let modal: any

    onMount(() => {
        modal.showModal()
    })
</script>

<dialog bind:this={modal} class="modal md:hidden">
    <div class="modal-box max-w-xl">
        <h3 class="text-lg font-bold">Disclaimer</h3>
        <div class="flex flex-col gap-3 pb-2 pt-4">
            <p>The mobile version of the color palette generator is <b>only a demo</b>.</p>
            <p>If you want to experience the full functionality, please use a computer.</p>
        </div>
        <form method="dialog">
            <button class="btn btn-primary mt-4 w-full">I understand</button>
        </form>
    </div>
    <form method="dialog" class="modal-backdrop md:hidden">
        <button>close</button>
    </form>
</dialog>
