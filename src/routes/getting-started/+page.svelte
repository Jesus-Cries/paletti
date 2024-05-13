<script>
    import { fade } from "svelte/transition"
    import PaletteSample from "./PaletteSample.svelte"
    import QuickNav from "./QuickNav.svelte"
    import QuickNavLink from "./QuickNavLink.svelte"
</script>

<div transition:fade={{ duration: 100 }} class="absolute flex w-full justify-center pt-10">
    <QuickNav />
    <article
        class="prose max-w-3xl px-10 pb-12 text-gray-600 dark:text-gray-400 [&_a]:text-base-content [&_b]:dark:text-gray-200 [&_blockquote]:text-base-content [&_h1]:text-base-content [&_h2]:text-base-content [&_h3]:text-base-content [&_h4]:text-base-content"
    >
        <h1>Getting started</h1>

        <p>
            Remember those color websites that always give you 5 magic colors for your design? In
            reality, you need way more than that. Let's go through the different types of colors you
            probably need.
        </p>

        <QuickNavLink id="what-you-definitely-need" />
        <h2>What you definitely need</h2>

        <QuickNavLink id="multiple-shades-of-gray" />
        <h3>Multiple shades of gray</h3>

        <p>
            The most important takeaway is that you don't need a collection of individual colors.
            <b>You need a collection of multiple color palettes.</b>
        </p>

        <p>
            Take for example the "color" gray, which makes up the majority of an interface.
            According to the <i>60-30-10 Rule</i> it should occupy about 60% of your design. When designing
            a website, you will realize that a single shade of gray is not enough. You need multiple
            shades of gray to create a visually appealing design.
        </p>

        <p>Take the gray color palette for this website as an example:</p>

        <PaletteSample
            colors={[
                "bg-gray-950",
                "bg-gray-900",
                "bg-gray-800",
                "bg-gray-700",
                "bg-gray-600",
                "bg-gray-500",
                "bg-gray-400",
                "bg-gray-300",
                "bg-gray-200",
                "bg-gray-100",
                "bg-gray-50",
            ]}
        />

        <p>
            As you can see, I like my palettes with 11 colors. That way you have a good amount of
            choice. If I didn't mess it up, you should see these colors on most of the elements on
            this website like text and background.
        </p>

        <QuickNavLink id="primary-color" />
        <h3>Primary color</h3>

        <p>
            This is the branding color for your design. It should be used sparingly to highlight
            important parts of a website. This is the <i>30</i> from the <i>60-30-10 Rule</i>.
        </p>

        <p>This is the primary color palette for Paletti:</p>

        <PaletteSample
            colors={[
                "bg-primary-950",
                "bg-primary-900",
                "bg-primary-800",
                "bg-primary-700",
                "bg-primary-600",
                "bg-primary-500",
                "bg-primary-400",
                "bg-primary-300",
                "bg-primary-200",
                "bg-primary-100",
                "bg-primary-50",
            ]}
        />

        <p>
            This palette is mostly used for highlighting interactive elements like buttons. It can
            also be used as a background color, as you can see <a href="/#features">here</a>.
        </p>

        <QuickNavLink id="what-you-might-need-as-well" />
        <h2>What you might need as well</h2>

        <QuickNavLink id="secondary-color" />
        <h3>Secondary color</h3>

        <p>
            If you're wondering what the <i>10</i> from the <i>60-30-10 Rule</i> is, you've come to the
            right place. Depending on the complexity of your design, you might want to introduce a secondary
            color. This color can be used to highlight new features or other important parts of your
            website.
        </p>

        <p>
            This website currently doesn't have a secondary color, so there is nothing to show here.
        </p>

        <QuickNavLink id="further-palettes" />
        <h3>Further palettes</h3>

        <p>
            You might also need further color palettes for highlighting success, warnings, and
            errors. The limit is your imagination.
        </p>

        <QuickNavLink id="how-to-use-paletti" />
        <h2>How to use Paletti</h2>

        <p>
            Now you've heard what palettes you (might) need. Let's take a look at how to actually
            create them.
        </p>

        <QuickNavLink id="creating-a-color-palette" />
        <h3>Creating a color palette</h3>

        <p>
            Paletti creates your color palettes based on a base color. All the other colors will be
            calculated based on it.
        </p>

        <p>So <b>just pick a color you like</b> and use it as a base color. It's that simple.</p>

        <p>
            If you want a little finer control you can use the
            <a
                href="https://www.w3schools.com/colors/colors_hsl.asp"
                target="_blank"
                rel="noopener noreferrer"
                >HSL
            </a>
            settings to adjust the hue, saturation and lightness of your base color.
        </p>

        <QuickNavLink id="individualizing" />
        <h3>Individualizing</h3>

        <p>
            If you want to give your palettes a personal touch, you can adjust the <b
                >Hue Rotation</b
            >. This will change the hue of all colors in your palette by a certain amount. The
            further away from the color in the middle of your palette, the more the colors will
            change. This can be useful if you want to give your palettes a different tint.
        </p>

        <p>
            In addition to that, you can give your palettes a name to make it easier to distinguish
            them. This name is also used in some of the export options.
        </p>

        <QuickNavLink id="exporting" />
        <h3>Exporting</h3>

        <p>Once you're happy with your color palettes, you have multiple export options:</p>

        <ul>
            <li>
                <b>CSS Variables</b>
                <p>
                    Use this export option if you want to use your color palettes as CSS variables
                    inside your CSS file.
                </p>
            </li>
            <li>
                <b>Tailwind CSS</b>
                <p>
                    Use this export option if you use
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                        Tailwind CSS
                    </a>
                    and want to add your palettes to your <code>tailwind.config.js</code>.
                </p>
            </li>
            <li>
                <b>Link</b>
                <p>
                    Use this export option if you simply want to share your palettes with a friend.
                    This way they can open it in their browser.
                </p>
            </li>
            <li>
                <b>Array</b>
                <p>
                    Use this export option if you want to use your palettes in your code. The code
                    in this export is written in
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Typescript
                    </a>
                    .
                </p>
            </li>
        </ul>

        <p>By the way: Your palette names are automatically adopted in most export options.</p>
    </article>
</div>
