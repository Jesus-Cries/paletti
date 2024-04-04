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

<div
    class="fixed top-0 z-50 -mt-1.5 flex w-full items-center justify-between bg-white pb-2 pl-4 pr-4 pt-0 shadow md:-mt-3 md:pb-2 md:pl-7 md:pr-10 md:pt-1"
>
    <Domain />
    <div class="flex -translate-y-1 gap-2 pt-6 md:gap-14">
        {#each pages as page}
            <a
                class="btn btn-ghost no-animation btn-xs uppercase md:btn-md hover:bg-transparent hover:text-primary"
                href={page.link}>{page.name}</a
            >
        {/each}
    </div>
</div>
