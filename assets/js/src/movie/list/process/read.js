/**
 * import repositories
 */
import {
    getMovieDataAPI,
    getMovieHighlightAPI,
} from "../repositories/repositories.js";

/**
 * import component attribute
 */
import { attributeName } from "../components/attribute/attribute-name.js";

/**
 * import component table
 */
import { listElement } from "../components/item/list.js";
import {
    highlightBannerElement,
    highlightClipElement,
} from "../components/item/highlight.js";

/**
 * defined default value
 */
let currentPage = 1;
let isLoading = false;

/**
 * defined tag
 */
const listing = $(`#${attributeName()[0]["listing"]}`);
const highlightBanner = $(`#${attributeName()[0]["highlightBanner"]}`);
const highlightClip = $(`#${attributeName()[0]["highlightClip"]}`);

/**
 * render data for list
 */
const renderList = (datas) => {
    const listingElement = datas
        .map((listingData) => listElement(listingData))
        .join("");
    listing.append(listingElement);
};

/**
 * render data for highlight banner
 */
const renderHighlightBanner = (datas) => {
    highlightBanner.empty();
    const render = highlightBannerElement(datas);
    highlightBanner.append(render);
};

/**
 * render data for highlight clip
 */
const renderHighlightClip = (datas) => {
    highlightClip.empty();
    const render = highlightClipElement(datas);
    highlightClip.append(render);
};

/**
 * load data listing
 */
const loadDataListing = async (keyword = null) => {
    if (isLoading) return;

    try {
        /**
         * listing data
         */
        keyword = keyword === null ? null : keyword;
        const urlListing = urlMovieData(currentPage, keyword);
        const listingAPI = await getMovieDataAPI(urlListing);
        const listingData = typeof listingAPI == "undefined" ? [] : listingAPI;
        renderList(listingData);
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
};

/**
 * load highlight banner
 */
const loadHighlightBanner = async () => {
    if (isLoading) return;

    try {
        const urlHighlightBaner = urlMovieHighlight("the substance");
        const highlightBannerAPI = await getMovieHighlightAPI(
            urlHighlightBaner
        );
        const highlightBannerData =
            typeof highlightBannerAPI == "undefined" ? [] : highlightBannerAPI;
        renderHighlightBanner(highlightBannerData);
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
};

/**
 * load highlight clip
 */
const loadHighlightClip = async () => {
    if (isLoading) return;

    try {
        const urlHighlightClip = urlMovieHighlight("longlegs");
        const highlightClipAPI = await getMovieHighlightAPI(urlHighlightClip);
        const highlightClipData =
            typeof highlightClipAPI == "undefined" ? [] : highlightClipAPI;
        renderHighlightClip(highlightClipData);
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
    }
};

/**
 * handle data where scrolling
 */
const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
        currentPage++;
        loadDataListing();
    }
};

/**
 * render table
 */
const renderMovieData = async () => {
    currentPage = 1;
    listing.empty();
    window.addEventListener("scroll", handleScroll);
    loadDataListing();
    loadHighlightClip();
    loadHighlightBanner();
};

/**
 * initialize
 */
const init = async () => {
    renderMovieData();
};

export { init };
