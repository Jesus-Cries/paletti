<script lang="ts">
    import { page } from "$app/stores"
    import { Menu } from "lucide-svelte"
    import Domain from "./Domain.svelte"

    interface Page {
        name: string
        link: string
    }

    const pages: Page[] = [
        { name: "Home", link: "/" },
        { name: "Getting started", link: "/getting-started" },
        { name: "Generator", link: "/palettes" },
    ]

    let pathname: string = ""
    let hash: string = ""

    $: pathname = $page.url.pathname
    $: hash = $page.url.hash

    function isVisited(pathname: string, hash: string, link: string) {
        if (hash === "" && pathname.replaceAll("/", "") === link.replaceAll("/", "")) return true

        if (hash !== "" && hash.replaceAll("/", "") === link.replaceAll("/", "")) return true

        return false
    }
</script>

<div
    class="fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-white pl-1 shadow md:h-16 md:pl-2.5"
>
    <Domain />
    <div class="hidden gap-3 pr-4 xs:flex md:gap-6">
        {#each pages as page}
            <a
                class="btn btn-ghost no-animation btn-xs relative uppercase md:btn-md hover:bg-transparent hover:text-primary
                {isVisited(pathname, hash, page.link) && 'text-primary'}"
                href={page.link}
            >
                {page.name}

                <span
                    class="absolute -bottom-[17px] h-0.5 rounded-full bg-primary transition-[width] duration-500 md:-bottom-[9px]
                    {isVisited(pathname, hash, page.link) ? 'w-full' : 'w-0'}"
                />
            </a>
        {/each}
    </div>

    <div class="dropdown dropdown-end dropdown-bottom flex xs:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost hover:bg-transparent"><Menu /></div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
            tabindex="0"
            class="menu dropdown-content z-[1] w-52 rounded-box border border-gray-200 bg-base-100 p-2 shadow"
        >
            {#each pages as page}
                <li><a href={page.link}>{page.name}</a></li>
            {/each}
        </ul>
    </div>
</div>
