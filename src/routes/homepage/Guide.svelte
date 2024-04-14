<script>
    import PaletteSample from "./PaletteSample.svelte"
</script>

<div class="flex justify-center pt-10">
    <article
        class="prose max-w-3xl px-10 pb-16 text-gray-600 [&_a]:text-gray-800 [&_blockquote]:text-gray-800 [&_h1]:text-gray-800 [&_h2]:text-gray-800 [&_h3]:text-gray-800 [&_h4]:text-gray-800 [&_hr]:bg-gray-100"
    >
        <h1>Creating color palettes is hard</h1>

        <p>
            Whenever I designed a website I always got hung up on colors. Of course I tried
            searching for help online but all I ever found were color websites that were like
        </p>

        <blockquote><p>These 5 magic colors are all you need for your design!</p></blockquote>

        <p>
            I've used so many of those color palette generators and they have never worked for me
            and I never knew why.
        </p>

        <p>
            But then I came across a book from the creators of
            <a href="https://tailwindcss.com/">Tailwind CSS</a>. If you haven't heard of Tailwind
            yet, you should definitely check it out! It makes writing CSS so much faster and more
            enjoyable.
        </p>

        <p>
            Back to the book: It's called
            <a href="https://www.refactoringui.com/">Refactoring UI</a>
            and it has been a real game changer for me. It's full of practical advice on how to make
            your website designs look better and it has a whole chapter on color.
        </p>

        <p>
            I've tried to utilize the knowledge from that chapter and created some color palettes
            that were actually usable and resulted in better-looking designs. But the process was
            still very time consuming. Creating a color palette manually from scratch took between 5
            and 10 minutes.
        </p>

        <p>So I thought to myself: <i>"Why not create a tool that does this for me?"</i>.</p>

        <blockquote>
            <p>
                And that's how you turn a five hour task into a one and a half month task. Because
                I'm a programmer. And that's what we do.
            </p>
        </blockquote>

        <p>
            And with that
            <a href="https://www.youtube.com/clip/Ugkxni6Ep6DCRKnrb4pMpkFiV9mF3Ed1Op3a">
                legendary quote
            </a>
            <i><b>Paletti</b></i> was born.
        </p>

        <hr />

        <h1 id="getting-started">Getting started</h1>

        <p>
            Remember those color websites that always give you 5 magic colors for your design? In
            reality you need way more than that. Let's go through the different types of colors you
            probably need.
        </p>

        <h2>Multiple shades of gray</h2>

        <p>
            Gray makes up the majority of an interface. According to the <i>60-30-10 Rule</i> it should
            make up about 60% of your design.
        </p>

        <p>The gray color palette for this website is the following:</p>

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
            If I didn't mess it up you should see these colors on most of the elements on this
            website like text and background.
        </p>

        <h2>A primary color</h2>

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
    </article>
</div>

<!-- In reality you need way more than 5 colors -->
<!-- What you actually need (Needs to be renamed due to Copyright) -->
<!-- Multiple shades of gray -->
<!-- Gray makes up the majority of an interface (60%) -->
<!-- For example used for text and backgrounds -->
<!-- The gray color palette for this website is the following -->
<!-- A primary color -->
<!-- This is the “branding” color for your design -->
<!-- Also needs multiple shades -->
<!-- Is used sparingly (30%) to highlight important parts of a website -->
<!-- Accent colors -->
<!-- In case you’re designing a more complex website you need further colors to highlight certain things -->
<!-- New features -->
<!-- Errors -->
<!-- Warnings -->
<!-- Confirmation -->
<!-- The limit is your imagination -->
<!-- How to create those color palettes using Paletti -->
<!-- For every palette you need to choose a “base color” (Explain HSL shortly) -->
<!-- Paletti creates color palettes containing 9 colors -->
<!-- The “base color” is the color in the center of that  -->
<!-- Paletti uses this color to calculate the rest of the colors -->
<!-- For the best results stick to the following guidelines -->
<!-- Hue: Whatever you like -->
<!-- Saturation:  -->
<!-- For grays: Between 4 and 10 -->
<!-- For saturated colors: Between 10 and 90 -->
<!-- Lightness: Between 40 and 60 -->
