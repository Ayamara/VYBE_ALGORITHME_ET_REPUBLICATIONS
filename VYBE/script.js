
/* ==========================================================
   VYBE — SCRIPT RECONSTRUIT ET UNIFIÉ
   84 vidéos • profils indépendants • comptes regroupés
   Algorithme progressif • likes • double-tap • commentaires
   Réponses • abonnements • recherche • badges • avatars
   Favoris • historique • notifications • navigation

   Les vidéos sont directement dans le dossier videos/.
   Les compteurs initiaux et les badges sont des données
   de démonstration.
   ========================================================== */

(() => {
    "use strict";

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    const STORAGE_KEY = "vybe_profiles_84_v1";
    const LEGACY_STORAGE_KEYS = [];

    const VIDEO_FOLDER = "videos/";

    /* ======================================================
       1. CATALOGUE DES 84 VIDÉOS
       ====================================================== */

    const definitions = [
        {"file": "v0f044gc0000cs22lenog65p7d6ovdag.mp4", "level": 0, "creator": "atelier_urbain", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v1c044g50000dag6cj7og65nc13n1ebg.mp4", "level": 0, "creator": "lumiere92", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v292ffg50001daueibfog65l2t2a82m0.mp4", "level": 0, "creator": "parolelibre", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v14044g50000datp5ivog65ml6gpqgv0.mp4", "level": 0, "creator": "mondeactuel", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v14044g50000dbfkd3nog65i20ocpkvg.mp4", "level": 0, "creator": "pixelzone", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v14044g50000dbkcdunog65pknt9o29g.mp4", "level": 0, "creator": "studio_rose", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d5h5oc7og65nqblusksg.mp4", "level": 0, "creator": "questiondujour", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d1nqf7nog65pae7fgcbg.mp4", "level": 0, "creator": "cafe_social", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d248spvog65jpdi0bb40.mp4", "level": 0, "creator": "les_idees", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000da66hi7og65ndul75nng.mp4", "level": 0, "creator": "actu_pop", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dakmo1vog65la3opi250.mp4", "level": 0, "creator": "reflexion", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dakq20nog65p492t68ig.mp4", "level": 0, "creator": "nouvelle_vague", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dalhgpfog65kbfugonb0.mp4", "level": 0, "creator": "point_de_vue", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dat4i5fog65r7vc74pqg.mp4", "level": 0, "creator": "quotidien", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000daunbv7og65o5gav3m0g.mp4", "level": 0, "creator": "parlons_en", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db4m197og65t55mambl0.mp4", "level": 0, "creator": "vision", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db7n4kfog65kgsp2k8pg.mp4", "level": 0, "creator": "collectif", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbgv0cvog65ileauv2m0.mp4", "level": 0, "creator": "expression", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbicbqvog65g3gvulq30.mp4", "level": 0, "creator": "cercle", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbj1nffog65leejl5peg.mp4", "level": 0, "creator": "sans_filtre", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbj73s7og65hpkvo6dd0.mp4", "level": 0, "creator": "tempo", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbkfainog65vsv81bkt0.mp4", "level": 0, "creator": "le_debat", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbl60t7og65hpkr8vrm0.mp4", "level": 0, "creator": "focus", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dblnj77og65sg94seqog.mp4", "level": 0, "creator": "connexion", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbf8iv7og65l0nhtjgag.mp4", "level": 1, "creator": "atelier_urbain", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v1c044g50000db04fvnog65i847e7c20.mp4", "level": 1, "creator": "lumiere92", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000db60brnog65lbou6i2fg.mp4", "level": 1, "creator": "parolelibre", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000daf4fenog65uortro5tg.mp4", "level": 1, "creator": "mondeactuel", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000danelofog65r2rglq2o0.mp4", "level": 1, "creator": "pixelzone", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dao3aovog65iicvluuo0.mp4", "level": 1, "creator": "studio_rose", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dava7m7og65mg0fsif80.mp4", "level": 1, "creator": "questiondujour", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000davmqmfog65vje6h6npg.mp4", "level": 1, "creator": "cafe_social", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db0lsjfog65v06imqvb0.mp4", "level": 1, "creator": "les_idees", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db2bijnog65u6q4ojo80.mp4", "level": 1, "creator": "actu_pop", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db7sh17og65i9cmntk0g.mp4", "level": 1, "creator": "reflexion", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db179qfog65v06jmfst0.mp4", "level": 1, "creator": "nouvelle_vague", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db718ffog65io0uetrk0.mp4", "level": 1, "creator": "point_de_vue", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db9671nog65i9che40qg.mp4", "level": 1, "creator": "quotidien", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbbdiqfog65vcn7drqe0.mp4", "level": 1, "creator": "parlons_en", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbckasvog65m2act6900.mp4", "level": 1, "creator": "vision", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbihkv7og65kluop0qg0.mp4", "level": 1, "creator": "collectif", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbjkppvog65ms6a6006g.mp4", "level": 1, "creator": "expression", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000dbkebo7og65h8ds0ge2g.mp4", "level": 1, "creator": "cercle", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000cu610ovog65o2db5dd30.mp4", "level": 2, "creator": "sans_filtre", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d1rd2pnog65uogttu330.mp4", "level": 2, "creator": "tempo", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d5me567og65nal7uk4kg.mp4", "level": 2, "creator": "le_debat", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d5qfnr7og65kb7p8jeo0.mp4", "level": 2, "creator": "focus", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d5sk0ofog65raj5rhue0.mp4", "level": 2, "creator": "connexion", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d6qsn57og65lg8co9dg0.mp4", "level": 2, "creator": "atelier_urbain", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d7qd07nog65ur7skl6bg.mp4", "level": 2, "creator": "lumiere92", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d8vnsnvog65r2vhf9srg.mp4", "level": 2, "creator": "parolelibre", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d48e9ofog65n4j9opug0.mp4", "level": 2, "creator": "mondeactuel", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000da7kqpvog65hmvk4pqv0.mp4", "level": 2, "creator": "pixelzone", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000db3vplfog65ujf4g7tug.mp4", "level": 2, "creator": "studio_rose", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v0f044gc0000crjgvpfog65nistlfva0.mp4", "level": 3, "creator": "questiondujour", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v12044gd0000cnod15vog65qshk2jes0.mp4", "level": 3, "creator": "cafe_social", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v0f044gc0000cicvcubc77u5c6tsqjgg.mp4", "level": 3, "creator": "les_idees", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v09044g40000ccaque3c77u642njkiig.mp4", "level": 3, "creator": "actu_pop", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v09044g40000cqrfrn7og65kpnrq3d8g.mp4", "level": 3, "creator": "reflexion", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000cv93spvog65m07mdn1og.mp4", "level": 3, "creator": "nouvelle_vague", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d2rkbcvog65ghl0veusg.mp4", "level": 3, "creator": "point_de_vue", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d3g0uh7og65v1d6qpv60.mp4", "level": 3, "creator": "quotidien", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d5nrb0fog65rihuou7hg.mp4", "level": 3, "creator": "parlons_en", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d6bnjl7og65ocu6c14dg.mp4", "level": 3, "creator": "vision", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d6gc2nfog65p82jncorg.mp4", "level": 3, "creator": "collectif", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d6nu69nog65l35ki9jrg.mp4", "level": 3, "creator": "expression", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d63qls7og65vlp9lpkr0.mp4", "level": 3, "creator": "cercle", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d7175fvog65gtd10gbj0.mp4", "level": 3, "creator": "sans_filtre", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000d7hpddfog65sc201hjg0.mp4", "level": 3, "creator": "tempo", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "26fec95c3194498eb69fed6013276d9f.mp4", "level": 4, "creator": "le_debat", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "4cf87964a7f84932b554e50468f0b252.mp4", "level": 4, "creator": "focus", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v0f044gc0000cn5pe3fog65t185nsjng.mp4", "level": 4, "creator": "connexion", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24025gl0000d26inivog65o2h41hkeg.mp4", "level": 4, "creator": "atelier_urbain", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d5ij7gvog65vr06491fg.mp4", "level": 4, "creator": "lumiere92", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000d6n1adfog65hmda8s7m0.mp4", "level": 4, "creator": "parolelibre", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000d9o80dvog65ohc2m8o9g.mp4", "level": 4, "creator": "mondeactuel", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v0f044gc0000csd01vfog65mkqt33plg.mp4", "level": 4, "creator": "pixelzone", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v09044g40000cg4c273c77ucvulcs210.mp4", "level": 4, "creator": "studio_rose", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000cvcnco7og65gs4sr0ig0.mp4", "level": 4, "creator": "questiondujour", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d4k8mtfog65u7863s1dg.mp4", "level": 4, "creator": "cafe_social", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d430smvog65uf76vki8g.mp4", "level": 4, "creator": "les_idees", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d508d8fog65logk290o0.mp4", "level": 4, "creator": "actu_pop", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v24044gl0000d786gr7og65l97h6h17g.mp4", "level": 4, "creator": "reflexion", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
        {"file": "v26044gc0000d954i97og65ie08t2g40.mp4", "level": 4, "creator": "nouvelle_vague", "hashtags": ["#VYBE", "#PourToi", "#Societe"]},
    ];

    const profileNames = [
        "Ironman1",
        "Thor2",
        "Hulk3",
        "BlackWidow4",
        "Hawkeye5",
        "Compte06",
        "Compte07",
        "Compte08",
        "Compte09",
        "Compte10",
        "Compte11",
        "Compte12",
        "Compte13",
        "Compte14",
        "Compte15",
        "Compte16",
        "Compte17",
        "Compte18",
        "Compte19",
        "Compte20"
];

    // Badges fictifs propres à cette maquette.
    const verifiedCreatorIds = new Set([
        "anyme", "booba", "bassem", "tonton", "lupin", "spider", "star", "aya", "gov"
    ]);

    // Données fictives, uniquement pour la simulation pédagogique.
    const commentSeeds = [
        ["@lina92", "Je ne suis pas d'accord, vous en pensez quoi ?"],
        ["@nour", "Le contexte change beaucoup la manière de comprendre cette vidéo."],
        ["@yanis", "J'aimerais voir les sources avant de me faire un avis."],
        ["@ines", "Les commentaires sont plus intéressants que la vidéo."],
        ["@samir", "Je trouve que c'est une généralisation."],
        ["@maya", "On peut débattre sans manquer de respect."],
        ["@adam", "Ça mérite qu'on en parle sérieusement."],
        ["@lea", "Pas convaincue du tout."],
        ["@noah", "Je n'avais pas vu les choses comme ça."],
        ["@camille", "Il manque quelques nuances, non ?"],
        ["@sarah", "C'est exactement le genre de sujet qui fait réagir."],
        ["@mehdi", "Je veux bien entendre d'autres points de vue."]
    ];
    const replySeeds = [
        ["@ines", "Je suis assez d'accord avec toi."],
        ["@alex", "Pas forcément, ça dépend du contexte."],
        ["@nour", "Tu peux expliquer pourquoi ?"],
        ["@sam", "C'est intéressant comme remarque."],
        ["@emma", "Je pensais la même chose."]
    ];
    function seededNumber(index, salt) {
        let n = (Math.imul(index + 37, 1664525) + salt * 1013904223) >>> 0;
        n ^= n >>> 13;
        return n >>> 0;
    }
    // Seules quelques vidéos sont virales. Les autres restent plausibles.
    function demoPopularity(index) {
        const n = seededNumber(index, 19);
        if (index % 11 === 3 || index % 17 === 8) return 120000 + n % 3400000;
        if (index % 5 === 2) return 18000 + n % 210000;
        return 70 + n % 8700;
    }

    function creatorKeyFromFile(file) {
        return file
            .replace(/\.mp4$/i, "")
            .replace(/-\d+$/, "")
            .replace(/\d+$/, "")
            .toLowerCase();
    }

    function creatorNameFromFile(file) {
        return file
            .replace(/\.mp4$/i, "")
            .replace(/-\d+$/, "")
            .replace(/\d+$/, "") || "createur";
    }

    const videos = definitions.map(({ file, level, creator, hashtags }, index) => {
        const creatorId = creator;
        const creatorName = creator;
        return {
            id: `video-${index + 1}`,
            file,
            level,
            src: `${VIDEO_FOLDER}${file}`,
            creatorId,
            creatorName,
            username: `@${creatorName}`,
            caption: "",
            hashtags: hashtags.join(" "),
            baselineLikes: demoPopularity(index),
            baselineViews: Math.max(25000 + index * 13791, demoPopularity(index) * (4 + index % 9))
        };
    });

    const videoById = Object.fromEntries(
        videos.map(video => [video.id, video])
    );

    /*
     * Les vidéos d'un même créateur partagent un compte :
     * Anyme3 et Anyme4, par exemple, appartiennent à Anyme.
     */
    const creatorById = {};

    videos.forEach(video => {
        if (!creatorById[video.creatorId]) {
            creatorById[video.creatorId] = {
                id: video.creatorId,
                name: video.creatorName,
                username: video.username,
                videoIds: []
            };
        }

        creatorById[video.creatorId].videoIds.push(video.id);
    });
    // Identités fictives pour la démonstration, stables entre les visites.
    const creatorBios = [
        "Vidéos, discussions et découvertes.",
        "Mon regard sur les tendances du moment.",
        "Culture, réactions et vie quotidienne.",
        "On échange nos points de vue ici.",
        "Créateur de contenus • nouvelles publications."
    ];
    Object.values(creatorById).forEach((creator, index) => {
        creator.bio = creatorBios[index % creatorBios.length];
        creator.joined = `${2021 + index % 5}`;
        creator.demoVerified = verifiedCreatorIds.has(creator.id);
    });

    /* ======================================================
       2. ÉLÉMENTS HTML
       ====================================================== */

    const videoElement = $(".reel-video");
    const reelMedia = $(".reel-media");
    const usernameElement = $(".username");
    const avatarElement = $(".profile-picture");

    const followButton = $(".follow-button");
    const likeButton = $('[data-action="like"]');
    const commentButton = $('[data-action="comment"]');
    const shareButton = $('[data-action="share"]');
    const moreButton = $('[data-action="more"]');

    const captionElement = $(".caption");
    const hashtagsElement = $(".hashtags");

    const soundButton = $(".sound-button");
    const heartAnimation = $(".heart-animation");
    const playIndicator = $(".play-indicator");
    const loader = $(".video-loader");
    const progressBar = $(".feed-progress-bar");

    const commentsSheet = $("#comments-sheet");
    const commentsList = $(".comments-list");
    const commentInput = $(".comment-input");
    const sendComment = $(".send-comment");

    const actionMenu = $("#action-menu");
    const toast = $("#toast");

    const notificationDot = $(".notification-dot");
    const searchInput = $(".search-input");
    const searchResults = $(".search-results");
    const notificationList = $(".notification-list");

    const creatorPage = $("#creator-page");
    const creatorPicture = $(".creator-picture");
    const creatorUsername = $(".creator-username");
    const creatorFollowButton = $(".creator-follow-button");
    const creatorVideoCount = $(".creator-video-count");
    const creatorFollowers = $(".creator-followers");
    const creatorVideos = $(".creator-videos");

    /* ======================================================
       3. ÉTAT DE L'APPLICATION
       ====================================================== */

    let profiles = {};
    let activeProfile = null;

    let currentVideoId = videos[0].id;
    let currentFeed = "for-you";

    let feedHistory = [videos[0].id];
    let historyPosition = 0;

    // Lecture isolée des publications d’un créateur, sans toucher au fil Pour toi.
    let creatorViewing = null;

    let watchHistory = [];
    let savedVideos = [];
    let repostedVideos = [];
    let notifications = [];

    let muted = true;
    let lastTapAt = 0;
    let singleTapTimer = null;
    let toastTimer = null;

    let touchStarted = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let suppressClickUntil = 0;

    let replyTargetId = null;

    /* ======================================================
       4. DONNÉES INITIALES
       ====================================================== */

    function formatCount(value) {
        return Number(value || 0).toLocaleString("fr-FR");
    }

    function setText(element, value) {
        if (element) {
            element.textContent = String(value);
        }
    }

    function showToast(message) {
        if (!toast) {
            console.log("VYBE:", message);
            return;
        }

        toast.textContent = message;
        toast.classList.add("visible");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("visible");
        }, 2300);
    }

    function seedComments(video) {
        const index = Number(video.id.split("-")[1]);
        const viral = video.baselineLikes >= 100000;
        const count = viral ? 16 + index % 10 : 5 + index % 6;
        return Array.from({length: count}, (_, i) => {
            const item = commentSeeds[(index + i) % commentSeeds.length];
            const replyCount = viral ? (i % 3 === 0 ? 4 : 2) : (i % 2);
            return {
                id: `seed-${video.id}-${i}`,
                username: item[0],
                text: item[1],
                likes: viral ? 1000 + seededNumber(index + i, 4) % 68000 : 2 + seededNumber(index + i, 5) % 900,
                replies: Array.from({length: replyCount}, (_, j) => {
                    const reply = replySeeds[(index + i + j) % replySeeds.length];
                    return {id:`seed-reply-${video.id}-${i}-${j}`, username:reply[0], text:reply[1], likes: 2 + seededNumber(i+j+index, 7) % (viral ? 1400 : 65)};
                }),
                seeded: true
            };
        });
    }

    function defaultVideoState(video) {
        return {
            liked: false,
            likes: video.baselineLikes,
            views: video.baselineViews,
            comments: seedComments(video),
            commentLikes: {},
            skipped: false
        };
    }

    function defaultCreatorState(creator) {
        const hash = [...creator.id].reduce(
            (sum, char) => sum + char.charCodeAt(0),
            0
        );

        return {
            following: false,
            followers: 12000 + (hash * 977) % 900000
        };
    }

    function makeDefaultProfile() {
        const videoStates = {};
        const creatorStates = {};

        videos.forEach(video => {
            videoStates[video.id] = defaultVideoState(video);
        });

        Object.values(creatorById).forEach(creator => {
            creatorStates[creator.id] = defaultCreatorState(creator);
        });

        return {
            videos: videoStates,
            creators: creatorStates,
            savedVideos: [],
            repostedVideos: [],
            watchHistory: [],
            notifications: [{
                id: "welcome",
                message: "Bienvenue sur VYBE.",
                date: new Date().toISOString()
            }],
            currentVideoId: videos[0].id,
            currentFeed: "for-you"
        };
    }

    /* ======================================================
       5. SAUVEGARDE ET RESTAURATION DES PROFILS
       ====================================================== */

    function normalizeProfile(profile) {
        const defaults = makeDefaultProfile();

        if (!profile || typeof profile !== "object") {
            return defaults;
        }

        profile.videos ||= {};
        profile.creators ||= {};

        videos.forEach(video => {
            const previous = profile.videos[video.id];

            if (!previous) {
                profile.videos[video.id] = defaults.videos[video.id];
                return;
            }

            const merged = {
                ...defaults.videos[video.id],
                ...previous
            };

            merged.likes = Math.max(
                video.baselineLikes,
                Number(previous.likes) || 0
            );

            merged.views = Math.max(
                video.baselineViews,
                Number(previous.views) || 0
            );

            merged.comments = Array.isArray(previous.comments)
                ? [...seedComments(video), ...previous.comments.filter(comment => !comment.seeded && !String(comment.id || "").startsWith("seed-")).map(comment => ({
                    id: comment.id ||
                        `comment-${Math.random().toString(36).slice(2)}`,
                    username: comment.username || "@utilisateur",
                    text: comment.text || "",
                    likes: Number(comment.likes) || 0,
                    replies: Array.isArray(comment.replies)
                        ? comment.replies.map(reply => ({
                            id: reply.id ||
                                `reply-${Math.random().toString(36).slice(2)}`,
                            username: reply.username || "@utilisateur",
                            text: reply.text || "",
                            likes: Number(reply.likes) || 0
                        }))
                        : [],
                    seeded: Boolean(comment.seeded)
                }))]
                : defaults.videos[video.id].comments;

            merged.commentLikes =
                previous.commentLikes &&
                typeof previous.commentLikes === "object"
                    ? previous.commentLikes
                    : {};

            profile.videos[video.id] = merged;
        });

        Object.values(creatorById).forEach(creator => {
            profile.creators[creator.id] = {
                ...defaults.creators[creator.id],
                ...(profile.creators[creator.id] || {})
            };
        });

        profile.repostedVideos = Array.isArray(profile.repostedVideos)
            ? profile.repostedVideos.filter(id => videoById[id]) : [];

        profile.savedVideos = Array.isArray(profile.savedVideos)
            ? profile.savedVideos.filter(id => videoById[id])
            : [];

        profile.watchHistory = Array.isArray(profile.watchHistory)
            ? profile.watchHistory.filter(id => videoById[id])
            : [];

        profile.dislikedCreators = Array.isArray(profile.dislikedCreators) ? profile.dislikedCreators : [];
        profile.reports = Array.isArray(profile.reports) ? profile.reports : [];
        profile.notifications = Array.isArray(profile.notifications)
            ? profile.notifications
            : defaults.notifications;

        if (!videoById[profile.currentVideoId]) {
            profile.currentVideoId = videos[0].id;
        }

        if (!["for-you", "following"].includes(profile.currentFeed)) {
            profile.currentFeed = "for-you";
        }

        return profile;
    }

    function loadProfiles() {
        try {
            let saved = localStorage.getItem(STORAGE_KEY);

            // Récupère les anciennes données locales si possible.
            if (!saved) {
                for (const legacyKey of LEGACY_STORAGE_KEYS) {
                    saved = localStorage.getItem(legacyKey);

                    if (saved) break;
                }
            }

            profiles = saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.warn("VYBE : anciennes données illisibles.", error);
            profiles = {};
        }

        profileNames.forEach(name => {
            profiles[name] = normalizeProfile(profiles[name]);
        });

        saveProfiles();
    }

    // Sauvegarde compacte : les milliers de commentaires fictifs sont
    // régénérés au chargement, plutôt que copiés vingt fois en stockage.
    let storageWarningShown = false;
    function compactProfiles() {
        const result = {};
        for (const [name, profile] of Object.entries(profiles)) {
            const videoStates = {};
            for (const [id, state] of Object.entries(profile.videos || {})) {
                const source = videoById[id];
                if (!source) continue;
                const userComments = (state.comments || []).filter(c =>
                    !c.seeded && !String(c.id || "").startsWith("seed-")
                );
                const compact = {};
                if (state.liked) compact.liked = true;
                if (state.skipped) compact.skipped = true;
                if (state.likes !== source.baselineLikes) compact.likes = state.likes;
                if (state.views !== source.baselineViews) compact.views = state.views;
                if (userComments.length) compact.comments = userComments;
                if (Object.keys(state.commentLikes || {}).length) compact.commentLikes = state.commentLikes;
                if (Object.keys(compact).length) videoStates[id] = compact;
            }
            const creatorStates = {};
            for (const [id, state] of Object.entries(profile.creators || {})) {
                const source = creatorById[id];
                if (!source) continue;
                const base = defaultCreatorState(source);
                const delta = {};
                for (const [key, value] of Object.entries(state)) {
                    if (JSON.stringify(value) !== JSON.stringify(base[key])) delta[key] = value;
                }
                if (Object.keys(delta).length) creatorStates[id] = delta;
            }
            result[name] = {
                videos: videoStates,
                creators: creatorStates,
                savedVideos: profile.savedVideos || [],
                repostedVideos: profile.repostedVideos || [],
                watchHistory: profile.watchHistory || [],
                notifications: (profile.notifications || []).slice(0, 60),
                dislikedCreators: profile.dislikedCreators || [],
                reports: profile.reports || [],
                currentVideoId: profile.currentVideoId,
                currentFeed: profile.currentFeed
            };
        }
        return result;
    }

    function saveProfiles() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(compactProfiles()));
            storageWarningShown = false;
            return true;
        } catch (error) {
            // Pas de pop-up pendant la présentation. Les interactions restent
            // actives en mémoire, mais risquent de ne pas survivre au rechargement.
            if (!storageWarningShown) {
                console.warn("VYBE : stockage indisponible ou plein ; sauvegarde non persistante.", error);
                storageWarningShown = true;
            }
            return false;
        }
    }

    function currentProfile() {
        return activeProfile ? profiles[activeProfile] : null;
    }

    function stateFor(id = currentVideoId) {
        return currentProfile()?.videos?.[id] || null;
    }

    function creatorStateFor(creatorId) {
        return currentProfile()?.creators?.[creatorId] || null;
    }

    function saveCurrentProfile() {
        const profile = currentProfile();

        if (!profile) return;

        profile.currentVideoId = currentVideoId;
        profile.currentFeed = currentFeed;
        profile.savedVideos = [...savedVideos];
        profile.repostedVideos = [...repostedVideos];
        profile.watchHistory = [...watchHistory];
        profile.notifications = [...notifications];

        saveProfiles();
    }

    function restoreCurrentProfile() {
        const profile = normalizeProfile(profiles[activeProfile]);

        profiles[activeProfile] = profile;

        currentVideoId = videoById[profile.currentVideoId]
            ? profile.currentVideoId
            : videos[0].id;

        currentFeed = profile.currentFeed || "for-you";
        savedVideos = [...profile.savedVideos];
        repostedVideos = [...profile.repostedVideos];
        watchHistory = [...profile.watchHistory];
        notifications = [...profile.notifications];

        feedHistory = [currentVideoId];
        historyPosition = 0;

        if (
            currentFeed === "following" &&
            !getFollowingVideos().length
        ) {
            currentFeed = "for-you";
        }
    }

    /* ======================================================
       6. BADGES ET PHOTOS DE PROFIL
       ====================================================== */

    function renderVerifiedName(element, username, creatorId) {
        if (!element) return;

        element.replaceChildren(
            document.createTextNode(username)
        );

        if (!verifiedCreatorIds.has(creatorId)) return;

        const badge = document.createElement("span");

        badge.className = "vybe-verified-badge";
        badge.textContent = "✓";
        badge.title = "Compte certifié dans la démo";
        badge.setAttribute(
            "aria-label",
            "Compte certifié dans la démo"
        );

        element.appendChild(badge);
    }

    function applyProfileAvatar(element, key, displayName) {
        if (!element) return;
        element.querySelectorAll(":scope > .vybe-avatar-image, :scope > .vybe-avatar-fallback")
            .forEach(node => node.remove());
        const name = String(displayName || key || "?").replace(/^@/, "");
        const hash = [...name].reduce((n,c) => Math.imul(n,31)+c.charCodeAt(0)|0, 17) >>> 0;
        const hues = [195, 265, 24, 145, 335, 55, 220, 12];
        const hue = hues[hash % hues.length];
        const skin = ["#e7b18c", "#9d634a", "#c88d67", "#f0c6a1", "#754936"][hash % 5];
        const hair = ["#29232d", "#4c3029", "#704b35", "#171b28", "#9b7043"][hash % 5];
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="hsl(${hue},65%,78%)"/><stop offset="1" stop-color="hsl(${(hue+55)%360},55%,54%)"/></linearGradient></defs><rect width="100" height="100" fill="url(#g)"/><ellipse cx="50" cy="109" rx="43" ry="39" fill="hsl(${hue},35%,30%)"/><ellipse cx="50" cy="46" rx="27" ry="32" fill="${hair}"/><ellipse cx="50" cy="52" rx="23" ry="28" fill="${skin}"/><path d="M27 39 Q29 7 52 18 Q75 16 73 43 Q63 31 54 29 Q40 42 27 39" fill="${hair}"/><circle cx="42" cy="52" r="2" fill="#29232d"/><circle cx="58" cy="52" r="2" fill="#29232d"/><path d="M43 66 Q50 71 57 66" stroke="#704739" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
        const image = document.createElement("img");
        image.className = "vybe-avatar-image";
        image.alt = `Avatar fictif de ${name}`;
        image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
        element.appendChild(image);
    }

    /* ======================================================
       7. NOTIFICATIONS
       ====================================================== */

    function addNotification(message) {
        notifications.unshift({
            id: `notification-${Date.now()}-${Math.random()
                .toString(36).slice(2, 7)}`,
            message,
            date: new Date().toISOString()
        });

        notifications = notifications.slice(0, 100);

        notificationDot?.classList.add("visible");

        renderNotifications();
        saveCurrentProfile();
    }

    function renderNotifications() {
        if (!notificationList) return;

        notificationList.replaceChildren();

        if (!notifications.length) {
            const empty = document.createElement("div");

            empty.className = "empty-page";
            empty.textContent = "Aucune notification pour le moment.";

            notificationList.appendChild(empty);
            return;
        }

        notifications.forEach(item => {
            const row = document.createElement("div");

            row.className = "notification-item";
            row.textContent = typeof item === "string"
                ? item
                : item.message;

            notificationList.appendChild(row);
        });
    }

    /* ======================================================
       8. ALGORITHME PROGRESSIF
       ====================================================== */

    function getAlgorithmLevelStats() {
        const stats = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };

        videos.forEach(video => {
            if (stateFor(video.id)?.liked) {
                stats[video.level]++;
            }
        });

        return stats;
    }

    function getAlgorithmLevelWeights() {
        // Progression par paliers : les vidéos vues sont comptées une seule fois.
        // Le fil Pour toi commence toujours aux niveaux 0 et 1 ; aucun saut de palier.
        const likes = getAlgorithmLevelStats();
        const seen = new Set(watchHistory);
        const watched = level => videos.filter(v => v.level === level && seen.has(v.id)).length;
        const intro = watched(0) + watched(1);
        const open2 = intro >= 10 && likes[1] >= 2;
        const open3 = open2 && watched(2) >= 10 && likes[2] >= 2;
        const open4 = open3 && watched(3) >= 10 && likes[3] >= 2;
        const weights = {0:55, 1:45, 2:0, 3:0, 4:0};
        if (open2) {
            const strength = Math.min(1, Math.max(0, likes[1] - 1) / 9);
            weights[0] = 50 - strength * 17;
            weights[1] = 42 - strength * 12;
            weights[2] = 8 + strength * 29;
        }
        if (open3) {
            const strength = Math.min(1, Math.max(0, likes[2] - 1) / 8);
            weights[0] *= .75;
            weights[1] *= .8;
            weights[2] = Math.max(weights[2], 25);
            weights[3] = 7 + strength * 31;
        }
        if (open4) {
            const strength = Math.min(1, Math.max(0, likes[3] - 1) / 8);
            weights[0] *= .65;
            weights[1] *= .65;
            weights[2] *= .75;
            weights[3] = Math.max(weights[3], 25);
            weights[4] = 7 + strength * 40;
        }
        // Une exposition prolongée au niveau 4, accompagnée d'engagement,
        // peut finir par concentrer les recommandations sur ce niveau.
        if (open4 && watched(4) >= 10 && likes[4] >= 5) {
            return {0:0, 1:0, 2:0, 3:0, 4:100};
        }
        return weights;
    }

    function videoScore(video) {
        const state = stateFor(video.id);

        if (!state) return 0;

        return (
            (state.liked ? 30 : 0) +
            state.comments.length * 1.5 +
            (creatorStateFor(video.creatorId)?.following ? 18 : 0) -
            (state.skipped ? 2 : 0)
        );
    }

    function getRecommendedVideos() {
        const weights = getAlgorithmLevelWeights();

        return videos
            .filter(video => weights[video.level] > 0)
            .sort((a, b) => {
                const difference = weights[b.level] - weights[a.level];

                return difference || videoScore(b) - videoScore(a);
            });
    }

    function getFollowingVideos() {
        return videos.filter(video =>
            creatorStateFor(video.creatorId)?.following
        );
    }

    function chooseWeightedLevel(weights, availableLevels) {
        const choices = availableLevels
            .map(level => ({
                level,
                weight: Math.max(0, weights[level] || 0)
            }))
            .filter(item => item.weight > 0);

        const total = choices.reduce(
            (sum, item) => sum + item.weight,
            0
        );

        if (!total) {
            return availableLevels[
                Math.floor(Math.random() * availableLevels.length)
            ];
        }

        let roll = Math.random() * total;

        for (const item of choices) {
            roll -= item.weight;

            if (roll < 0) return item.level;
        }

        return choices[choices.length - 1].level;
    }

    function chooseVideoFromPool(pool) {
        if (!pool.length) return null;
        const excluded = new Set(profiles[activeProfile]?.dislikedCreators || []);
        const preferred = pool.filter(v => !excluded.has(v.creatorId));
        if (preferred.length) pool = preferred;
        // L'historique inclut les vidéos visitées, même via la navigation arrière.
        const seen = new Set([...watchHistory, ...feedHistory]);
        let candidates = pool.filter(v => !seen.has(v.id));
        if (!candidates.length) {
            const recent = new Set(feedHistory.slice(-12));
            candidates = pool.filter(v => v.id !== currentVideoId && !recent.has(v.id));
        }
        if (!candidates.length) candidates = pool.filter(v => v.id !== currentVideoId);
        if (!candidates.length) candidates = pool;
        return candidates[Math.floor(Math.random()*candidates.length)].id;
    }

    function getNextContent() {
        if (currentFeed === "following") {
            const following = getFollowingVideos();
            if (following.length) return chooseVideoFromPool(following);
            currentFeed = "for-you";
            $('[data-feed="for-you"]')?.classList.add("active");
            $('[data-feed="following"]')?.classList.remove("active");
            showToast("Tu ne suis encore aucun créateur.");
        }
        const weights = getAlgorithmLevelWeights();
        const excluded = new Set(profiles[activeProfile]?.dislikedCreators || []);
        let eligible = videos.filter(v => weights[v.level] > 0 && !excluded.has(v.creatorId));
        if (!eligible.length) eligible = videos.filter(v => weights[v.level] > 0);
        if (!eligible.length) return null;
        const seen = new Set([...watchHistory, ...feedHistory]);
        const unseen = eligible.filter(v => !seen.has(v.id));
        const pool = unseen.length ? unseen : eligible;
        const levels = [...new Set(pool.map(v => v.level))];
        const level = chooseWeightedLevel(weights,levels);
        return chooseVideoFromPool(pool.filter(v => v.level === level));
    }

    function nextContent() {
        if (!activeProfile) return;
        if (creatorViewing) {
            if (creatorViewing.position >= creatorViewing.ids.length - 1) {
                showToast("Fin des vidéos de ce créateur. Utilise Retour au profil.");
                return;
            }
            creatorViewing.position++;
            showVideo(creatorViewing.ids[creatorViewing.position]);
            return;
        }
        if (historyPosition < feedHistory.length - 1) {
            historyPosition++;
            showVideo(feedHistory[historyPosition]);
            return;
        }
        const id = getNextContent();

        feedHistory = feedHistory.slice(0, historyPosition + 1);
        if (!id) return;
        feedHistory.push(id);
        historyPosition = feedHistory.length - 1;

        showVideo(id);
    }

    function previousContent() {
        if (!activeProfile) return;
        if (creatorViewing) {
            if (creatorViewing.position <= 0) {
                showToast("Première vidéo de ce créateur.");
                return;
            }
            creatorViewing.position--;
            showVideo(creatorViewing.ids[creatorViewing.position]);
            return;
        }
        if (historyPosition <= 0) {
            showToast("Tu es déjà au début du fil.");
            return;
        }

        historyPosition--;
        showVideo(feedHistory[historyPosition]);
    }

    /* ======================================================
       9. LIKES ET COMPTEURS
       ====================================================== */

    function renderLike() {
        const state = stateFor();

        if (!state) return;

        const icon = $(".action-icon", likeButton || document);
        const label = $(".action-label", likeButton || document);

        if (icon) {
            icon.textContent = state.liked ? "♥" : "♡";
            icon.style.color = state.liked ? "#ff3040" : "";
        }

        setText(label, formatCount(state.likes));
        likeButton?.classList.toggle("is-liked", state.liked);
    }

    function renderCommentCount() {
        setText(
            $(".action-label", commentButton || document),
            formatCount(stateFor()?.comments?.length || 0)
        );
    }

    function animateHeart(x, y) {
        if (heartAnimation) {
            heartAnimation.classList.remove("visible");
            void heartAnimation.offsetWidth;
            heartAnimation.classList.add("visible");

            if (typeof heartAnimation.animate === "function") {
                heartAnimation.animate([
                    {
                        transform: "translate(-50%, -50%) scale(.25) rotate(-18deg)",
                        opacity: 0
                    },
                    {
                        transform: "translate(-50%, -50%) scale(1.18) rotate(8deg)",
                        opacity: 1,
                        offset: .55
                    },
                    {
                        transform: "translate(-50%, -50%) scale(1) rotate(0)",
                        opacity: 1
                    }
                ], {
                    duration: 560,
                    easing: "cubic-bezier(.2,.8,.2,1)"
                });
            }

            setTimeout(() => heartAnimation.classList.remove("visible"), 720);
        }

        if (!reelMedia) return;

        const rect = reelMedia.getBoundingClientRect();
        const burst = document.createElement("div");

        burst.className = "vybe-heart-burst";
        burst.textContent = "♥";

        burst.style.left = `${
            Math.max(
                24,
                Math.min(
                    rect.width - 24,
                    (x ?? rect.left + rect.width / 2) - rect.left
                )
            )
        }px`;

        burst.style.top = `${
            Math.max(
                24,
                Math.min(
                    rect.height - 24,
                    (y ?? rect.top + rect.height / 2) - rect.top
                )
            )
        }px`;

        reelMedia.appendChild(burst);

        burst.addEventListener("animationend", () => burst.remove(), {
            once: true
        });

        setTimeout(() => burst.remove(), 1000);
    }

    function toggleCurrentLike(fromDoubleTap = false, x, y) {
        const state = stateFor();

        if (!state) return;

        if (fromDoubleTap && state.liked) {
            animateHeart(x, y);
            return;
        }

        state.liked = !state.liked;

        state.likes = Math.max(
            0,
            state.likes + (state.liked ? 1 : -1)
        );

        if (state.liked || fromDoubleTap) {
            animateHeart(x, y);
        }

        renderLike();
        saveCurrentProfile();
    }

    /* ======================================================
       10. AFFICHAGE DU FEED VIDÉO
       ====================================================== */

    function showVideo(id) {
        const data = videoById[id];

        if (!data || !videoElement || !stateFor(id)) {
            console.error(
                "VYBE : vidéo, lecteur ou profil introuvable.",
                id
            );

            showToast("Impossible d'afficher cette vidéo.");
            return;
        }

        currentVideoId = id;

        const state = stateFor(id);
        state.views++;

        if (!watchHistory.includes(id)) {
            watchHistory.unshift(id);
            watchHistory = watchHistory.slice(0, 100);
        }

        replyTargetId = null;

        commentsSheet?.classList.remove("active");
        actionMenu?.classList.remove("active");

        videoElement.pause();
        videoElement.src = data.src;
        videoElement.muted = muted;
        videoElement.playsInline = true;
        videoElement.loop = false;

        renderVerifiedName(
            usernameElement,
            data.username,
            data.creatorId
        );

        if (captionElement) captionElement.hidden = true;
        setText(hashtagsElement, data.hashtags);

        applyProfileAvatar(
            avatarElement,
            data.creatorId,
            data.creatorName,
            false
        );

        setText(soundButton, muted ? "🔇" : "🔊");

        if (progressBar) progressBar.style.width = "0%";

        loader?.classList.add("visible");
        playIndicator?.classList.remove("visible");

        renderLike();
        renderRepost();
        renderFollow();
        renderCommentCount();
        renderComments();
        renderCreatorProfile(data.creatorId);
        updateUserProfile();
        saveCurrentProfile();

        videoElement.load();

        videoElement.play()
            .then(() => playIndicator?.classList.remove("visible"))
            .catch(() => playIndicator?.classList.add("visible"));
    }

    /* ======================================================
       11. LECTURE, SON ET PROGRESSION
       ====================================================== */

    function togglePlay() {
        if (!videoElement) return;

        if (videoElement.paused) {
            videoElement.play()
                .then(() => playIndicator?.classList.remove("visible"))
                .catch(() => playIndicator?.classList.add("visible"));
        } else {
            videoElement.pause();
            playIndicator?.classList.add("visible");
        }
    }

    soundButton?.addEventListener("click", event => {
        event.stopPropagation();

        muted = !muted;

        if (videoElement) videoElement.muted = muted;

        setText(soundButton, muted ? "🔇" : "🔊");

        soundButton.setAttribute(
            "aria-label",
            muted ? "Activer le son" : "Désactiver le son"
        );
    });

    videoElement?.addEventListener("loadstart", () => {
        loader?.classList.add("visible");
    });

    videoElement?.addEventListener("waiting", () => {
        loader?.classList.add("visible");
    });

    videoElement?.addEventListener("canplay", () => {
        loader?.classList.remove("visible");
    });

    videoElement?.addEventListener("loadeddata", () => {
        loader?.classList.remove("visible");
    });

    videoElement?.addEventListener("error", () => {
        loader?.classList.remove("visible");
        const expected = videoById[currentVideoId];
        const currentSrc = videoElement.currentSrc || videoElement.src;
        if (!expected || !currentSrc) return;
        // A cancelled request from the previous swipe is not a broken video.
        const expectedFile = encodeURIComponent(expected.file).toLowerCase();
        const actualFile = currentSrc.split("/").pop().split("?")[0].toLowerCase();
        if (actualFile !== expectedFile && decodeURIComponent(actualFile) !== expected.file.toLowerCase()) return;
        console.warn("VYBE : erreur de lecture (sans notification intrusive)", expected.file, videoElement.error);
        // Do not display a misleading 'verify file' toast during the presentation.
    });

    videoElement?.addEventListener("timeupdate", () => {
        if (
            progressBar &&
            Number.isFinite(videoElement.duration) &&
            videoElement.duration > 0
        ) {
            progressBar.style.width =
                `${videoElement.currentTime / videoElement.duration * 100}%`;
        }
    });

    videoElement?.addEventListener("ended", nextContent);

    /* Double-tap : like + cœur animé. Simple clic : pause/reprise. */
    videoElement?.addEventListener("click", event => {
        if (Date.now() < suppressClickUntil) return;

        const now = Date.now();

        if (now - lastTapAt < 300) {
            clearTimeout(singleTapTimer);
            lastTapAt = 0;

            if (!stateFor()?.liked) {
                toggleCurrentLike(true, event.clientX, event.clientY);
            } else {
                animateHeart(event.clientX, event.clientY);
            }

            return;
        }

        lastTapAt = now;
        clearTimeout(singleTapTimer);

        singleTapTimer = setTimeout(() => {
            togglePlay();
            lastTapAt = 0;
        }, 300);
    });

    likeButton?.addEventListener("click", event => {
        event.stopPropagation();
        toggleCurrentLike();
    });

    /* ======================================================
       12. SWIPE VERTICAL
       ====================================================== */

    const reel = $(".reel");

    reel?.addEventListener("touchstart", event => {
        touchStarted = false;
        if (event.target.closest("button, input, textarea, a")) return;
        touchStarted = true;

        touchStartY = event.changedTouches[0].clientY;
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    reel?.addEventListener("touchend", event => {
        if (!touchStarted) return;
        touchStarted = false;
        const dy = touchStartY - event.changedTouches[0].clientY;
        const dx = touchStartX - event.changedTouches[0].clientX;

        if (Math.abs(dy) > 60 && Math.abs(dy) > Math.abs(dx)) {
            suppressClickUntil = Date.now() + 400;

            if (dy > 0) nextContent();
            else previousContent();
        }
    }, { passive: true });

    let lastWheelAt = 0;
    reel?.addEventListener("wheel", event => {
        if (!activeProfile || $(".page.active") || commentsSheet?.classList.contains("active")) return;
        if (Math.abs(event.deltaY) < 15) return;
        event.preventDefault();
        const now = Date.now();
        if (now - lastWheelAt < 550) return;
        lastWheelAt = now;
        if (event.deltaY > 0) nextContent();
        else previousContent();
    }, { passive: false });

    /* ======================================================
       13. COMMENTAIRES, RÉPONSES ET LIKES DE COMMENTAIRES
       ====================================================== */

    function getComments(id = currentVideoId) {
        return stateFor(id)?.comments || [];
    }

    function addCommentLikeButton(target, item) {
        const state = stateFor();

        const liked = Boolean(state?.commentLikes?.[item.id]);
        const button = document.createElement("button");

        button.type = "button";
        button.className = "vybe-comment-like";

        button.textContent =
            `${liked ? "♥" : "♡"} ${formatCount(
                (item.likes || 0) + (liked ? 1 : 0)
            )}`;

        button.addEventListener("click", () => {
            const currentState = stateFor();

            if (!currentState) return;

            currentState.commentLikes[item.id] =
                !currentState.commentLikes[item.id];

            renderComments();
            saveCurrentProfile();
        });

        target.appendChild(button);
    }

    function addReplyForm(comment, row) {
        const form = document.createElement("form");
        form.className = "vybe-reply-form";

        const input = document.createElement("input");

        input.type = "text";
        input.maxLength = 500;
        input.placeholder = `Répondre à ${comment.username}…`;
        input.setAttribute("aria-label", "Écrire une réponse");

        const send = document.createElement("button");

        send.type = "submit";
        send.textContent = "Envoyer";

        form.append(input, send);

        form.addEventListener("submit", event => {
            event.preventDefault();

            const text = input.value.trim();
            if (!text) return;

            const state = stateFor();

            const original = state?.comments.find(
                item => item.id === comment.id
            );

            if (!original) return;

            original.replies ||= [];

            original.replies.push({
                id: `reply-${Date.now()}-${Math.random()
                    .toString(36).slice(2, 8)}`,
                username: `@${activeProfile}`,
                text,
                likes: 0
            });

            replyTargetId = null;

            renderComments();
            saveCurrentProfile();
        });

        row.appendChild(form);
        input.focus();
    }

    function renderComments() {
        if (!commentsList) return;

        commentsList.replaceChildren();

        const state = stateFor();
        const comments = getComments();

        const heading = document.createElement("div");

        heading.className = "vybe-comments-heading";
        heading.textContent = `${formatCount(comments.length)} commentaires`;

        commentsList.appendChild(heading);

        if (!comments.length) {
            const empty = document.createElement("div");

            empty.className = "empty-page";
            empty.textContent = "Aucun commentaire pour le moment.";

            commentsList.appendChild(empty);
        }

        comments.forEach(comment => {
            const row = document.createElement("div");

            row.className = "vybe-comment-row";

            const avatar = document.createElement("div");

            avatar.className = "vybe-comment-avatar";

            applyProfileAvatar(
                avatar,
                String(comment.username || "utilisateur")
                    .replace(/^@/, "")
                    .toLowerCase(),
                String(comment.username || "@U").replace(/^@/, ""),
                true
            );

            const body = document.createElement("div");

            body.className = "vybe-comment-body";

            const name = document.createElement("strong");

            name.className = "vybe-comment-name";
            name.textContent = comment.username || "@utilisateur";

            const text = document.createElement("p");

            text.className = "vybe-comment-text";
            text.textContent = comment.text || "";

            const actions = document.createElement("div");

            actions.className = "vybe-comment-actions";

            addCommentLikeButton(actions, comment);

            const replyButton = document.createElement("button");

            replyButton.type = "button";
            replyButton.className = "vybe-reply-button";
            replyButton.textContent = "Répondre";

            replyButton.addEventListener("click", () => {
                replyTargetId =
                    replyTargetId === comment.id ? null : comment.id;

                renderComments();
            });

            actions.appendChild(replyButton);
            body.append(name, text, actions);

            (comment.replies || []).forEach(reply => {
                const replyRow = document.createElement("div");

                replyRow.className = "vybe-comment-reply";

                const replyName = document.createElement("strong");

                replyName.textContent = reply.username || "@utilisateur";

                const replyText = document.createElement("p");

                replyText.textContent = reply.text || "";

                replyRow.append(replyName, replyText);

                addCommentLikeButton(replyRow, reply);

                body.appendChild(replyRow);
            });

            row.append(avatar, body);

            if (replyTargetId === comment.id) {
                addReplyForm(comment, body);
            }

            commentsList.appendChild(row);
        });

        renderCommentCount();
    }

    function openComments() {
        renderComments();
        commentsSheet?.classList.add("active");
    }

    function closeComments() {
        commentsSheet?.classList.remove("active");
        replyTargetId = null;
    }

    function addComment() {
        const text = commentInput?.value.trim();

        if (!text) {
            showToast("Écris un commentaire avant de l'envoyer.");
            return;
        }

        const state = stateFor();

        if (!state) return;

        state.comments.push({
            id: `comment-${Date.now()}-${Math.random()
                .toString(36).slice(2, 8)}`,
            username: `@${activeProfile}`,
            text,
            likes: 0,
            replies: [],
            date: new Date().toISOString()
        });

        if (commentInput) commentInput.value = "";

        renderComments();
        saveCurrentProfile();
    }

    commentButton?.addEventListener("click", event => {
        event.stopPropagation();
        openComments();
    });

    sendComment?.addEventListener("click", addComment);

    commentInput?.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            addComment();
        }
    });

    $("#comments-sheet .close-sheet")?.addEventListener(
        "click",
        closeComments
    );

    /* ======================================================
       14. ABONNEMENTS ET COMPTES
       ====================================================== */

    function renderFollow() {
        const data = videoById[currentVideoId];

        const account = data
            ? creatorStateFor(data.creatorId)
            : null;

        if (!account) return;

        setText(
            followButton,
            account.following ? "Abonné" : "Suivre"
        );

        followButton?.classList.toggle(
            "following",
            account.following
        );

        if (creatorPage?.dataset.creator === data.creatorId) {
            setText(
                creatorFollowButton,
                account.following ? "Abonné" : "Suivre"
            );

            creatorFollowButton?.classList.toggle(
                "following",
                account.following
            );
        }
    }

    function toggleFollow(
        creatorId = videoById[currentVideoId]?.creatorId
    ) {
        const creator = creatorById[creatorId];
        const state = creatorStateFor(creatorId);

        if (!creator || !state) return;

        state.following = !state.following;

        state.followers = Math.max(
            0,
            state.followers + (state.following ? 1 : -1)
        );

        if (state.following) {
            addNotification(`Tu suis maintenant ${creator.username}.`);
            showToast(`Abonné à ${creator.username}`);
        } else {
            showToast(`Tu ne suis plus ${creator.username}.`);
        }

        renderFollow();
        renderFriends();
        renderCreatorProfile(creatorId);
        updateUserProfile();

        saveCurrentProfile();
    }

    /* ======================================================
       15. RECHERCHE DE COMPTES ET DE VIDÉOS
       ====================================================== */

    function renderSearchResults(query = "") {
        if (!searchResults) return;

        searchResults.replaceChildren();

        if (!query.trim()) {
            const empty = document.createElement("div");

            empty.className = "empty-page";
            empty.textContent =
                "Recherche un compte ou une vidéo.";

            searchResults.appendChild(empty);
            return;
        }

        const normalized = query
            .toLowerCase()
            .replace(/^[@#]/, "");

        const creators = Object.values(creatorById).filter(creator =>
            creator.name.toLowerCase().includes(normalized) ||
            creator.username.toLowerCase().includes(normalized)
        );

        const foundVideos = videos.filter(video =>
            video.file.toLowerCase().includes(normalized) ||
            video.username.toLowerCase().includes(normalized) ||
            video.hashtags.toLowerCase().includes(normalized)
        );

        if (creators.length) {
            const heading = document.createElement("h2");

            heading.className = "vybe-search-heading";
            heading.textContent = "Comptes";

            searchResults.appendChild(heading);

            creators.forEach(creator => {
                const button = document.createElement("button");

                button.type = "button";
                button.className = "vybe-search-account";

                const avatar = document.createElement("div");

                avatar.className = "vybe-search-avatar";

                applyProfileAvatar(
                    avatar,
                    creator.id,
                    creator.name,
                    false
                );

                const details = document.createElement("div");

                details.className = "vybe-search-account-details";

                const name = document.createElement("strong");

                renderVerifiedName(
                    name,
                    creator.username,
                    creator.id
                );

                const subtitle = document.createElement("small");

                subtitle.textContent =
                    `${creator.videoIds.length} vidéo(s) · ` +
                    `${formatCount(
                        creatorStateFor(creator.id)?.followers || 0
                    )} abonnés`;

                details.append(name, subtitle);
                button.append(avatar, details);

                button.addEventListener("click", () => {
                    openCreatorProfile(creator.id);
                });

                searchResults.appendChild(button);
            });
        }

        if (foundVideos.length) {
            const heading = document.createElement("h2");

            heading.className = "vybe-search-heading";
            heading.textContent = "Vidéos";

            searchResults.appendChild(heading);

            foundVideos.forEach(video => {
                const button = document.createElement("button");

                button.type = "button";
                button.className = "search-result";

                button.textContent =
                    `${video.username} · ${video.hashtags}`;

                button.addEventListener("click", () => {
                    closeAllPages();
                    setActiveNavigation($('[data-page="home"]'));

                    feedHistory = [currentVideoId, video.id];
                    historyPosition = 1;

                    showVideo(video.id);
                });

                searchResults.appendChild(button);
            });
        }

        if (!creators.length && !foundVideos.length) {
            const empty = document.createElement("div");

            empty.className = "empty-page";
            empty.textContent = "Aucun compte ni aucune vidéo trouvée.";

            searchResults.appendChild(empty);
        }
    }

    searchInput?.addEventListener("input", () => {
        renderSearchResults(searchInput.value);
    });

    /* ======================================================
       16. PARTAGE ET MENU D'ACTIONS
       ====================================================== */

    shareButton?.addEventListener("click", async event => {
        event.stopPropagation();

        const video = videoById[currentVideoId];

        if (!video) return;

        const url = new URL(video.src, document.baseURI).href;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: "VYBE",
                    text: `Découvre ${video.username} sur VYBE`,
                    url
                });
            } else if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(url);
                showToast("Lien copié.");
            } else {
                showToast(
                    "Le partage n'est pas disponible sur ce navigateur."
                );
            }
        } catch {
            // L'utilisateur peut annuler le partage.
        }
    });

    // Republier : action locale propre à chacun des 20 profils.
    const repostButton = document.createElement("button");
    repostButton.type = "button";
    repostButton.className = "action-button vybe-repost-button";
    repostButton.dataset.action = "repost";
    repostButton.setAttribute("aria-label", "Republier cette vidéo");
    repostButton.innerHTML = '<span class="action-icon">⇄</span><span class="action-label">Republier</span>';
    shareButton?.parentElement?.insertBefore(repostButton, shareButton);
    function renderRepost() {
        const active = repostedVideos.includes(currentVideoId);
        repostButton.classList.toggle("is-reposted", active);
        repostButton.setAttribute("aria-pressed", String(active));
        const label = repostButton.querySelector(".action-label");
        if (label) label.textContent = active ? "Republié" : "Republier";
    }
    repostButton.addEventListener("click", event => {
        event.stopPropagation();
        if (!activeProfile || !videoById[currentVideoId]) return;
        const index = repostedVideos.indexOf(currentVideoId);
        if (index === -1) {
            repostedVideos.push(currentVideoId);
            showToast("Vidéo republiée sur ton profil.");
        } else {
            repostedVideos.splice(index, 1);
            showToast("Republication annulée.");
        }
        renderRepost();
        saveCurrentProfile();
    });

    function closeActionMenu() { actionMenu?.classList.remove("active"); }
    moreButton?.addEventListener("click", event => {
        event.stopPropagation();
        actionMenu?.classList.toggle("active");
    });
    document.addEventListener("click", event => {
        if (actionMenu?.classList.contains("active") &&
            !actionMenu.contains(event.target) && !moreButton?.contains(event.target)) closeActionMenu();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeActionMenu();
            $("#vybe-report-dialog")?.remove();
        }
    });
    function openReportFlow() {
        const videoId = currentVideoId;
        const reasons = ["Haine ou discrimination", "Harcèlement", "Sexisme ou misogynie", "Désinformation", "Violence", "Autre"];
        $("#vybe-report-dialog")?.remove();
        const overlay = document.createElement("div");
        overlay.id = "vybe-report-dialog";
        overlay.className = "vybe-report-overlay";
        overlay.innerHTML = `<div class="vybe-report-panel" role="dialog" aria-modal="true" aria-label="Signaler une vidéo"><h2>Signaler cette vidéo</h2><p>Choisis un motif de signalement.</p><div class="vybe-report-options"></div><button type="button" data-report-cancel>Annuler</button></div>`;
        const panel = overlay.querySelector(".vybe-report-panel");
        const options = overlay.querySelector(".vybe-report-options");
        reasons.forEach(reason => {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = reason;
            button.addEventListener("click", () => {
                panel.replaceChildren();
                const heading = document.createElement("h2");
                heading.textContent = "Précise ton signalement";
                const info = document.createElement("p");
                info.textContent = `Motif : ${reason}. Explique ce qui te dérange dans cette vidéo.`;
                const textarea = document.createElement("textarea");
                textarea.maxLength = 1500;
                textarea.placeholder = "Décris ce qui te gêne...";
                textarea.setAttribute("aria-label", "Détails du signalement");
                const send = document.createElement("button");
                send.type = "button";
                send.textContent = "Envoyer le signalement";
                send.addEventListener("click", () => {
                    const details = textarea.value.trim();
                    if (details.length < 5) { showToast("Ajoute quelques détails avant d'envoyer."); textarea.focus(); return; }
                    const profile = profiles[activeProfile];
                    if (profile) {
                        profile.reports ||= [];
                        profile.reports.push({id:`report-${Date.now()}`, videoId, reason, details, date:new Date().toISOString(), status:"pending"});
                        saveCurrentProfile();
                    }
                    overlay.remove();
                    showToast("Signalement enregistré dans la simulation.");
                });
                const cancel = document.createElement("button");
                cancel.type = "button";
                cancel.textContent = "Annuler";
                cancel.addEventListener("click", () => overlay.remove());
                panel.append(heading, info, textarea, send, cancel);
                textarea.focus();
            });
            options.appendChild(button);
        });
        overlay.querySelector("[data-report-cancel]").addEventListener("click", () => overlay.remove());
        overlay.addEventListener("click", event => { if (event.target === overlay) overlay.remove(); });
        document.body.appendChild(overlay);
    }
    $$('[data-menu-action]').forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            const action = button.dataset.menuAction;
            const state = stateFor();
            const video = videoById[currentVideoId];
            closeActionMenu();
            if (action === "close") return;
            if (!state || !video) return;
            if (action === "save") {
                const index = savedVideos.indexOf(currentVideoId);
                if (index < 0) { savedVideos.push(currentVideoId); showToast("Vidéo enregistrée. Retrouve-la sur ton profil."); }
                else { savedVideos.splice(index, 1); showToast("Vidéo retirée des enregistrements."); }
                saveCurrentProfile();
                return;
            }
            if (action === "not-interested") {
                state.skipped = true;
                const profile = profiles[activeProfile];
                if (profile) {
                    profile.dislikedCreators ||= [];
                    if (!profile.dislikedCreators.includes(video.creatorId)) profile.dislikedCreators.push(video.creatorId);
                }
                saveCurrentProfile();
                showToast("Nous te proposerons moins de vidéos de ce type.");
                feedHistory = feedHistory.slice(0, historyPosition + 1);
                historyPosition = feedHistory.length - 1;
                nextContent();
                return;
            }
            if (action === "report") openReportFlow();
        });
    });

    /* ======================================================
       17. NAVIGATION ENTRE LES PAGES
       ====================================================== */

    function closeAllPages() {
        $$(".page").forEach(page => {
            page.classList.remove("active");
        });
    }

    function setActiveNavigation(button) {
        $$(".nav-button").forEach(item => {
            item.classList.remove("active");
        });

        button?.classList.add("active");
    }

    function openPage(name) {
        if (creatorViewing && name !== "creator") {
            creatorViewing = null;
            document.body.classList.remove("vybe-creator-viewing");
        }
        const page = document.getElementById(`${name}-page`);

        if (!page) {
            showToast(`La page "${name}" est introuvable.`);
            return;
        }

        closeAllPages();
        page.classList.add("active");

        videoElement?.pause();

        if (name === "notifications") {
            renderNotifications();
            notificationDot?.classList.remove("visible");
        }

        if (name === "friends") renderFriends();
        if (name === "profile") updateUserProfile();

        if (name === "creator") {
            renderCreatorProfile(
                creatorPage?.dataset.creator ||
                videoById[currentVideoId]?.creatorId
            );
        }
    }

    $$("[data-page]").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.page;

            if (name === "home") {
                closeAllPages();
                setActiveNavigation(button);

                videoElement?.play().catch(() => {
                    playIndicator?.classList.add("visible");
                });

                return;
            }

            openPage(name);

            if (button.classList.contains("nav-button")) {
                setActiveNavigation(button);
            }
        });
    });

    $$("[data-open-page]").forEach(button => {
        button.addEventListener("click", event => {
            event.stopPropagation();
            openPage(button.dataset.openPage);
        });
    });

    $$(".close-page").forEach(button => {
        button.addEventListener("click", () => {
            closeAllPages();
            setActiveNavigation($('[data-page="home"]'));

            videoElement?.play().catch(() => {});
        });
    });

    $$(".feed-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            $$(".feed-tab").forEach(item => {
                item.classList.remove("active");
            });

            tab.classList.add("active");
            currentFeed = tab.dataset.feed || "for-you";

            if (currentFeed === "following") {
                const followed = getFollowingVideos();

                if (!followed.length) {
                    currentFeed = "for-you";

                    $('[data-feed="for-you"]')?.classList.add("active");

                    showToast("Tu ne suis encore aucun créateur.");
                } else if (
                    !followed.some(video => video.id === currentVideoId)
                ) {
                    feedHistory = [followed[0].id];
                    historyPosition = 0;

                    showVideo(followed[0].id);
                }
            }

            saveCurrentProfile();
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeComments();
            actionMenu?.classList.remove("active");
        }

        if ($(".page.active") || commentsSheet?.classList.contains("active") || $("#vybe-profile-screen")) return;

        if (
            event.key === "ArrowDown" &&
            !event.target.matches("input, textarea")
        ) {
            nextContent();
        }

        if (
            event.key === "ArrowUp" &&
            !event.target.matches("input, textarea")
        ) {
            previousContent();
        }
    });

    /* ======================================================
       18. LISTE DES ABONNEMENTS
       ====================================================== */

    function renderFriends() {
        const list = $(".friends-list");

        if (!list) return;

        list.replaceChildren();

        const followed = Object.values(creatorById).filter(
            creator => creatorStateFor(creator.id)?.following
        );

        if (!followed.length) {
            const empty = document.createElement("div");

            empty.className = "empty-page";
            empty.textContent = "Tu ne suis encore aucun créateur.";

            list.appendChild(empty);
            return;
        }

        followed.forEach(creator => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "search-result";

            button.textContent =
                `${creator.username} · ${creator.videoIds.length} vidéo(s)`;

            button.addEventListener("click", () => {
                openCreatorProfile(creator.id);
            });

            list.appendChild(button);
        });
    }

    /* ======================================================
       19. PROFILS CRÉATEURS ET GRILLE DE VIDÉOS
       ====================================================== */

    function renderCreatorProfile(creatorId) {
        const creator = creatorById[creatorId];
        const state = creatorStateFor(creatorId);

        if (!creator || !state || !creatorPage) return;

        creatorPage.dataset.creator = creatorId;

        renderVerifiedName(
            creatorUsername,
            creator.username,
            creator.id
        );

        applyProfileAvatar(
            creatorPicture,
            creator.id,
            creator.name,
            false
        );

        renderVerifiedName(creatorUsername, creator.username, creator.id);
        setText(creatorVideoCount, creator.videoIds.length);
        setText(creatorFollowers, formatCount(state.followers));

        setText(
            creatorFollowButton,
            state.following ? "Abonné" : "Suivre"
        );

        creatorFollowButton?.classList.toggle(
            "following",
            state.following
        );

        if (!creatorVideos) return;

        creatorVideos.replaceChildren();

        creator.videoIds.forEach(id => {
            const video = videoById[id];
            const stateForVideo = stateFor(id);

            const card = document.createElement("button");

            card.type = "button";
            card.className = "vybe-creator-video-card";

            const preview = document.createElement("video");

            preview.className = "vybe-creator-video-preview";
            preview.src = video.src;
            preview.muted = true;
            preview.playsInline = true;
            preview.preload = "metadata";

            preview.addEventListener("loadedmetadata", () => {
                try {
                    preview.currentTime = Math.min(
                        0.15,
                        preview.duration / 2
                    );
                } catch {
                    // Le navigateur peut refuser le déplacement.
                }
            }, { once: true });

            const title = document.createElement("span");

            title.textContent = video.hashtags;

            const stats = document.createElement("small");

            stats.textContent =
                `♥ ${formatCount(stateForVideo?.likes || 0)}`;

            card.append(preview, title, stats);

            card.addEventListener("click", () => {
                // On garde l’historique Pour toi intact et on ouvre un lecteur dédié.
                creatorViewing = {
                    creatorId,
                    ids: [...creator.videoIds],
                    position: creator.videoIds.indexOf(id),
                    returnVideoId: currentVideoId
                };
                closeAllPages();
                document.body.classList.add("vybe-creator-viewing");
                showVideo(id);
            });

            creatorVideos.appendChild(card);
        });
    }

    const creatorReturnButton = document.createElement("button");
    creatorReturnButton.type = "button";
    creatorReturnButton.id = "vybe-return-creator";
    creatorReturnButton.textContent = "‹ Retour au profil";
    creatorReturnButton.addEventListener("click", event => {
        event.stopPropagation();
        if (!creatorViewing) return;
        const { creatorId, returnVideoId } = creatorViewing;
        creatorViewing = null;
        document.body.classList.remove("vybe-creator-viewing");
        if (returnVideoId && videoById[returnVideoId]) showVideo(returnVideoId);
        renderCreatorProfile(creatorId);
        enrichCreatorProfile(creatorId);
        openPage("creator");
    });
    document.body.appendChild(creatorReturnButton);

    function openCreatorProfile(
        creatorId = videoById[currentVideoId]?.creatorId
    ) {
        if (!creatorById[creatorId]) return;

        renderCreatorProfile(creatorId);
        enrichCreatorProfile(creatorId);
        openPage("creator");
    }

    $$("[data-open-creator]").forEach(element => {
        element.addEventListener("click", event => {
            event.stopPropagation();
            openCreatorProfile();
        });
    });

    // Un seul écouteur par bouton : les abonnements ne s'annulent pas
    // immédiatement à cause d'un double écouteur.
    followButton?.addEventListener("click", event => {
        event.stopPropagation();

        const id = videoById[currentVideoId]?.creatorId;

        if (id) toggleFollow(id);
    });

    creatorFollowButton?.addEventListener("click", event => {
        event.stopPropagation();

        const id = creatorPage?.dataset.creator;

        if (id) toggleFollow(id);
    });

    /* ======================================================
       20. BIBLIOTHÈQUE : FAVORIS ET HISTORIQUE
       ====================================================== */

    function createLibraryPage() {
        let page = $("#vybe-library-page");

        if (page) return page;

        page = document.createElement("section");
        page.id = "vybe-library-page";
        page.className = "page";

        const close = document.createElement("button");

        close.type = "button";
        close.className = "close-page";
        close.textContent = "×";

        close.addEventListener("click", () => {
            page.classList.remove("active");
            videoElement?.play().catch(() => {});
        });

        const title = document.createElement("h1");

        title.textContent = "Ma bibliothèque";

        const tabs = document.createElement("div");

        tabs.className = "vybe-library-tabs";

        const saved = document.createElement("button");

        saved.type = "button";
        saved.textContent = "Enregistrées";

        saved.addEventListener("click", () => {
            renderLibrary("saved");
        });

        const history = document.createElement("button");

        history.type = "button";
        history.textContent = "Historique";

        history.addEventListener("click", () => {
            renderLibrary("history");
        });

        const reposts = document.createElement("button");
        reposts.type = "button";
        reposts.textContent = "Republications";
        reposts.addEventListener("click", () => renderLibrary("reposts"));
        tabs.append(saved, history, reposts);

        const content = document.createElement("div");

        content.className = "vybe-library-content";

        page.append(close, title, tabs, content);

        ($("#app") || document.body).appendChild(page);

        return page;
    }

    function renderLibrary(type = "saved") {
        const page = createLibraryPage();
        const container = $(".vybe-library-content", page);
        const tabs = $$(".vybe-library-tabs button", page);
        tabs.forEach((button, index) => {
            button.classList.toggle("active", index === ({saved:0, history:1, reposts:2}[type] ?? 0));
            button.classList.add("vybe-library-tab");
        });
        container.replaceChildren();
        const list = type === "history" ? watchHistory : type === "reposts" ? repostedVideos : savedVideos;
        if (!list.length) {
            const empty = document.createElement("div");
            empty.className = "empty-page";
            empty.textContent = type === "history"
                ? "Ton historique est vide."
                : type === "reposts" ? "Aucune vidéo republiée pour ce compte."
                : "Aucune vidéo enregistrée pour ce compte.";
            container.appendChild(empty);
            return;
        }
        [...list].reverse().forEach(id => {
            const video = videoById[id];
            if (!video) return;
            const button = document.createElement("button");
            button.type = "button";
            button.className = "vybe-library-item";
            const thumb = document.createElement("div");
            thumb.className = "vybe-library-thumbnail";
            const preview = document.createElement("video");
            preview.src = video.src;
            preview.muted = true;
            preview.playsInline = true;
            preview.preload = "metadata";
            thumb.appendChild(preview);
            const info = document.createElement("div");
            info.className = "vybe-library-info";
            const name = document.createElement("strong");
            name.textContent = video.username;
            const tags = document.createElement("span");
            tags.textContent = video.hashtags;
            info.append(name, tags);
            button.append(thumb, info);
            button.addEventListener("click", () => {
                closeAllPages();
                setActiveNavigation($('[data-page="home"]'));
                feedHistory = [currentVideoId, id];
                historyPosition = 1;
                showVideo(id);
            });
            container.appendChild(button);
        });
    }

    function openLibrary(type = "saved") {
        closeAllPages();
        const page = createLibraryPage();
        page.classList.add("active");
        renderLibrary(type);
        videoElement?.pause();
    }

    /* ======================================================
       21. PROFIL UTILISATEUR
       ====================================================== */

    function updateUserProfile() {
        ensureDemoExtras();
        const page = $("#profile-page");
        if (!page || !activeProfile) return;
        const title = $(".profile-header h1", page);
        if (title) title.textContent = `@${activeProfile}`;
        applyProfileAvatar($(".big-profile-picture", page), activeProfile, activeProfile);
        const stats = $$(".profile-stats strong", page);
        if (stats[0]) stats[0].textContent = "0";
        if (stats[1]) stats[1].textContent = "0";
        if (stats[2]) stats[2].textContent = String(
            Object.values(creatorById).filter(
                creator => creatorStateFor(creator.id)?.following
            ).length
        );
        let library = $(".vybe-library-button", page);
        if (!library) {
            library = document.createElement("button");
            library.type = "button";
            library.className = "edit-profile vybe-library-button";
            library.textContent = "Ma bibliothèque";
            library.addEventListener("click", () => openLibrary("saved"));
            $(".profile-header", page)?.appendChild(library);
        }
        let savedSection = $(".vybe-saved-section", page);
        if (!savedSection) {
            savedSection = document.createElement("section");
            savedSection.className = "vybe-saved-section";
            $(".profile-content", page)?.appendChild(savedSection);
        }
        savedSection.replaceChildren();
        const heading = document.createElement("h2");
        heading.textContent = `Vidéos enregistrées (${savedVideos.length})`;
        savedSection.appendChild(heading);
        const open = document.createElement("button");
        open.type = "button";
        open.className = "edit-profile";
        open.textContent = savedVideos.length
            ? "Voir mes vidéos enregistrées"
            : "Ouvrir ma bibliothèque";
        open.addEventListener("click", () => openLibrary("saved"));
        savedSection.appendChild(open);
        if (savedVideos.length) {
            const preview = document.createElement("div");
            preview.className = "vybe-profile-saved-grid";
            [...savedVideos].reverse().slice(0, 6).forEach(id => {
                const video = videoById[id];
                if (!video) return;
                const button = document.createElement("button");
                button.type = "button";
                button.className = "vybe-library-item";
                const clip = document.createElement("video");
                clip.src = video.src;
                clip.muted = true;
                clip.playsInline = true;
                clip.preload = "metadata";
                button.appendChild(clip);
                button.addEventListener("click", () => {
                    closeAllPages();
                    setActiveNavigation($('[data-page="home"]'));
                    feedHistory = [currentVideoId, id];
                    historyPosition = 1;
                    showVideo(id);
                });
                preview.appendChild(button);
            });
            savedSection.appendChild(preview);
        }
    }

    $("#profile-page .edit-profile")?.addEventListener("click", () => {
        showProfileSelector();
    });

    $$(".create-options button").forEach(button => {
        button.addEventListener("click", () => {
            showToast(
                "La publication de photos et vidéos n'est pas encore activée."
            );
        });
    });

    /* ======================================================
       22. SÉLECTEUR DE PROFILS
       ====================================================== */

    function showProfileSelector() {
        videoElement?.pause();
        $("#vybe-profile-screen")?.remove();

        const screen = document.createElement("section");

        screen.id = "vybe-profile-screen";

        Object.assign(screen.style, {
            position: "fixed",
            inset: "0",
            zIndex: "999999",
            background: "#080808",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "18px",
            fontFamily: "Arial, sans-serif",
            overflowY: "auto",
            padding: "20px"
        });

        const title = document.createElement("h1");

        title.textContent = "VYBE";

        Object.assign(title.style, {
            fontSize: "48px",
            letterSpacing: "5px",
            margin: "0"
        });

        const subtitle = document.createElement("p");

        subtitle.textContent = "Qui regarde VYBE ?";

        const grid = document.createElement("div");

        Object.assign(grid.style, {
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(125px, 165px))",
            gap: "14px"
        });

        profileNames.forEach(name => {
            const button = document.createElement("button");

            button.type = "button";
            const icon = document.createElement("span");
            icon.className = "vybe-selector-avatar";
            applyProfileAvatar(icon, name, name);
            const label = document.createElement("span");
            label.textContent = name;
            button.append(icon, label);

            Object.assign(button.style, {
                background: "#191919",
                color: "#fff",
                border: "1px solid #555",
                borderRadius: "12px",
                padding: "12px 10px",
                cursor: "pointer",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "9px"
            });

            button.addEventListener("click", () => {
                selectProfile(name);
            });

            grid.appendChild(button);
        });

        screen.append(title, subtitle, grid);

        document.body.appendChild(screen);
    }

    function selectProfile(name) {
        if (!profileNames.includes(name)) return;

        saveCurrentProfile();

        activeProfile = name;

        restoreCurrentProfile();
        startDemoNotifications();

        $("#vybe-profile-screen")?.remove();

        let switchButton = $("#vybe-active-profile");

        if (!switchButton) {
            switchButton = document.createElement("button");

            switchButton.id = "vybe-active-profile";

            Object.assign(switchButton.style, {
                position: "fixed",
                top: "12px",
                left: "12px",
                zIndex: "100000",
                background: "#191919",
                color: "#fff",
                border: "1px solid #555",
                borderRadius: "18px",
                padding: "8px 12px",
                cursor: "pointer"
            });

            document.body.appendChild(switchButton);
        }

        switchButton.textContent = `Profil : ${name}`;
        switchButton.onclick = showProfileSelector;

        renderNotifications();
        renderFriends();
        updateUserProfile();

        closeAllPages();

        $$(".feed-tab").forEach(tab => {
            tab.classList.toggle(
                "active",
                tab.dataset.feed === currentFeed
            );
        });

        setActiveNavigation($('[data-page="home"]'));

        showVideo(currentVideoId);
        saveCurrentProfile();
    }

    /* ======================================================
       22B. MODULES PÉDAGOGIQUES AJOUTÉS (NON DESTRUCTIFS)
       ====================================================== */
    const vybeDemoMessages = [
        "Un créateur que tu suis a publié une nouvelle vidéo.",
        "Une nouvelle discussion est disponible dans ton fil.",
        "Une vidéo tendance attire beaucoup de réactions.",
        "Tu as de nouvelles recommandations à découvrir."
    ];
    let vybeNotificationTimer = null;
    function startDemoNotifications() {
        if (vybeNotificationTimer) return;
        // Notifications espacées et limitées, uniquement après sélection d'un compte.
        vybeNotificationTimer = setInterval(() => {
            if (!activeProfile || document.hidden || $("#vybe-profile-screen")) return;
            const profile = currentProfile();
            if (!profile) return;
            const n = (profile.demoNotificationIndex || 0);
            if (n >= 5) return;
            profile.demoNotificationIndex = n + 1;
            addNotification(vybeDemoMessages[n % vybeDemoMessages.length]);
        }, 45000);
    }

    function ensureDemoExtras() {
        if ($("#vybe-admin-launch")) return;
        const profilePage = $("#profile-page .profile-content");
        if (!profilePage) return;
        const launch = document.createElement("button");
        launch.id = "vybe-admin-launch";
        launch.type = "button";
        launch.textContent = "Espace animateur";
        launch.addEventListener("click", openDemoAdmin);
        profilePage.appendChild(launch);
    }

    function getDemoProgress(name) {
        const p = profiles[name];
        if (!p) return null;
        const viewed = [...new Set(p.watchHistory || [])];
        const levelCounts = [0,0,0,0,0];
        viewed.forEach(id => {
            const video = videoById[id];
            if (video) levelCounts[video.level]++;
        });
        const liked = videos.filter(v => p.videos?.[v.id]?.liked).length;
        const followed = Object.values(p.creators || {}).filter(c => c.following).length;
        return {viewed:viewed.length,levelCounts,liked,followed,
            saved:(p.savedVideos || []).length,
            reports:(p.reports || []).length};
    }

    function closeDemoOverlay() {
        $("#vybe-demo-overlay")?.remove();
    }
    function makeDemoOverlay(title) {
        closeDemoOverlay();
        const overlay = document.createElement("section");
        overlay.id = "vybe-demo-overlay";
        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        const header = document.createElement("header");
        const heading = document.createElement("h2");
        heading.textContent = title;
        const close = document.createElement("button");
        close.type = "button";
        close.textContent = "Fermer ×";
        close.addEventListener("click", closeDemoOverlay);
        header.append(heading,close);
        const content = document.createElement("div");
        content.className = "vybe-demo-content";
        overlay.append(header,content);
        document.body.appendChild(overlay);
        return content;
    }
    function demoParagraph(parent, value, className="") {
        const el=document.createElement("p");
        el.textContent=value;
        if (className) el.className=className;
        parent.appendChild(el);
        return el;
    }
    function demoButton(parent, label, action) {
        const button=document.createElement("button");
        button.type="button";
        button.className="vybe-demo-button";
        button.textContent=label;
        button.addEventListener("click",action);
        parent.appendChild(button);
        return button;
    }
    function openDemoAdmin() {
        // Code d'accès uniquement pour distinguer les rôles pendant une démo
        // locale. Ce n'est PAS une authentification sécurisée.
        const content=makeDemoOverlay("Accès animateur");
        demoParagraph(content,"Zone de démonstration. Code d'accès animateur requis.");
        const input=document.createElement("input");
        input.type="password";
        input.inputMode="numeric";
        input.placeholder="Code animateur";
        input.autocomplete="off";
        content.appendChild(input);
        const feedback=demoParagraph(content,"");
        demoButton(content,"Accéder au tableau de bord",()=>{
            if (input.value !== "2468") {
                feedback.textContent="Code incorrect.";
                return;
            }
            renderDemoAdmin();
        });
    }
    function renderDemoAdmin() {
        const content=makeDemoOverlay("Tableau de bord • VYBE");
        demoParagraph(content,"Données de démonstration stockées dans ce navigateur, par compte. Aucun envoi à un serveur.","vybe-demo-muted");
        const chooser=document.createElement("select");
        chooser.setAttribute("aria-label","Compte à analyser");
        profileNames.forEach(name=>{
            const option=document.createElement("option");
            option.value=name;option.textContent=name;
            chooser.appendChild(option);
        });
        chooser.value=activeProfile || profileNames[0];
        content.appendChild(chooser);
        const panel=document.createElement("div");
        content.appendChild(panel);
        function refresh() {
            panel.replaceChildren();
            const name=chooser.value;
            const stats=getDemoProgress(name);
            if (!stats) return;
            const grid=document.createElement("div");
            grid.className="vybe-demo-metrics";
            [["Vidéos distinctes",stats.viewed],["Likes",stats.liked],["Abonnements",stats.followed],["Favoris",stats.saved],["Signalements",stats.reports]].forEach(([label,value])=>{
                const card=document.createElement("div");
                const number=document.createElement("strong");number.textContent=value;
                const title=document.createElement("span");title.textContent=label;
                card.append(number,title);grid.appendChild(card);
            });
            panel.appendChild(grid);
            const heading=document.createElement("h3");heading.textContent="Répartition des vidéos vues par niveau";
            panel.appendChild(heading);
            const max=Math.max(1,...stats.levelCounts);
            stats.levelCounts.forEach((count,level)=>{
                const row=document.createElement("div");row.className="vybe-demo-level";
                const label=document.createElement("span");label.textContent=`Niveau ${level} · ${count}`;
                const track=document.createElement("div");track.className="vybe-demo-track";
                const fill=document.createElement("div");fill.style.width=`${count/max*100}%`;
                track.appendChild(fill);row.append(label,track);panel.appendChild(row);
            });
            demoButton(panel,"Afficher la révélation pédagogique",()=>renderDemoReveal(name));
        }
        chooser.addEventListener("change",refresh);
        refresh();
    }
    function renderDemoReveal(name) {
        const content=makeDemoOverlay("Ton parcours dans VYBE");
        const stats=getDemoProgress(name);
        if (!stats) return;
        demoParagraph(content,"Tu pensais choisir librement chaque vidéo ? Tes interactions ont contribué à orienter les recommandations de cette simulation.");
        demoParagraph(content,`${stats.viewed} vidéos distinctes vues, ${stats.liked} likes, ${stats.followed} abonnements et ${stats.saved} favoris.`);
        const heading=document.createElement("h3");heading.textContent="Les niveaux rencontrés";
        content.appendChild(heading);
        stats.levelCounts.forEach((count,level)=>{
            demoParagraph(content,`Niveau ${level} : ${count} vidéo${count>1?"s":""}`);
        });
        demoParagraph(content,"Les niveaux correspondent à des catégories pédagogiques prédéfinies. Cette expérience montre un modèle simplifié de recommandation, pas le fonctionnement exact d'un réseau social réel.","vybe-demo-muted");
        demoButton(content,"Retour au tableau de bord",renderDemoAdmin);
    }
    // Complément au profil créateur : description et vues, sans remplacer la grille.
    function enrichCreatorProfile(creatorId) {
        const creator=creatorById[creatorId];
        const header=$("#creator-page .creator-header");
        if (!creator || !header) return;
        let details=$("#vybe-creator-details");
        if (!details) {
            details=document.createElement("div");
            details.id="vybe-creator-details";
            header.appendChild(details);
        }
        details.replaceChildren();
        demoParagraph(details,creator.bio);
        const views=creator.videoIds.reduce((sum,id)=>sum+(stateFor(id)?.views || videoById[id]?.baselineViews || 0),0);
        demoParagraph(details,`${formatCount(views)} vues cumulées · Créateur depuis ${creator.joined} · Profil fictif`,"vybe-demo-muted");
    }

    /* ======================================================
       23. INITIALISATION
       ====================================================== */

    function initialize() {
        console.log("VYBE : initialisation.");

        if (!videoElement) {
            console.error(
                'VYBE : classe ".reel-video" introuvable dans index.html.'
            );

            showToast("Lecteur vidéo introuvable dans le HTML.");
            return;
        }

        if (
            definitions.length !== 84 ||
            videos.some(video => !video.file || !Number.isInteger(video.level))
        ) {
            console.error("VYBE : catalogue vidéo invalide.");
            showToast("Le catalogue des vidéos contient une erreur.");
            return;
        }

        loadProfiles();
        renderSearchResults("");
        renderNotifications();

        window.VYBE = {
            videos,
            videoById,
            creatorById,

            showVideo,
            nextContent,
            previousContent,

            getNextContent,
            getRecommendedVideos,
            getAlgorithmLevelWeights,

            toggleCurrentLike,
            toggleFollow,

            openComments,
            closeComments,
            addComment,
            renderComments,

            selectProfile,
            showProfileSelector,

            save: saveCurrentProfile
        };

        window.VYBEProfiles = {
            list: profileNames,
            select: selectProfile,
            showSelector: showProfileSelector
        };

        console.log(
            `VYBE : ${videos.length} vidéos et ` +
            `${Object.keys(creatorById).length} comptes créateurs.`
        );

        showProfileSelector();
    }

    window.addEventListener("beforeunload", saveCurrentProfile);

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
            saveCurrentProfile();
        }
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize);
    } else {
        initialize();
    }
})();
