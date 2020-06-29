import axios from "axios";

function startVMS() {
  window.onVMSAPIReady = (api) => {
    const enableArticle = () => {
      api.Article.enable({
        display_mode: "desktop",
        auto_mobile_detect: false,
      });
    };

    enableArticle();

    axios.interceptors.response.use(
      (response) => {
        enableArticle();

        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };

  const script = document.createElement("script");

  script.src = "//go.verstka.io/api.js";
  script.async = true;

  document.body.appendChild(script);
}

export default startVMS;
