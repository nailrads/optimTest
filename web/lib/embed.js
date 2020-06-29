import axios from "axios";

export const initInstagram = (() => {
    let instaScript;

    return function () {
        if (!instaScript) {
            instaScript = document.createElement("script");
            instaScript.async = true;
            instaScript.src = "https://platform.instagram.com/en_US/embeds.js";
            document.head.appendChild(instaScript);
        }

        if (!window.instgrm) {
            instaScript.onload = () => {
                window.instgrm.Embeds.process();
            };
        } else {
            window.instgrm.Embeds.process();
        }
    };
})();

export const initTiktok = (() => {
    let tiktokScript;

    return async function ({url, containerEl}) {
        try {
            const {data} = await axios.get("https://www.tiktok.com/oembed", {
                params: {
                    url,
                },
            });

            const wrapper = document.createElement("div");

            wrapper.innerHTML = data.html;

            const script = wrapper.querySelector("script");

            script.parentElement.removeChild(script);

            if (containerEl) {

                if (!tiktokScript) {
                    tiktokScript = document.createElement("script");
                    tiktokScript.async = true;
                    tiktokScript.src = script.src;

                    document.head.appendChild(tiktokScript);
                }

                const loadedTiktokEmbed = !!window.tiktokEmbed && !!window.tiktokEmbed.lib;

                const render = async () => {
                    try {
                        containerEl.innerHTML = wrapper.innerHTML;
                        const tiktokEl = containerEl.querySelector("[data-video-id]");

                        await window.tiktokEmbed.lib.render([tiktokEl]);
                    } catch {
                    }
                }

                if (loadedTiktokEmbed) {
                    render();
                } else {
                    tiktokScript.onload = render;
                }
            }
        } catch {
        }
    };
})();
