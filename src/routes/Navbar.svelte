<script lang="ts">
    import { page } from "$app/stores"
    import { Github, Menu, MoonStar, Sun } from "lucide-svelte"
    import Domain from "./Domain.svelte"

    export let theme: string

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
    class="fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-base-100 pl-1 shadow md:h-16 md:pl-2.5 dark:border-b dark:border-base-300"
>
    <Domain />

    <!-- Desktop view -->
    <div class="hidden pr-6 sm:flex">
        <div class="items-center gap-3 xs:flex md:gap-6">
            {#each pages as page}
                <a
                    class="btn btn-ghost no-animation btn-xs relative uppercase md:btn-md hover:bg-transparent hover:text-primary dark:hover:text-primary-600
                {isVisited(pathname, page.link) && 'text-primary dark:text-primary-600'}"
                    href={/** Remove link if palettes page is already visited.
                     * This is needed to avoid breaking history when clicking on the link to palettes while on palettes.
                     */
                    isVisited(pathname, page.link) && page.link === "/palettes" ? "#" : page.link}
                >
                    {page.name}

                    <span
                        class="absolute -bottom-[17px] h-0.5 rounded-full bg-primary transition-[width] duration-500 md:-bottom-[9px] dark:bg-primary-600
                    {isVisited(pathname, page.link) ? 'w-full' : 'w-0'}"
                    />
                </a>
            {/each}
        </div>

        <div class="divider divider-horizontal py-2 before:bg-base-300 after:bg-base-300 md:py-1" />

        <div class="flex">
            <!-- Github -->
            <a
                class="btn btn-ghost hover:bg-transparent hover:text-primary"
                href="https://github.com/Jesus-Cries/paletti"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span class="hidden md:block"><Github strokeWidth={1.5} /></span>
                <span class="md:hidden"><Github strokeWidth={1.5} size={20} /></span>
            </a>

            <!-- Theme toggle -->
            <label class="swap swap-rotate transition-colors hover:text-primary">
                <!-- This hidden checkbox controls the state -->
                <input type="checkbox" data-toggle-theme="light,dark" checked={theme === "dark"} />

                <span class="btn btn-ghost swap-off hover:bg-transparent">
                    <span class="hidden md:block"><Sun strokeWidth={1.8} /></span>
                    <span class="md:hidden"><Sun strokeWidth={1.8} size={20} /></span>
                </span>

                <span class="btn btn-ghost swap-on hover:bg-transparent">
                    <span class="hidden md:block"><MoonStar strokeWidth={1.5} /></span>
                    <span class="md:hidden"><MoonStar strokeWidth={1.5} size={20} /></span>
                </span>
            </label>
        </div>
    </div>

    <!-- Mobile view -->
    <div class="dropdown dropdown-end dropdown-bottom flex sm:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost hover:bg-transparent"><Menu /></div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
            tabindex="0"
            class="menu dropdown-content z-[1] mr-1.5 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow"
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
                <div class="divider my-0 pl-1.5 pr-3.5 before:bg-base-300 after:bg-base-300" />
            </li>

            <!-- Github -->
            <li>
                <a
                    href="https://github.com/Jesus-Cries/paletti"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </li>

            <!-- Theme toggle -->
            <li>
                <label class="swap justify-start">
                    <!-- This hidden checkbox controls the state -->
                    <input
                        type="checkbox"
                        data-toggle-theme="light,dark"
                        checked={theme === "dark"}
                    />

                    <div class="swap-off flex gap-3">
                        <p>Light mode</p>
                        <Sun strokeWidth={1.8} size={18} />
                    </div>

                    <div class="swap-on flex gap-3.5">
                        <p>Dark mode</p>
                        <MoonStar strokeWidth={1.5} size={18} />
                    </div>
                </label>
            </li>
        </ul>
    </div>
</div>
