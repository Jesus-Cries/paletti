<script lang="ts">
    import { page } from "$app/stores"
    import Domain from "./Domain.svelte"

    interface Page {
        name: string
        link: string
    }

    const pages: Page[] = [
        { name: "Home", link: "/" },
        { name: "Generator", link: "/palettes" },
    ]

    let path: string = ""
    $: path = $page.url.pathname
</script>

<div
    class="fixed top-0 z-50 -mt-1.5 flex w-full -translate-y-1 items-center justify-between bg-white pb-0.5 pl-1 pr-4 pt-0 shadow md:-mt-3 md:pl-2.5 md:pr-2.5 md:pt-1"
>
    <Domain />
    <div class="flex -translate-y-1 gap-2 pt-6 md:gap-14">
        {#each pages as page}
            <a
                class="btn btn-ghost no-animation btn-xs relative uppercase md:btn-md hover:bg-transparent hover:text-primary
                {path.replace('/', '') === page.link.replace('/', '') && 'text-primary'}"
                href={page.link}
            >
                {page.name}

                <span
                    class="absolute -bottom-3.5 h-0.5 rounded-full bg-primary transition-[width] duration-500 md:-bottom-2
                    {path.replace('/', '') === page.link.replace('/', '') ? 'w-full' : 'w-0'}"
                />
            </a>
        {/each}
    </div>
</div>
