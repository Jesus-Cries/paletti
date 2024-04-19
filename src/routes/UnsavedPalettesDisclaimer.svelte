<script lang="ts">
    import { beforeNavigate } from "$app/navigation"
    import { historyBack, historyForward } from "./palettes/store"

    beforeNavigate(({ to, cancel }) => {
        // Disable disclaimer while developing
        if (window.location.hostname === "localhost") return
        // Check if there are unsaved palettes
        if ($historyBack.length === 0 && $historyForward.length === 0) return

        // If 'to' is false, we're navigating externally
        // Calling 'cancel' will prevent the navigation
        // and display a system dialog
        if (!to) cancel()
    })
</script>
