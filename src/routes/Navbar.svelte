<script lang="ts">
    import { page } from "$app/stores"
    import { Github, Menu } from "lucide-svelte"
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

    $: pathname = $page.url.pathname

    /** Checks if page is currently visited / selected */
    function isVisited(pathname: string, link: string) {
        if (pathname.replaceAll("/", "") === link.replaceAll("/", "")) return true

        return false
    }
</script>

<div
    class="fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-white pl-1 shadow md:h-16 md:pl-2.5"
>
    <Domain />
    <div class="hidden pr-4 sm:flex">
        <div class="items-center gap-3 xs:flex md:gap-6">
            {#each pages as page}
                <a
                    class="btn btn-ghost no-animation btn-xs relative uppercase md:btn-md hover:bg-transparent hover:text-primary
                {isVisited(pathname, page.link) && 'text-primary'}"
                    href={/** Remove link if palettes page is already visited.
                     * This is needed to avoid breaking history when clicking on the link to palettes while on palettes.
                     */
                    isVisited(pathname, page.link) && page.link === "/palettes" ? "#" : page.link}
                >
                    {page.name}

                    <span
                        class="absolute -bottom-[17px] h-0.5 rounded-full bg-primary transition-[width] duration-500 md:-bottom-[9px]
                    {isVisited(pathname, page.link) ? 'w-full' : 'w-0'}"
                    />
                </a>
            {/each}
        </div>

        <div class="divider divider-horizontal py-2 before:bg-gray-200 after:bg-gray-200 md:py-1" />

        <a
            class="btn btn-ghost hover:bg-transparent hover:text-primary"
            href="https://github.com/Jesus-Cries/paletti"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span class="hidden md:block"><Github strokeWidth={1.5} /></span>
            <span class="md:hidden"><Github strokeWidth={1.5} size={20} /></span>
        </a>
    </div>

    <div class="dropdown dropdown-end dropdown-bottom flex sm:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost hover:bg-transparent"><Menu /></div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
            tabindex="0"
            class="menu dropdown-content z-[1] w-52 rounded-box border border-gray-200 bg-base-100 p-2 shadow"
        >
            {#each pages as page}
                <li>
                    <a
                        href={isVisited(pathname, page.link) && page.link === "/palettes"
                            ? "#"
                            : page.link}>{page.name}</a
                    >
                </li>
            {/each}

            <li>
                <div class="divider my-0 pl-1.5 pr-3.5 before:bg-gray-200 after:bg-gray-200" />
            </li>

            <li>
                <a
                    href="https://github.com/Jesus-Cries/paletti"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </li>
        </ul>
    </div>
</div>
