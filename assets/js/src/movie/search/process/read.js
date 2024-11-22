/**
 * import repositories
 */
import { getMovieDataAPI } from "../repositories/repositories.js";

/**
 * import component attribute
 */
import { attributeName } from "../components/attribute/attribute-name.js";

/**
 * import component table
 */
import { listElement, undefinedElement } from "../components/item/list.js";

/**
 * defined default value
 */
let currentPage = 1;
let isLoading = false;
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const type = urlParams.get("type");
const year = urlParams.get("year");

/**
 * defined component
 */
const listing = $(`#${attributeName()[0]["listing"]}`);

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
 * render data for undefined
 */
const renderUndefined = () => {
    listing.append(undefinedElement());
};

/**
 * load data listing
 */
const loadDataListing = async () => {
    if (isLoading) return;

    try {
        /**
         * listing data
         */
        const urlListing = urlMovieData(title, type, year, currentPage);
        const listingData = await getMovieDataAPI(urlListing);
        console.log(listingData);
        typeof listingData === "undefined"
            ? renderUndefined()
            : renderList(listingData);
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
};

/**
 * initialize
 */
const init = async () => {
    renderMovieData();
};

export { init };
