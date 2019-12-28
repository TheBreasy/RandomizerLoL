    var Jungle = [
        "ekko", "shaco", "khazix", "lee sin", "dr. mundo", "zac", "jarvan", "kayn", "elise", "evelynn",
        "karthus", "master yi", "nunu", "vi", "rengar", "reksai", "nocturne", "hecarim", "graves", "xin-zhao",
        "kindred", "jax", "nidalee", "olaf", "warwick", "diana", "udyr", "volibear", "rammus", "ivern", "amumu", "pantheon",
        "taliyah", "sejuani", "gragas", "shyvana", "trundle", "skarner", "fiddlesticks", "poppy", "twitch",
        "wukong", "qiyana"
    ];

    var Top = [
        "mordekaiser", "darius", "jax", "vladimir", "fiora", "kayle", "kled", "pantheon", "renekton", "diana",
        "teemo", "rengar", "heimerdinger", "riven", "quinn", "akali", "shen", "malzahar", "camille", "kennen", "illaoi", "garen",
        "urgot", "yorick", "gangplank", "tryndamere", "irelia", "malphite", "nocturne", "nasus", "talon", "cassiopeia", "singed",
        "maokai", "volibear", "vayne", "rumble", "poppy", "sylas", "jayce", "ryze", "aatrox", "yasuo", "ornn", "sion", "mundo", "skarner",
        "lissandra", "neeko", "swain", "viktor", "gnar", "trundle", "chogath", "wukong", "tahm kench"
    ];

    var Mid = [
        "fizz", "kassadin", "vladimir", "zed", "ahri", "malzahar", "katarina", "talon", "diana", "yasuo", "ekko", "morgana", "cassiopeia", "lux",
        "veigar", "orianna", "garen", "syndra", "pantheon", "taliyah", "kled", "renekton", "twisted fate", "leblanc", "qiyana", "zoe",
        "mordekaiser", "tryndamere", "velkoz", "aurelion sol", "anivia", "kennen", "nocturne", "viktor", "quinn", "lissandra", "zilean", "rumble",
        "camille", "xerath", "jayce", "galio", "kayle", "neeko", "akali", "irelia", "ryze", "malphite", "heimerdinger", "cho'gath", "riven", "singed",
        "taric", "annie", "swain", "aatrox", "wukong", "yorick", "sion", "brand", "karthus", "urgot", "kogmaw", "gangplank", "tristana", "karma", "ziggs",
        "sylas", "corki", "azir"
    ];

    var Adc = [
        "caitlyn", "ashe", "vayne", "jinx", "draven", "lucian", "kaisa", "xayah", "aphelios", "jhin", "yasuo", "miss fortune", "tristana", "ezreal",
        "senna", "heimerdinger", "cassiopeia", "sivir", "varus", "twitch", "veigar", "kogmaw", "kalista", "corki"
    ];

    var Support = [
        "blitzcrank", "nautilus", "morgana", "leona", "janna", "bard", "thresh", "shaco", "swain", "pyke", "senna", "soraka", "brand", "alistar", "xerath", "karma", "yuumi",
        "taric", "malphite", "volibear", "taliyah", "shen", "maokai", "ziggs", "braum", "neeko", "annie", "veigar", "galio", "poppy", "tahm kench"
    ];

    var allArray = Jungle.concat(Top, Mid, Adc, Support);

    var allChamps = [...new Set(allArray)];

    function randomChamp(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    document.querySelector("#roles").addEventListener("change", function(e) {
        document.querySelector("#role").innerHTML = document.querySelector("#roles")[document.querySelector("#roles").selectedIndex].value;
    });

    var roles = ["Top", "Mid", "Jungle", "Adc", "Support"];

    document.querySelector("#btn-role").addEventListener("click", function(e) {
        document.querySelector("#role").innerHTML = randomChamp(roles);
        e.preventDefault();
    });

    document.querySelector("#btn-champ").addEventListener("click", function(e) {
        if ((document.querySelector("#roles").value) == "Top") {
            document.querySelector("#champ").innerHTML = randomChamp(Top);
        } else if ((document.querySelector("#roles").value) == "Mid") {
            document.querySelector("#champ").innerHTML = randomChamp(Mid);
        } else if ((document.querySelector("#roles").value) == "Jungle") {
            document.querySelector("#champ").innerHTML = randomChamp(Jungle);
        } else if ((document.querySelector("#roles").value) == "Adc") {
            document.querySelector("#champ").innerHTML = randomChamp(Adc);
        } else if ((document.querySelector("#roles").value) == "Support") {
            document.querySelector("#champ").innerHTML = randomChamp(Support);
        }
        e.preventDefault();
    });

    document.querySelector(".rainbow-btn").addEventListener("click", function(e) {
        document.querySelector("#role").innerHTML = randomChamp(roles);
        document.querySelector("#champ").innerHTML = randomChamp(allChamps);
        e.preventDefault();
    });