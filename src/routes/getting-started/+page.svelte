<script>
    import { fade } from "svelte/transition"
    import PaletteSample from "./PaletteSample.svelte"
    import QuickNav from "./QuickNav.svelte"
    import QuickNavLink from "./QuickNavLink.svelte"
</script>

<div transition:fade={{ duration: 100 }} class="absolute flex w-full justify-center pt-10">
    <QuickNav />
    <article
        class="prose max-w-3xl px-10 pb-12 text-gray-600 [&_a]:text-gray-800 [&_blockquote]:text-gray-800 [&_h1]:text-gray-800 [&_h2]:text-gray-800 [&_h3]:text-gray-800 [&_h4]:text-gray-800 [&_hr]:bg-gray-100"
    >
        <h1>Getting started</h1>

        <p>
            Remember those color websites that always give you 5 magic colors for your design? In
            reality you need way more than that. Let's go through the different types of colors you
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
            Take for example the "color" gray which makes up the majority of an interface. According
            to the <i>60-30-10 Rule</i> it should occupy about 60% of your design. When designing a website
            you will realize that a single shade of gray is not enough. You need multiple shades of gray
            to create a visually appealing design.
        </p>

        <p>Take the gray color palette for this website as an example:</p>

        <PaletteSample
            colors={[
                "bg-gray-900",
                "bg-gray-800",
                "bg-gray-700",
                "bg-gray-600",
                "bg-gray-500",
                "bg-gray-400",
                "bg-gray-300",
                "bg-gray-200",
                "bg-gray-100",
            ]}
        />

        <p>
            As you can see I like my palettes with 9 colors. That way you have a good amount of
            choice. If I didn't mess it up you should see these colors on most of the elements on
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
                "bg-primary-900",
                "bg-primary-800",
                "bg-primary-700",
                "bg-primary-600",
                "bg-primary-500",
                "bg-primary-400",
                "bg-primary-300",
                "bg-primary-200",
                "bg-primary-100",
            ]}
        />

        <p>
            This palette is mostly used for highlighting interactive elements like buttons. It can
            also be used as a background color as you can see <a href="/#features">here</a>.
        </p>

        <QuickNavLink id="what-you-might-need-as-well" />
        <h2>What you might need as well</h2>

        <QuickNavLink id="secondary-color" />
        <h3>Secondary color</h3>

        <p>
            If you're wondering what the <i>10</i> from the <i>60-30-10 Rule</i> is, you've come to the
            right place. Depending on the complexity of your design you might want to introduce a secondary
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
            Now you've heard what palettes you (might) need. Let's have a look at how to actually
            create them.
        </p>

        <QuickNavLink id="hsl" />
        <h3>HSL</h3>

        <p>
            But first you need to know a little bit about the color model <a
                href="https://www.w3schools.com/colors/colors_hsl.asp"
                target="_blank"
                rel="noopener noreferrer">HSL</a
            >. The letters stand for <i>Hue</i>, <i>Saturation</i> and
            <i>lightness</i>. Each of these values describes an aspect of color:
        </p>

        <ol>
            <li>
                <b>Hue</b> is a value from 0 to 360 that describes the position on a color wheel. For
                example 0 or 360 is red, 120 is green and 240 is blue.
            </li>
            <li>
                <b>Saturation</b> describes the intensity of a color. It ranges from 0 to 100. The lower
                the value the grayer a color looks.
            </li>
            <li>
                <b>Lightness</b> is the amount of light a color has. It also ranges from 0 to 100. A
                lightness of 0 means that there is no light at all. This makes the color fully black
                while a value of 100 makes it fully white.
            </li>
        </ol>

        <QuickNavLink id="choosing-a-base-color" />
        <h3>Choosing a base color</h3>

        <p>
            Paletti creates your color palettes based on a base color. This color will be in the
            "center" of your palette and the other colors will be calculated based on it.
        </p>

        <p>For the best results stick to the following guidelines:</p>

        <ul>
            <li>
                <p>
                    <b>Hue: </b>Choose whatever you like.
                </p>
            </li>
            <li>
                <b>Saturation:</b>
                <ul>
                    <li>
                        <p><b>Grayish colors: </b>Choose a value between 4 and 10.</p>
                    </li>
                    <li>
                        <p><b>Saturated colors: </b>Choose a value between 10 and 90.</p>
                    </li>
                </ul>
            </li>
            <li>
                <p>
                    <b>Lightness: </b>I found that I got the best results with values from 40 to 60.
                </p>
            </li>
        </ul>

        <p>These guidelines are based on my experience. Of course, you're free to experiment!</p>

        <QuickNavLink id="individualizing" />
        <h3>Individualizing</h3>

        <p>
            If you want to give your palettes a personal touch you can adjust the <b>Hue Rotation</b
            >. This will change the hue of all colors in your palette by a certain amount. The
            further away from the base color the more the colors will change. This can be useful if
            you want to give your palettes a different tint.
        </p>

        <p>
            In addition to that, you can give your palettes a name to make it easier to distinguish
            them. This name is also used in some of the export options.
        </p>

        <QuickNavLink id="exporting" />
        <h3>Exporting</h3>

        <p>Once you're happy with your color palettes you have multiple export options:</p>

        <ul>
            <li>
                <b>CSS Variables</b>
                <p>
                    Use this export option if you want to use your color palettes as CSS variables
                    inside of your CSS file.
                </p>
            </li>
            <li>
                <b>Tailwind CSS</b>
                <p>
                    Use this export option if you use
                    <a href="https://tailwindcss.com/">Tailwind CSS</a> and want to add your
                    palettes to your <code>tailwind.config.js</code>.
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
                    <a href="https://www.typescriptlang.org/"> Typescript</a>
                    .
                </p>
            </li>
        </ul>

        <p>By the way: Your palette names are automatically adopted where appropriate.</p>
    </article>
</div>
