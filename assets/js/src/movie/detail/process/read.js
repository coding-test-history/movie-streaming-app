/**
 * import repositories
 */
import {
    getMovieDetailAPI,
    getMovieRecommendedAPI,
} from "../repositories/repositories.js";

/**
 * import component attribute
 */
import { attributeName } from "../components/attribute/attribute-name.js";

/**
 * import component table
 */
import {
    contentInfoElement,
    contentTitleGenreElement,
    contentDirectorElement,
    contentDescriptionElement,
} from "../components/item/content.js";
import {
    creditActorElement,
    creditWritterElement,
    detailElement,
} from "../components/item/credit-details.js";
import { awardsElement } from "../components/item/award.js";
import { listElement } from "../components/item/list.js";

/**
 * defined default value
 */
let isLoading = false;
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

/**
 * render data
 */
const renderDetail = (datas) => {
    /**
     * render content info
     */
    const contentInfo = $(`#${attributeName()[0]["contentInfo"]}`);
    contentInfo.empty();
    const renderContenInfo = contentInfoElement(datas);
    contentInfo.append(renderContenInfo);

    /**
     * render content title genre
     */
    const contentTitleGenre = $(`#${attributeName()[0]["contentTitleGenre"]}`);
    contentTitleGenre.empty();
    const renderContentTitleGenre = contentTitleGenreElement(datas);
    contentTitleGenre.append(renderContentTitleGenre);

    /**
     * render content director
     */
    const contentDirector = $(`#${attributeName()[0]["contentDirector"]}`);
    contentDirector.empty();
    const renderContentDirector = contentDirectorElement(datas);
    contentDirector.append(renderContentDirector);

    /**
     * render content description
     */
    const contentDescription = $(
        `#${attributeName()[0]["contentDescription"]}`
    );
    contentDescription.empty();
    const renderContentDescription = contentDescriptionElement(datas);
    contentDescription.append(renderContentDescription);

    /**
     * render credit actor
     */
    const creditActor = $(`#${attributeName()[0]["creditActor"]}`);
    creditActor.empty();
    const renderCreditActor = creditActorElement(datas);
    creditActor.append(renderCreditActor);

    /**
     * render credit writter
     */
    const creditWritter = $(`#${attributeName()[0]["creditWritter"]}`);
    creditWritter.empty();
    const renderCreditWritter = creditWritterElement(datas);
    creditWritter.append(renderCreditWritter);

    /**
     * render detail
     */
    const detail = $(`#${attributeName()[0]["detail"]}`);
    detail.empty();
    const renderDetail = detailElement(datas);
    detail.append(renderDetail);

    /**
     * render awards
     */
    const awards = $(`#${attributeName()[0]["award"]}`);
    awards.empty();
    const renderAwards = awardsElement(datas);
    awards.append(renderAwards);
};

/**
 * render data for list
 */
const renderList = (datas) => {
    const movieRecommended = $(`#${attributeName()[0]["movieRecommended"]}`);
    movieRecommended.empty();
    const listingElement = datas
        .map((listingData) => listElement(listingData))
        .join("");
    movieRecommended.append(listingElement);
};

/**
 * load data recommended
 */
const loadDataRecommended = async (title) => {
    if (isLoading) return;

    try {
        const urlListing = urlMovieData(title, "", "", 1);
        const listingAPI = await getMovieRecommendedAPI(urlListing);
        const listingData = typeof listingAPI == "undefined" ? [] : listingAPI;
        renderList(listingData);
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
};

/**
 * load data detail
 */
const loadDataDetail = async () => {
    if (isLoading) return;

    try {
        /**
         * load render detail
         */
        const urlDetail = urlMovieDetail(id);
        const detailAPI = await getMovieDetailAPI(urlDetail);
        const detailData = typeof detailAPI == "undefined" ? [] : detailAPI;
        renderDetail(detailData);

        /**
         * load render recommended movie
         */
        const title = detailData.Title;
        loadDataRecommended(title);
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
};

/**
 * initialize
 */
const init = async () => {
    loadDataDetail();
};

export { init };
