// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 1
// Author: Bui Dang Khoa
// ID: s3978482

// This file contains data for all detail pages

const data = [
    {
        file_name: "american_mermaid",
        title: "American Mermaid",
        author: "Julia Langbein",
        desc: [
            `"Brilliantly sharp, funny, and thought-provoking, the gripping story of a woman trying to find her way in our chaotic world." —Madeline Miller, bestselling author of Circe`,
            `Broke English teacher Penelope Schleeman is as surprised as anyone when her feminist novel American Mermaid becomes a best-seller.  Lured by the promise of a big payday, she quits teaching and moves to L.A. to turn the novel into an action flick with the help of some studio hacks. But as she's pressured to change her main character from a fierce, androgynous eco-warrior to a teen sex object in a clamshell bra, strange things start to happen. Threats appear in the screenplay; siren calls lure Penelope’s co-writers into danger.  Is Penelope losing her mind, or has her mermaid come to life, enacting revenge for Hollywood’s violations?
            `,
            `American Mermaid follows a young woman braving the casual slights and cruel calculations of a ruthless industry town, where she discovers a beating heart in her own fiction, a mermaid who will fight to move between worlds without giving up her voice. A hilarious story about deep things, American Mermaid asks how far we’ll go to protect the parts of ourselves that are not for sale.
            `,
        ],
        cover_img: "../../images/books/american_mermaid.jpg",
        sub_imgs: [
            "../../images/books/american_mermaid-sub1.jpg",
            "../../images/books/american_mermaid-sub2.jpg",
            "../../images/books/american_mermaid-sub3.jpg",
        ],
        price: 14.99,
        breadcrumb_name: ["Home", "Special Offers", "American Mermaid"],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "above_ground",
        title: "Above Ground",
        author: "Clint Smith",
        desc: [
            `A remarkable poetry collection with "inextinguishable generosity and abundant wisdom" (Monica Youn) from Clint Smith, the #1 New York Times bestselling and National Book Critics Circle award-winning author of How the Word Is Passed.`,
            `Clint Smith’s vibrant and compelling new collection traverses the vast emotional terrain of fatherhood, and explores how becoming a parent has recalibrated his sense of the world. There are poems that interrogate the ways our lives are shaped by both personal lineages and historical institutions. There are poems that revel in the wonder of discovering the world anew through the eyes of your children, as they discover it for the first time. There are poems that meditate on what it means to raise a family in a world filled with constant social and political tumult. Above Ground wrestles with how we hold wonder and despair in the same hands, how we carry intimate moments of joy and a collective sense of mourning in the same body. Smith’s lyrical, narrative poems bring the reader on a journey not only through the early years of his children’s lives, but through the changing world in which they are growing up—through the changing world of which we are all a part.
            `,
            `Above Ground is a breathtaking collection that follows Smith's first award-winning book of poetry, Counting Descent.
            `,
        ],
        cover_img: "../../images/books/above_ground.jpg",
        sub_imgs: [
            "../../images/books/above_ground-sub1.jpg",
            "../../images/books/above_ground-sub2.jpg",
            "../../images/books/above_ground-sub3.jpg",
        ],
        price: 12.99,
        breadcrumb_name: ["Home", "Special Offers", "Above Ground"],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "stars_and_smoke",
        title: "Stars and Smoke",
        author: "Marie Lu",
        desc: [
            `This smoldering enemies-to-lovers novel from #1 New York Times bestselling author Marie Lu puts a superstar global phenomenon and a hotshot young spy on a collision course with danger – and Cupid’s arrow – in an electric new series perfect for fans of Nicola Yoon and Ally Carter.`,
            `Meet Winter Young – International pop sensation, with a voice like velvet and looks that could kill. His star power has smashed records, selling out stadiums from LA to London. His rabid fans would move heaven and earth for even a glimpse of him – just imagine what they’d do to become his latest fling.
            `,
            `Romance and danger abound in this “brilliant, breathtaking ride that will leave you clamoring for the sequel.” —Tahereh Mafi, #1 internationally bestselling author of Shatter Me .
            `,
        ],
        cover_img: "../../images/books/stars_and_smoke.jpg",
        sub_imgs: [
            "../../images/books/stars_and_smoke-sub1.webp",
            "../../images/books/stars_and_smoke-sub2.webp",
            "../../images/books/stars_and_smoke-sub3.webp",
        ],
        price: 13.99,
        breadcrumb_name: ["Home", "Special Offers", "Stars and Smoke"],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "when_the_sakura_bloom",
        title: "When the Sakura Bloom",
        author: "Narisa Togo",
        desc: [
            `“An understated ode to an iconic Japanese cultural celebration, mindfulness, and the restorative power of the seasons.”Kirkus Reviews`,
            `"Well suited to reading aloud, the concise text works well with the precise, delicate artwork, subtly encouraging viewers to slow down occasionally and enjoy fleeting moments of natural beauty." Booklist
            `,
            `When the Sakura Bloom by Nariso Togo sheds light on the cultural significance of cherry blossom season in Japan, and an insight into the unique mindset of its people. Through subtle text and gentle imagery readers will see the importance of slowing down to appreciate the moment. That comfort, not despair, can be found in the inevitable cycles of the seasons. How change can usher in opportunities and rejuvenation.
            `,
            `Moreover, When the Sakura Bloom is an understated illustration of the importance of celebrating the fleeting, delicate beauty of nature and the metaphor this represents for life itself.
            `,
        ],
        cover_img: "../../images/books/when-the-sakura-bloom.jpg",
        sub_imgs: [
            "../../images/books/when_the_sakura_bloom-sub1.jpeg",
            "../../images/books/when_the_sakura_bloom-sub2.jpeg",
            "../../images/books/when_the_sakura_bloom-sub3.jpeg",
        ],
        price: 16.34,
        breadcrumb_name: ["Home", "Special Offers", "When the Sakura Bloom"],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "peach_blossom_spring",
        title: "Peach Blossom Spring",
        author: "Melissa Fu",
        desc: [
            `"Within every misfortune there is a blessing and within every blessing, the seeds of misfortune, and so it goes, until the end of time."`,
            `It is 1938 in China and, as a young wife, Meilin’s future is bright. But with the Japanese army approaching, Meilin and her four year old son, Renshu, are forced to flee their home. Relying on little but their wits and a beautifully illustrated hand scroll, filled with ancient fables that offer solace and wisdom, they must travel through a ravaged country, seeking refuge.
            `,
            `Years later, Renshu has settled in America as Henry Dao. Though his daughter is desperate to understand her heritage, he refuses to talk about his childhood. How can he keep his family safe in this new land when the weight of his history threatens to drag them down? Yet how can Lily learn who she is if she can never know her family’s story?
            `,
            `Spanning continents and generations, Peach Blossom Spring is a bold and moving look at the history of modern China, told through the story of one family. It’s about the power of our past, the hope for a better future, and the haunting question: What would it mean to finally be home?
            `,
        ],
        cover_img: "../../images/books/peach-blossom-spring.jpg",
        sub_imgs: [
            "../../images/books/peach_blossom_spring-sub1.jpeg",
            "../../images/books/peach_blossom_spring-sub2.jpg",
            "../../images/books/peach_blossom_spring-sub3.png",
        ],
        price: 21.04,
        breadcrumb_name: ["Home", "Special Offers", "Peach Blossom Spring"],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "vegan_japaneasy",
        title: "Vegan JapanEasy: Over 80 Delicious Plant-Based Japanese Recipes",
        author: "Tim Anderson",
        desc: [
            `Believe it or not, Japanese cuisine in general is actually quite vegan-friendly, and many dishes can be made vegan with just a simple substitution or two.`,
            `You can enjoy the same big, bold, salty-sweet-spicy-rich-umami recipes of modern Japanese soul food without so much as glancing down the meat and dairy aisles. And best of all, it's super-easy to make!
            `,
            `In Vegan JapanEasy, Tim Anderson taps into Japan's rich culture of cookery that's already vegan or very nearly vegan, so there are no sad substitutes and zero shortcomings on taste. From classics like Vegetable Tempura, Onigiri, Mushroom Gyoza and Fried Tofu in Dashi, to clever vegan conversions including Cauliflower Katsu Curry, French Onion Ramen and Sichuan-Style Hot and Numbing Tofu with Ancient Grains, you don't need to be vegan to enjoy these tasty recipes. Add to that some outrageously good drinks and desserts, like the Watermelon Mojito and Soy Sauce Butterscotch Brownies, and you'll be spoilt for choice!
            `,
            `With ingredients like tangy miso, savory shiitake mushrooms and zingy ponzu, to name a few, who needs meat? So if you're new to veganism, new to Japanese cooking, new to both, or you just want to expand your meat-free repertoire, this is the book for you!
            `,
        ],
        cover_img: "../../images/books/vegan-japaneasy.jpg",
        sub_imgs: [
            "../../images/books/vegan_japaneasy-sub1.jpeg",
            "../../images/books/vegan_japaneasy-sub2.jpeg",
            "../../images/books/vegan_japaneasy-sub3.jpeg",
        ],
        price: 25.45,
        breadcrumb_name: ["Home", "Special Offers", "Vegan JapanEasy"],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "when_grandma_gives_you_a_lemon_tree",
        title: "When Grandma Gives You a Lemon Tree",
        author: "Jamie L.B. Deenihan (Author), Lorraine Rocha (Illustrator)",
        desc: [
            `When Grandma gives you a lemon tree, definitely don’t make a face! Care for the tree, and you might be surprised at how new things, and new ideas, bloom.`,
            `“Charms from cover to cover.” —Kirkus (Starred review) 
            `,
            `“When life gives you lemons, make lemonade.” In this imaginative take on that popular saying, a child is surprised (and disappointed) to receive a lemon tree from Grandma for her birthday. After all, she DID ask for a new gadget! But when she follows the narrator’s careful—and funny—instructions, she discovers that the tree might be exactly what she wanted after all. This clever story, complete with a recipe for lemonade, celebrates the pleasures of patience, hard work, nature, community . . . and putting down the electronic devices just for a while.
            `,
        ],
        cover_img: "../../images/books/when-grandma-gives-you-a-lemon-tree.jpg",
        sub_imgs: [
            "../../images/books/when-grandma-gives-you-a-lemon-tree-sub1.jpg",
            "../../images/books/when-grandma-gives-you-a-lemon-tree-sub2.jpeg",
            "../../images/books/when-grandma-gives-you-a-lemon-tree-sub3.jpeg",
        ],
        price: 14.35,
        breadcrumb_name: [
            "Home",
            "Special Offers",
            "When Grandma Gives You a Lemon Tree",
        ],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "ambitious-girl",
        title: "Ambitious Girl",
        author: "Meena Harris (Author), Marissa Valdez (Illustrator)",
        desc: [
            `Anyone who's ever been underestimated or overshadowed will find inspiration in this empowering new picture book from Meena Harris, New York Times-bestselling author of Kamala and Maya's Big Idea.
            `,
            `When a young girl sees a strong woman on TV labeled as "too assertive" and "too ambitious," it sends her on a journey of discovery through past, present, and future about the challenges faced by women and girls and the ways in which they can reframe, redefine, and reclaim words meant to knock them down.`,
        ],
        cover_img: "../../images/books/ambitious-girl.jpg",
        sub_imgs: [
            "../../images/books/ambitious-girl-sub1.jpeg",
            "../../images/books/ambitious-girl-sub2.jpeg",
            "../../images/books/ambitious-girl-sub3.jpeg",
        ],
        price: 12.61,
        breadcrumb_name: ["Home", "Special Offers", "Ambitious Girl"],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "a_girl_like_you",
        title: "A Girl Like You",
        author: "Frank Murphy, Carla Murphy, Kayla Harren",
        desc: [
            `Every girl is a wonder! A Girl Like You encourages girls to embrace what makes them unique, to choose kindness, and to be their own advocates. In an age when girls can be whatever they want, this book reminds them of all the ways to be beautiful, brilliant, and uniquely themselves.
            `,
        ],
        cover_img: "../../images/books/a-girl-like-you.jpg",
        sub_imgs: [
            "../../images/books/a-girl-like-you-sub1.jpg",
            "../../images/books/a-girl-like-you-sub2.jpg",
            "../../images/books/a-girl-like-you-sub3.jpg",
        ],
        price: 10.32,
        breadcrumb_name: ["Home", "Special Offers", "A Girl Like You"],
        breadcrumb_link: ["../../index.html", "../special-offers.html", "#!"],
    },

    {
        file_name: "society_of_shame",
        title: "The Society of Shame",
        author: "Jane Roper",
        desc: [
            `“If you liked Lessons in Chemistry by Bonnie Garmus, read The Society of Shame by Jane Roper.” —The Washington Post
            `,
            `In this timely and witty combination of So You've Been Publicly Shamed and Where'd You Go, Bernadette? a viral photo of a politician's wife's “feminine hygiene malfunction” catapults her to unwanted fame in a story that's both a satire of social media stardom and internet activism, and a tender mother-daughter tale.`,
            `Kathleen Held’s life is turned upside down when she arrives home to find her house on fire and her husband on the front lawn in his underwear. But the scandal that emerges is not that Bill, who's running for Senate, is having a painfully cliched affair with one of his young staffers: it's that the eyewitness photographing the scene accidentally captures a period stain on the back of Kathleen’s pants.
            `,
            `Hilarious and heartfelt, The Society of Shame is a pitch-perfect romp through politics and the perils of being "extremely online"—without losing your sanity or your true self.`,
        ],
        cover_img: "../../images/books/society_of_shame.jpg",
        sub_imgs: [
            "../../images/books/society_of_shame-sub1.webp",
            "../../images/books/society_of_shame-sub2.jpg",
            "../../images/books/society_of_shame-sub3.jpg",
        ],
        price: 26.04,
        breadcrumb_name: ["Home", "Best Sellers", "The Society of Shame"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },

    {
        file_name: "dune",
        title: "Dune",
        author: "Frank Herbert",
        desc: [
            `Set on the desert planet Arrakis, Dune is the story of
            the boy Paul Atreides, heir to a noble family tasked
            with ruling an inhospitable world where the only thing
            of value is the “spice” melange, a drug capable of
            extending life and enhancing consciousness. Coveted
            across the known universe, melange is a prize worth
            killing for....`,
            `When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream. 
            `,
            `A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.
            `,
        ],
        cover_img: "../../images/books/dune.jpg",
        sub_imgs: [
            "../../images/books/dune-sub1.png",
            "../../images/books/dune-sub2.png",
            "../../images/books/dune-sub3.png",
        ],
        price: 21.67,
        breadcrumb_name: ["Home", "Best Sellers", "Dune"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },
    {
        file_name: "egghead",
        title: "Egghead: Or, You Can't Survive on Ideas Alone",
        author: "Bo Burnham",
        desc: [
            `The bestselling strange and charming collection of hilariously absurd poetry, writing, and illustration from the director of Eighth Grade and the writer and star of Bo Burnham: Inside.`,
            `Bo Burnham was a precocious teenager living in his parents' attic when he started posting material on YouTube. 100 million people viewed those videos, turning Bo into an online sensation with a huge and dedicated following. Bo taped his first of two Comedy Central specials four days after his 18th birthday, making him the youngest to do so in the channel's history. Now Bo is a rising star in the comedy world, revered for his utterly original and intelligent voice. And, he can SIIIIIIIIING!
            `,
            `In Egghead, Bo brings his brand of brainy, emotional comedy to the page in the form of off-kilter poems, thoughts, and more. Teaming up with his longtime friend, artist, and illustrator Chance Bone, Bo takes on everything from death to farts in this weird book that will make you think, laugh and think, "why did I just laugh?"
            `,
        ],
        cover_img: "../../images/books/egghead.jpg",
        sub_imgs: [
            "../../images/books/egghead-sub1.jpg",
            "../../images/books/egghead-sub2.jpg",
            "../../images/books/egghead-sub3.jpg",
        ],
        price: 23.61,
        breadcrumb_name: ["Home", "Best Sellers", "Egghead"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },

    {
        file_name: "a_perfect_vintage",
        title: "A Perfect Vintage",
        author: "Chelsea Fagan",
        desc: [
            `Lea Mortimer has everything under control. As a highly sought-after consultant specializing in transforming dilapidated French country estates into boutique hotels, she relishes her freedom as a single, childfree woman. And her life is full, occupied as much by her impeccable historic renovations as by the aristocratic -- and often exhausting -- French families she works for.
            `,
            `But after the heated divorce of her closest friend and cousin Stephanie Bryce, Lea finds herself taking Stephanie and her college-aged daughter to the Loire Valley in France for the summer. As they tag along for Lea's latest work assignment, despite their best intentions, they threaten to complicate the tightrope act of launching the hotel on time. And when Lea unexpectedly falls for the much-younger son of her boss, she quickly learns the beauty and danger of losing control.
            `,
            `As affairs bloom in the idyllic chateau, wars of inheritance play out between the family, and betrayals threaten even the most solid relationships. Lea realizes that it's not just a broken heart she's risking, but her entire, meticulously-constructed life blowing up in her face.
            `,
        ],
        cover_img: "../../images/books/a_perfect_vintage.jpg",
        sub_imgs: [
            "../../images/books/a_perfect_vintage-sub1.jpg",
            "../../images/books/a_perfect_vintage-sub2.jpg",
            "../../images/books/a_perfect_vintage-sub3.jpg",
        ],
        price: "19.00",
        breadcrumb_name: ["Home", "Best Sellers", "A Perfect Vintage"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },

    {
        file_name: "poverty_by_america",
        title: "Poverty, By America",
        author: "Matthew Desmond",
        desc: [
            `#1 NEW YORK TIMES BESTSELLER • The Pulitzer Prize–winning author of Evicted reimagines the debate on poverty, making a “provocative and compelling” (NPR) argument about why it persists in America: because the rest of us benefit from it.
            `,
            `The United States, the richest country on earth, has more poverty than any other advanced democracy. Why? Why does this land of plenty allow one in every eight of its children to go without basic necessities, permit scores of its citizens to live and die on the streets, and authorize its corporations to pay poverty wages? 
            `,
            `Elegantly written and fiercely argued, this compassionate book gives us new ways of thinking about a morally urgent problem. It also helps us imagine solutions. Desmond builds a startlingly original and ambitious case for ending poverty. He calls on us all to become poverty abolitionists, engaged in a politics of collective belonging to usher in a new age of shared prosperity and, at last, true freedom.
            `,
        ],
        cover_img: "../../images/books/poverty_by_america.webp",
        sub_imgs: [
            "../../images/books/poverty_by_america-sub1.png",
            "../../images/books/poverty_by_america-sub2.jpg",
            "../../images/books/poverty_by_america-sub3.jpg",
        ],
        price: 26.04,
        breadcrumb_name: ["Home", "Best Sellers", "Poverty, By America"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },

    {
        file_name: "happy_place",
        title: "Happy Place",
        author: "Emily Henry",
        desc: [
            `A couple who broke up months ago pretend to still be together for their annual weeklong vacation with their best friends in this glittering and wise new novel from #1 New York Times bestselling author Emily Henry.
            `,
            `Harriet and Wyn have been the perfect couple since they met in college—they go together like salt and pepper, honey and tea, lobster and rolls. Except, now—for reasons they’re still not discussing—they don’t. They broke up five months ago. And still haven’t told their best friends.
            `,
            `Which is how they find themselves sharing a bedroom at the Maine cottage that has been their friend group’s yearly getaway for the last decade. Their annual respite from the world, where for one vibrant, blissful week they leave behind their daily lives; have copious amounts of cheese, wine, and seafood; and soak up the salty coastal air with the people who understand them most.
            `,
            `Only this year, Harriet and Wyn are lying through their teeth while trying not to notice how desperately they still want each other. Because the cottage is for sale and this is the last week they’ll all have together in this place. They can’t stand to break their friends’ hearts, and so they’ll play their parts. Harriet will be the driven surgical resident who never starts a fight, and Wyn will be the laid-back charmer who never lets the cracks show. It’s a flawless plan (if you look at it from a great distance and through a pair of sunscreen-smeared sunglasses). After years of being in love, how hard can it be to fake it for one week…in front of those who know you best?`,
        ],
        cover_img: "../../images/books/happy-place.jpeg",
        sub_imgs: [
            "../../images/books/happy_place-sub1.jpg",
            "../../images/books/happy_place-sub2.webp",
            "../../images/books/happy_place-sub3.jpg",
        ],
        price: "22.60",
        breadcrumb_name: ["Home", "Best Sellers", "Happy Place"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },

    {
        file_name: "the_maid",
        title: "The Maid",
        author: "Nita Prose",
        desc: [
            `*THE NO.1 NEW YORK TIMES & SUNDAY TIMES TOP TEN BESTSELLER
            `,
            `Molly the maid is all alone in the world. A nobody. She’s used to being invisible in her job at the Regency Grand Hotel, plumping pillows and wiping away the grime, dust and secrets of the guests passing through. She’s just a maid–why should anyone take notice?
            `,
            `But Molly is thrown into the spotlight when she discovers an infamous guest, Mr Black, very dead in his bed. This isn’t a mess that can be easily cleaned up. And as Molly becomes embroiled in the hunt for the truth, following the clues whispering in the hallways of the Regency Grand, she discovers a power she never knew was there. She’s just a maid–but what can she see that others overlook?
            `,
            `Escapist, charming and introducing a truly original heroine, The Maid is a story about how the truth isn’t always black and white–it’s found in the dirtier, grey areas in between . . .`,
        ],
        cover_img: "../../images/books/the-maid.jpeg",
        sub_imgs: [
            "../../images/books/the_maid-sub1.jpg",
            "../../images/books/the_maid-sub2.jpg",
            "../../images/books/the_maid-sub3.webp",
        ],
        price: "20.06",
        breadcrumb_name: ["Home", "Best Sellers", "The Maid"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },

    {
        file_name: "a_flicker_in_the_dark",
        title: "A Flicker in the Dark",
        author: "Stacy Willingham",
        desc: [
            `A New York Times Bestseller
            `,
            `“A smart, edge-of-your-seat story with plot twists you’ll never see coming. Stacy Willingham’s debut will keep you turning pages long past your bedtime.” —Karin Slaughter
            `,
            `When Chloe Davis was twelve, six teenage girls went missing in her small Louisiana town. By the end of the summer, her own father had confessed to the crimes and was put away for life, leaving Chloe and the rest of her family to grapple with the truth and try to move forward while dealing with the aftermath.
            `,
            `From debut author Stacy Willingham comes a masterfully done, lyrical thriller, certain to be the launch of an amazing career. A Flicker in the Dark is eerily compelling to the very last page.`,
        ],
        cover_img: "../../images/books/a-flicker-in-the-dark.jpeg",
        sub_imgs: [
            "../../images/books/a_flicker_in_the_dark-sub1.png",
            "../../images/books/a_flicker_in_the_dark-sub2.jpg",
            "../../images/books/a_flicker_in_the_dark-sub3.jpeg",
        ],
        price: 22.81,
        breadcrumb_name: ["Home", "Best Sellers", "A Flicker in the Dark"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },

    {
        file_name: "the_golden_couple",
        title: "The Golden Couple",
        author: "Greer Hendricks, Sarah Pekkanen",
        desc: [
            `If Avery Chambers can’t fix you in 10 sessions, she won’t take you on as a client. Her successes are phenomenal—she helps people overcome everything from domineering parents to assault—and almost absorbs the emptiness she sometimes feels since her husband’s death.
            `,
            `Marissa and Mathew Bishop seem like the golden couple—until Marissa cheats. She wants to repair things, both because she loves her husband and for the sake of their eight-year-old son. After a friend forwards an article about Avery, Marissa takes a chance on this maverick therapist, who lost her license due to controversial methods.
            `,
            `When the Bishops glide through Avery’s door and Marissa reveals her infidelity, all three are set on a collision course. Because the biggest secrets in the room are still hidden, and it’s no longer simply a marriage that’s in danger.
            `,
            `"My favorite kind of thriller: a guessing game filled with characters you care about and twists you don't see coming. The Golden Couple takes a deep dive into a marriage, where what you see on the surface is not necessarily the truth, and the results are mesmerizing. Add to this a therapist who doesn't play by the rules and you have an utterly compelling, spellbinding read." (Lisa Jewell, author of Then She Was Gone and Invisible Girl)`,
        ],
        cover_img: "../../images/books/the-golden-couple.jpeg",
        sub_imgs: [
            "../../images/books/the_golden_couple-sub1.jpg",
            "../../images/books/the_golden_couple-sub2.jpg",
            "../../images/books/the_golden_couple-sub3.webp",
        ],
        price: 19.77,
        breadcrumb_name: ["Home", "Best Sellers", "The Golden Couple"],
        breadcrumb_link: ["../../index.html", "../best-sellers.html", "#!"],
    },

    {
        file_name: "carmen_and_grace",
        title: "Carmen and Grace",
        author: "Melissa Coss Aquino",
        desc: [
            `"Aquino’s debut novel explores complex ideas: how things that are threatening can also be attractive and whether a debt is owed to the people and places that shaped you."— WASHINGTON POST
            `,
            `An emotionally riveting coming-of-age drama about two cousins lured into the underground drug trade at a young age and the inextricable ties that bind them, as one woman seeks power and the other seeks a way out—the debut of a vibrant and stunningly original new voice in fiction.
            `,
            `Carmen and Grace have been inseparable since they were little girls—more like sisters than cousins, survivors of a childhood marked by neglect and addiction and a system that never valued them. For too long, all they had was each other. That is, until Doña Durka swept into their lives and changed everything, taking Grace into her home, providing stability and support, and playing an outsize role in Carmen’s upbringing too.
            `,
            `"Melissa Coss Aquino brilliantly delivers a loving novel with characters you are inspired to ride or die with. . . . If you love reading novels about creative, ambitious, and relentless women who are committed to community and making a way out of no way, read this book!" — ANGIE CRUZ, author of How Not to Drown in a Glass of Water and Dominicana`,
        ],
        cover_img: "../../images/books/Carmen_and_Grace.jpg",
        sub_imgs: [
            "../../images/books/carmen_and_grace-sub1.jpg",
            "../../images/books/carmen_and_grace-sub2.jpg",
            "../../images/books/carmen_and_grace-sub3.jpg",
        ],
        price: 29.76,
        breadcrumb_name: ["Home", "New Releases", "The Carmen and Grace"],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "house_of_cotton",
        title: "House of Cotton",
        author: "Monica Brashears",
        desc: [
            `“Every page, every scene, every sentence of Monica Brashears’s debut novel House of Cotton dazzles and surprises. An intense, enthralling, and deeply satisfying read!” ―Deesha Philyaw, author of The Secret Lives of Church Ladies
            `,
            `Magnolia Brown is nineteen years old, broke, and effectively an orphan. She feels stuck and haunted: by her overdrawn bank account, her predatory landlord, and the ghost of her late grandmother Mama Brown.
            `,
            `One night, while working at her dead-end gas station job, a mysterious, slick stranger named Cotton walks in and offers to turn Magnolia’s luck around with a lucrative “modeling” job at his family’s funeral home. She accepts. But despite things looking up, Magnolia’s problems fatten along with her wallet. When Cotton’s requests become increasingly weird, Magnolia discovers there’s a lot more at stake than just her rent.
            `,
            `Sharp as a belted knife, this sly social commentary cuts straight to the bone. House of Cotton will keep you mesmerized until the very last page.`,
        ],
        cover_img: "../../images/books/house_of_cotton.jpg",
        sub_imgs: [
            "../../images/books/house_of_cotton-sub1.jpg",
            "../../images/books/house_of_cotton-sub2.png",
            "../../images/books/house_of_cotton-sub3.jpg",
        ],
        price: 26.03,
        breadcrumb_name: ["Home", "New Releases", "House of Cotton"],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "a_living_remedy",
        title: "A Living Remedy: A Memoir",
        author: "Nicole Chung",
        desc: [
            `From the bestselling author of ALL YOU CAN EVER KNOW comes a searing memoir of family, class and grief—a daughter’s search to understand the lives her adoptive parents led, the life she forged as an adult, and the lives she’s lost.
            `,
            ` Nicole Chung couldn’t hightail it out of her overwhelmingly white Oregon hometown fast enough. As a scholarship student at a private university on the East Coast, no longer the only Korean she knew, she found community and a path to the life she'd long wanted. But the middle class world she begins to raise a family in – where there are big homes, college funds, nice vacations – looks very different from the middle class world she thought she grew up in, where paychecks have to stretch to the end of the week, health insurance is often lacking, and there are no safety nets.
            `,
            `When her father dies at only sixty-seven, killed by diabetes and kidney disease, Nicole feels deep grief as well as rage, knowing that years of precarity and lack of access to healthcare contributed to his early death. And then the unthinkable happens – less than a year later, her beloved mother is diagnosed with cancer, and the physical distance between them becomes insurmountable as COVID-19 descends upon the world.
            `,
            ` Exploring the enduring strength of family bonds in the face of hardship and tragedy, A Living Remedy examines what it takes to reconcile the distance between one life, one home, and another – and sheds needed light on some of the most persistent and grievous inequalities in American society. `,
        ],
        cover_img: "../../images/books/a_living_remedy.jpg",
        sub_imgs: [
            "../../images/books/a_living_remedy-sub1.webp",
            "../../images/books/a_living_remedy-sub2.webp",
            "../../images/books/a_living_remedy-sub3.jpg",
        ],
        price: 26.89,
        breadcrumb_name: ["Home", "New Releases", "A Living Remedy"],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "adelaide",
        title: "Adelaide",
        author: "Genevieve Wheeler",
        desc: [
            `“A beautifully-written, deeply-felt exploration of what it means to love and be loved.”–– Jill Santopolo, New York Times bestselling author of The Light We Lost
            `,
            ` In love . . .
            `,
            `For twenty-six-year-old Adelaide Williams, an American living in dreamy London, meeting Rory Hughes was like a lightning bolt out of the blue: this charming Englishman was The One she wasn’t even looking for.
            `,
            `Is it enough?
            `,
            `Does he respond to texts? Honor his commitments? Make advance plans? Sometimes, rarely, and no, not at all. But when he shines his light on her, the world makes sense, and Adelaide is convinced that, in his heart, he’s fallen just as deeply as she has. Then, when Rory is rocked by an unexpected tragedy, Adelaide does everything in her power to hold him together―even if it means losing herself in the process.`,
            `When love asks too much of us, how do we find the strength to put ourselves first?
            `,
            `With unflinching honesty and heart, this relatable debut from a fresh new voice explores grief and mental health while capturing the timeless nature of what it’s like to be young and in love―with your friends, with your city, and with a person who cannot, will not, love you back.`,
        ],
        cover_img: "../../images/books/adelaide.jpeg",
        sub_imgs: [
            "../../images/books/adelaide-sub1.jpg",
            "../../images/books/adelaide-sub2.jpg",
            "../../images/books/adelaide-sub3.jpg",
        ],
        price: 22.04,
        breadcrumb_name: ["Home", "New Releases", "Adelaide"],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "greek_lessons",
        title: "Greek Lessons",
        author: "Han Kang",
        desc: [
            `ONE OF THE MOST ANTICIPATED BOOKS OF 2023: The Guardian, The New Statesman, The Irish Times, i-D Magazine, Lit Hub
            `,
            `"Now and then, language would thrust its way into her sleep like a skewer through meat, startling her awake several times a night."
            `,
            `In a classroom in Seoul, a young woman watches her Greek language teacher at the blackboard. She tries to speak but has lost her voice. Her teacher finds himself drawn to the silent woman, for day by day he is losing his sight. 
            `,
            `Soon the two discover a deeper pain binds them together. For her, in the space of just a few months, she has lost both her mother and the custody battle for her nine-year-old son. For him, it's the pain of growing up between Korea and Germany, being torn between two cultures and languages, and the fear of losing his independence.
            `,
            `Greek Lessons tells the story of two ordinary people brought together at a moment of private anguish—the fading light of a man losing his vision meeting the silence of a woman who has lost her language. Yet these are the very things that draw them to each other. Slowly the two discover a profound sense of unity—their voices intersecting with startling beauty, as they move from darkness to light, from silence to breath and expression.
            `,
            `Greek Lessons is the story of the unlikely bond between this pair and a tender love letter to human intimacy and connection—a novel to awaken the senses, one that vividly conjures the essence of what it means to be alive.
            `,
        ],
        cover_img: "../../images/books/greek-lessons.jpeg",
        sub_imgs: [
            "../../images/books/greek_lessons-sub1.jpg",
            "../../images/books/greek_lessons-sub2.jpg",
            "../../images/books/greek_lessons-sub3.webp",
        ],
        price: 22.47,
        breadcrumb_name: ["Home", "New Releases", "Greek Lessons"],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "the_last_animal",
        title: "The Last Animal",
        author: "Ramona Ausubel",
        desc: [
            `“If you could cross Anne Tyler’s novels with strands of DNA from Michael Crichton’s thrillers, you might produce this new book … Springs alive to explore questions that stump scientists and families, problems of the head and the heart.”—Ron Charles, The Washington Post
            `,
            ` A playful, witty, and resonant novel in which a single mother and her two teen daughters engage in a wild scientific experiment and discover themselves in the process, from the award-winning writer of Sons and Daughters of Ease and Plenty
            `,
            `Teenage sisters Eve and Vera never imagined their summer vacation would be spent in the Arctic, tagging along on their mother’s scientific expedition. But there’s a lot about their lives lately that hasn’t been going as planned, and truth be told, their single mother might not be so happy either.
            `,
            `Now in Siberia with a bunch of serious biologists, Eve and Vera are just bored enough to cause trouble. Fooling around in the permafrost, they accidentally discover a perfectly preserved, four-thousand-year-old baby mammoth, and things finally start to get interesting. The discovery sets off a surprising chain of events, leading mother and daughters to go rogue, pinging from the slopes of Siberia to the shores of Iceland to an exotic animal farm in Italy, and resulting in the birth of a creature that could change the world—or at least this family.
            `,
            `The Last Animal takes readers on a wild, entertaining, and refreshingly different kind of journey, one that explores the possibilities and perils of the human imagination on a changing planet, what it’s like to be a woman in a field dominated by men, and how a wondrous discovery can best be enjoyed with family. Even teenagers.
            `,
        ],
        cover_img: "../../images/books/the-last-animal.jpeg",
        sub_imgs: [
            "../../images/books/the_last_animal-sub1.jpg",
            "../../images/books/the_last_animal-sub2.jpg",
            "../../images/books/the_last_animal-sub3.jpeg",
        ],
        price: 21.57,
        breadcrumb_name: ["Home", "New Releases", "The Last Animal"],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "dinosaurs",
        title: "Dinosaurs",
        author: "Lydia Millet",
        desc: [
            `A stunning new novel from the author of A Children’s Bible, a National Book Award finalist and one of the New York Times' 10 Best Books of 2020.
            `,
            `Over twelve novels and two collections Lydia Millet has emerged as a major American novelist. Hailed as "a writer without limits" (Karen Russell) and "a stone-cold genius" (Jenny Offill), Millet makes fiction that vividly evokes the ties between people and other animals and the crisis of extinction.
            `,
            `Her exquisite new novel is the story of a man named Gil who walks from New York to Arizona to recover from a failed love. After he arrives, new neighbors move into the glass-walled house next door and his life begins to mesh with theirs. In this warmly textured, drily funny, and philosophical account of Gil’s unexpected devotion to the family, Millet explores the uncanny territory where the self ends and community begins―what one person can do in a world beset by emergencies.
            `,
            `Dinosaurs is both sharp-edged and tender, an emotionally moving, intellectually resonant novel that asks: In the shadow of existential threat, where does hope live?
            `,
        ],
        cover_img: "../../images/books/dinosaurs.jpeg",
        sub_imgs: [
            "../../images/books/dinosaurs-sub1.webp",
            "../../images/books/dinosaurs-sub2.jpg",
            "../../images/books/dinosaurs-sub3.webp",
        ],
        price: 26.04,
        breadcrumb_name: ["Home", "New Releases", "Dinosaurs"],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "spare",
        title: "Spare",
        author: "Prince Harry The Duke of Sussex",
        desc: [
            `It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother’s coffin as the world watched in sorrow—and horror. As Princess Diana was laid to rest, billions wondered what Prince William and Prince Harry must be thinking and feeling—and how their lives would play out from that point on.
            `,
            `For Harry, this is that story at last.
            `,
            `Before losing his mother, twelve-year-old Prince Harry was known as the carefree one, the happy-go-lucky Spare to the more serious Heir. Grief changed everything. He struggled at school, struggled with anger, with loneliness—and, because he blamed the press for his mother’s death, he struggled to accept life in the spotlight.
            `,
            `At twenty-one, he joined the British Army. The discipline gave him structure, and two combat tours made him a hero at home. But he soon felt more lost than ever, suffering from post-traumatic stress and prone to crippling panic attacks. Above all, he couldn’t find true love. 
            `,
            `Then he met Meghan. The world was swept away by the couple’s cinematic romance and rejoiced in their fairy-tale wedding. But from the beginning, Harry and Meghan were preyed upon by the press, subjected to waves of abuse, racism, and lies. Watching his wife suffer, their safety and mental health at risk, Harry saw no other way to prevent the tragedy of history repeating itself but to flee his mother country. Over the centuries, leaving the Royal Family was an act few had dared. The last to try, in fact, had been his mother. . . .`,
            `For the first time, Prince Harry tells his own story, chronicling his journey with raw, unflinching honesty. A landmark publication, Spare is full of insight, revelation, self-examination, and hard-won wisdom about the eternal power of love over grief.
            `,
        ],
        cover_img: "../../images/books/spare.jpeg",
        sub_imgs: [
            "../../images/books/spare-sub1.jpg",
            "../../images/books/spare-sub2.jpg",
            "../../images/books/spare-sub3.jpg",
        ],
        price: 31.04,
        breadcrumb_name: ["Home", "New Releases", "Spare"],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "i_have_some_questions_for_you",
        title: "I Have Some Questions for You",
        author: "Rebecca Makkai",
        desc: [
            `The riveting new novel — "part true-crime page-turner, part campus coming-of-age" (San Francisco Chronicle) — from the author of the Pulitzer Prize and National Book Award finalist The Great Believers
            `,
            `A successful film professor and podcaster, Bodie Kane is content to forget her past—the family tragedy that marred her adolescence, her four largely miserable years at a New Hampshire boarding school, and the murder of her former roommate, Thalia Keith, in the spring of their senior year. Though the circumstances surrounding Thalia’s death and the conviction of the school’s athletic trainer, Omar Evans, are hotly debated online, Bodie prefers—needs—to let sleeping dogs lie.
            `,
            `But when the Granby School invites her back to teach a course, Bodie is inexorably drawn to the case and its increasingly apparent ﬂaws. In their rush to convict Omar, did the school and the police overlook other suspects? Is the real killer still out there? As she falls down the very rabbit hole she was so determined to avoid, Bodie begins to wonder if she wasn’t as much of an outsider at Granby as she’d thought—if, perhaps, back in 1995, she knew something that might have held the key to solving the case.
            `,
            `In I Have Some Questions for You, award-winning author Rebecca Makkai has crafted her most irresistible novel yet: a stirring investigation into collective memory and a deeply felt examination of one woman’s reckoning with her past, with a transﬁxing mystery at its heart. Timely, hypnotic, and populated with a cast of unforgettable characters, I Have Some Questions for You is at once a compulsive page-turner and a literary triumph.
            `,
        ],
        cover_img: "../../images/books/i-have-some-questions-for-you.jpeg",
        sub_imgs: [
            "../../images/books/i_have_some_questions_for_you-sub1.webp",
            "../../images/books/i_have_some_questions_for_you-sub2.jpg",
            "../../images/books/i_have_some_questions_for_you-sub3.jpg",
        ],
        price: 22.34,
        breadcrumb_name: [
            "Home",
            "New Releases",
            "I Have Some Questions for You",
        ],
        breadcrumb_link: ["../../index.html", "../new-releases.html", "#!"],
    },

    {
        file_name: "the_maze",
        title: "The Maze",
        author: "John Corey",
        desc: [
            `#1 New York Times bestselling author Nelson DeMille returns with a “genuinely thrilling” (The New York Times) suspense novel featuring his most popular series character, former NYPD homicide detective John Corey, called out of retirement to investigate a string of grisly murders much too close to home.
            `,
            `Nelson DeMille introduced readers to NYPD Homicide Detective John Corey in Plum Island, who we first meet sitting on the back porch of his uncle’s waterfront estate on Long Island, recovering from wounds incurred in the line of duty.
            `,
            `Six novels later, The Maze opens with Corey on the same porch, having survived new law enforcement roles and romantic relationships—wiser and more sarcastic than ever. Corey is restless and looking for action, so when his former lover Detective Beth Penrose appears with a job offer, Corey has to once again make some decisions about his career—and about reuniting with Beth.
            `,
            `Inspired by and based on the actual and still-unsolved Gilgo Beach murders, The Maze takes us on a dangerous hunt for an apparent serial killer who has murdered nine—and maybe more—sex workers and hidden their bodies in the thick undergrowth on a lonely stretch of beach.
            `,
            `As Corey digs deeper into this case, he comes to suspect that the failure of the local police to solve this sensational mystery may not be a result of their incompetence—it may be something else. Something more sinister.
            `,
            `The Maze features John Corey’s politically incorrect humor, matched by his brilliant and unorthodox investigative skills, along with the shocking plot twists that are the trademark of the bestselling author Nelson DeMille, “the master of smart, entertaining suspense” (Bookreporter).
            `,
        ],
        cover_img: "../../images/books/the-maze.jpeg",
        sub_imgs: [
            "../../images/books/the_maze-sub1.jpg",
            "../../images/books/the_maze-sub2.jpg",
            "../../images/books/the_maze-sub3.jpg",
        ],
        price: 22.34,
        breadcrumb_name: ["Home", "Genres", "The Maze"],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },

    {
        file_name: "how_to_be_eaten",
        title: "How to Be Eaten",
        author: "Maria Adelmann",
        desc: [
            `In present-day New York City, five women meet in a basement support group to process their traumas. Bernice grapples with the fallout of dating a psychopathic, blue-bearded billionaire. Ruby, once devoured by a wolf, now wears him as a coat. Gretel questions her memory of being held captive in a house made of candy. Ashlee, the winner of a Bachelor-esque dating show, wonders if she really got her promised fairy tale ending. And Raina's love story will shock them all.
            `,
            `Though the women start out wary of one another, judging each other’s stories, gradually they begin to realize that they may have more in common than they supposed . . . What really brought them here? What secrets will they reveal? And is it too late for them to rescue each other?
            `,
            `Dark, edgy, and wickedly funny, this debut for readers of Carmen Maria Machado, Kristen Arnett, and Kelly Link takes our coziest, most beloved childhood stories, exposes them as anti-feminist nightmares, and transforms them into a new kind of myth for grown-up women.
            `,
            `Named a Best Book of May by TIME Magazine & Glamour One of NPR’s Best Books of the Year
            `,
        ],
        cover_img: "../../images/books/how-to-be-eaten.jpeg",
        sub_imgs: [
            "../../images/books/how_to_be_eaten-sub1.jpg",
            "../../images/books/how_to_be_eaten-sub2.jpg",
            "../../images/books/how_to_be_eaten-sub3.jpg",
        ],
        price: 19.06,
        breadcrumb_name: ["Home", "Genres", "The Maze"],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },

    {
        file_name: "if_i_survive_you",
        title: "If I Survive You",
        author: "Jonathan Escoffery",
        desc: [
            `In the 1970s, Topper and Sanya flee to Miami as political violence consumes their native Kingston. But America, as the couple and their two children learn, is far from the promised land. Excluded from society as Black immigrants, the family pushes on through Hurricane Andrew and later the 2008 recession, living in a house so cursed that the pet fish launches itself out of its own tank rather than stay. But even as things fall apart, the family remains motivated, often to its own detriment, by what the younger son, Trelawny, calls “the exquisite, racking compulsion to survive.”
            `,
            `Masterfully constructed with heart and humor, the linked stories in Jonathan Escoffery’s If I Survive You center on Trelawny as he struggles to carve out a place for himself amid financial disaster, racism, and flat-out bad luck. After a fight with Topper, Trelawny claws his way out of homelessness through a series of odd, often hilarious jobs. Meanwhile, his brother, Delano, attempts a disastrous cash grab to get his kids back, and his cousin Cukie looks for a father who doesn’t want to be found. As each character searches for a foothold, they never forget the profound danger of climbing without a safety net.
            `,
            `Pulsing with vibrant lyricism and inimitable style, sly commentary and contagious laughter, Escoffery’s debut unravels what it means to be in between homes and cultures in a world at the mercy of capitalism and whiteness. With If I Survive You, Escoffery announces himself as a prodigious storyteller in a class of his own, a chronicler of American life at its most gruesome and hopeful.
            `,
        ],
        cover_img: "../../images/books/if-i-survive-you.jpeg",
        sub_imgs: [
            "../../images/books/if_i_survive_you-sub1.webp",
            "../../images/books/if_i_survive_you-sub2.webp",
            "../../images/books/if_i_survive_you-sub3.webp",
        ],
        price: 22.47,
        breadcrumb_name: ["Home", "Genres", "If I Survive You"],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },

    {
        file_name: "still_life",
        title: "Still Life",
        author: "Doan Ly",
        desc: [
            `Still Life is a photographic celebration of the work of New York City–based florist, artist, and photographer Doan Ly and her studio, a.p. bio.”
            `,
            `Ly's stunning work elevates floral design to an art form. While photographs of her floral vignettes are reminiscent of old masters' still life paintings, her playful and innovative use of color and lighting are decidedly contemporary.
            `,
            `This spectacular collection of Ly's own exquisite photographs of her still life creations is unlike any other floral design book. Still Life captures Ly's unique and inspiring aesthetic, which has drawn a dedicated following on social media. An engaging interview with Ly brings insight into her creative process and what compels her to continually explore the ethereal and poetic possibilities of her work. As Ly says, "I want to be caught off guard. I want to see anew. I want to experience a quiet moment that is larger than life. I want to learn something, but mostly, I want to share beauty and bring joy."
            `,
        ],
        cover_img: "../../images/books/still-life.jpeg",
        sub_imgs: [
            "../../images/books/still_life-sub1.jpg",
            "../../images/books/still_life-sub2.jpg",
            "../../images/books/still_life-sub3.jpg",
        ],
        price: 29.44,
        breadcrumb_name: ["Home", "Genres", "Still Life"],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },

    {
        file_name: "aka_lucy",
        title: "A.K.A Lucy",
        author: "Sarah Royal, Amy Poehler",
        desc: [
            `This stunning package offers a rich, intimate, and highly entertaining look at the remarkable life and work of the television pioneer, the First Lady of Comedy, the legend, Lucille Ball—AKA Lucy.
            `,
            `Full of fresh perspective, gorgeously designed, and richly informative, this is a book on Lucille Ball like none other. With profiles spotlighting the many different facets of the woman, AKA Lucy details how Ball changed the face of comedy and the entertainment industry. It sheds new light on the star's history, from her childhood through hard-scrabble days trying to make it in show business, falling head over heels in love and embarking on one of the great romances of the twentieth century, to becoming the biggest star in the world, a pioneer in television, and an icon for the ages. Filled with photos and highlighted by bright illustration and design, this is a volume almost as vivid and entertaining as the woman herself.
            `,
            `AKA Lucy is officially authorized by the estate of Lucille Ball and Desi Arnaz.
            `,
        ],
        cover_img: "../../images/books/aka-lucy.jpeg",
        sub_imgs: [
            "../../images/books/aka_lucy-sub1.png",
            "../../images/books/aka_lucy-sub2.jpg",
            "../../images/books/aka_lucy-sub3.jpg",
        ],
        price: "28.00",
        breadcrumb_name: ["Home", "Genres", "A.K.A Lucy"],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },

    {
        file_name: "gender_queer",
        title: "Gender Queer",
        author: "Maia Kobabe",
        desc: [
            `In 2014, Maia Kobabe, who uses e/em/eir pronouns, thought that a comic of reading statistics would be the last autobiographical comic e would ever write. At the time, it was the only thing e felt comfortable with strangers knowing about em. Now, Gender Queer is here. Maia’s intensely cathartic autobiography charts eir journey of self-identity, which includes the mortification and confusion of adolescent crushes, grappling with how to come out to family and society, bonding with friends over erotic gay fanfiction, and facing the trauma and fundamental violation of pap smears.
            `,
            `Started as a way to explain to eir family what it means to be nonbinary and asexual, Gender Queer is more than a personal story: it is a useful and touching guide on gender identity—what it means and how to think about it—for advocates, friends, and humans everywhere.
            `,
            `"It’s also a great resource for those who identify as nonbinary or asexual as well as for those who know someone who identifies that way and wish to better understand." — SLJ (starred review)
            `,
        ],
        cover_img: "../../images/books/gender-queer.jpeg",
        sub_imgs: [
            "../../images/books/gender_queer-sub1.jpg",
            "../../images/books/gender_queer-sub2.jpg",
            "../../images/books/gender_queer-sub3.jpg",
        ],
        price: 22.05,
        breadcrumb_name: ["Home", "Genres", "Gender Queer"],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },

    {
        file_name: "mammals",
        title: "The Rise and Reign of the Mammals",
        author: "Steve Brusatte",
        desc: [
            `We humans are the inheritors of a dynasty that has reigned over the planet for nearly 66 million years, through fiery cataclysm and ice ages: the mammals. Our lineage includes saber-toothed tigers, woolly mammoths, armadillos the size of a car, cave bears three times the weight of a grizzly, clever scurriers that outlasted Tyrannosaurus rex, and even other types of humans, like Neanderthals. Indeed humankind and many of the beloved fellow mammals we share the planet with today—lions, whales, dogs—represent only the few survivors of a sprawling and astonishing family tree that has been pruned by time and mass extinctions. How did we get here?
            `,
            `In his acclaimed bestseller The Rise and Fall of the Dinosaurs—hailed as “the ultimate dinosaur biography” by Scientific American—American paleontologist Steve Brusatte enchanted readers with his definitive history of the dinosaurs. Now, picking up the narrative in the ashes of the extinction event that doomed T-rex and its kind, Brusatte explores the remarkable story of the family of animals that inherited the Earth—mammals— and brilliantly reveals that their story is every bit as fascinating and complex as that of the dinosaurs.
            `,
            `Beginning with the earliest days of our lineage some 325 million years ago, Brusatte charts how mammals survived the asteroid that claimed the dinosaurs and made the world their own, becoming the astonishingly diverse range of animals that dominate today’s Earth. Brusatte also brings alive the lost worlds mammals inhabited through time, from ice ages to volcanic catastrophes. Entwined in this story is the detective work he and other scientists have done to piece together our understanding using fossil clues and cutting-edge technology.
            `,
            `A sterling example of scientific storytelling by one of our finest young researchers, The Rise and Reign of the Mammals illustrates how this incredible history laid the foundation for today’s world, for us, and our future.`,
        ],
        cover_img: "../../images/books/mammals.jpeg",
        sub_imgs: [
            "../../images/books/mammals-sub1.jpg",
            "../../images/books/mammals-sub2.webp",
            "../../images/books/mammals-sub3.jpg",
        ],
        price: 19.99,
        breadcrumb_name: [
            "Home",
            "Genres",
            "The Rise and Reign of the Mammals",
        ],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },

    {
        file_name: "otherlands",
        title: "Otherlands",
        author: "Thomas Halliday",
        desc: [
            `The past is past, but it does leave clues, and Thomas Halliday has used cutting-edge science to decipher them more completely than ever before. In Otherlands, Halliday makes sixteen fossil sites burst to life on the page.
            `,
            `This book is an exploration of the Earth as it used to exist, the changes that have occurred during its history, and the ways that life has found to adapt―or not. It takes us from the savannahs of Pliocene Kenya to watch a python chase a group of australopithecines into an acacia tree; to a cliff overlooking the salt pans of the empty basin of what will be the Mediterranean Sea just as water from the Miocene Atlantic Ocean spills in; into the tropical forests of Eocene Antarctica; and under the shallow pools of Ediacaran Australia, where we glimpse the first microbial life. 
            `,
            `Otherlands also offers us a vast perspective on the current state of the planet. The thought that something as vast as the Great Barrier Reef, for example, with all its vibrant diversity, might one day soon be gone sounds improbable. But the fossil record shows us that this sort of wholesale change is not only possible but has repeatedly happened throughout Earth history.
            `,
            `Even as he operates on this broad canvas, Halliday brings us up close to the intricate relationships that defined these lost worlds. In novelistic prose that belies the breadth of his research, he illustrates how ecosystems are formed; how species die out and are replaced; and how species migrate, adapt, and collaborate. It is a breathtaking achievement: a surprisingly emotional narrative about the persistence of life, the fragility of seemingly permanent ecosystems, and the scope of deep time, all of which have something to tell us about our current crisis.`,
        ],
        cover_img: "../../images/books/otherlands.jpeg",
        sub_imgs: [
            "../../images/books/otherlands-sub1.jpeg",
            "../../images/books/otherlands-sub2.jpg",
            "../../images/books/otherlands-sub3.jpg",
        ],
        price: 17.99,
        breadcrumb_name: ["Home", "Genres", "Otherlands"],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },

    {
        file_name: "the_one",
        title: "The One",
        author: "Heinrich Päs",
        desc: [
            `A particle physicist makes the scientific case for monism, the ancient idea about the universe that says, all is One 
            `,
            `In The One,  particle physicist Heinrich Päs presents a bold idea: fundamentally, everything in the universe is an aspect of one unified whole. The idea, called monism, has a rich three-thousand-year history: Plato believed that “all is one” before monism was rejected as irrational and suppressed as a heresy by the medieval Church. Nevertheless, monism persisted, inspiring Enlightenment science and Romantic poetry. Päs aims to show how monism could inspire physics today, how it could slice through the intellectual stagnation that has bogged down progress in modern physics and help the field achieve the grand theory of everything it has been chasing for decades. 
            `,
            `Blending physics, philosophy, and the history of ideas, The One is an epic, mind-expanding journey through millennia of human thought and into the nature of reality itself. 
            `,
        ],
        cover_img: "../../images/books/the-one.jpeg",
        sub_imgs: [
            "../../images/books/the_one-sub1.jpg",
            "../../images/books/the_one-sub2.jpg",
            "../../images/books/the_one-sub3.jpg",
        ],
        price: 21.67,
        breadcrumb_name: ["Home", "Genres", "The One"],
        breadcrumb_link: ["../../index.html", "../genres.html", "#!"],
    },
];

module.exports = data;
