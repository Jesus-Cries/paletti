<script lang="ts">
    import Domain from "./Domain.svelte"

    interface Page {
        name: string
        link: string
    }

    const pages: Page[] = [
        { name: "Home", link: "/" },
        { name: "Generator", link: "/palettes" },
    ]
</script>

<div class="flex items-center justify-between pb-9 pl-4 pr-4 pt-0 md:pl-7 md:pr-10 md:pt-1">
    <Domain />
    <div class="flex pt-6 md:gap-14">
        {#each pages as page}
            <a
                class="btn btn-ghost no-animation btn-xs uppercase md:btn-md hover:bg-transparent hover:text-primary"
                href={page.link}>{page.name}</a
            >
        {/each}
    </div>
</div>
