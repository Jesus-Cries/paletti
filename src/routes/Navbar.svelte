<script lang="ts">
    import Logo from "./Logo.svelte"

    interface Page {
        name: string
        link: string
    }

    const pages: Page[] = [
        { name: "Home", link: "/" },
        { name: "Palettes", link: "/palettes" },
        { name: "FAQ", link: "/faq" },
    ]
</script>

<div class="flex items-center justify-between px-7 pb-9 pt-3">
    <Logo />
    <div class="flex gap-14">
        {#each pages as page}
            <a
                class="btn btn-ghost no-animation uppercase hover:bg-transparent hover:text-primary"
                href={page.link}>{page.name}</a
            >
        {/each}
    </div>
</div>
