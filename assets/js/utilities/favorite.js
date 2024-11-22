// Inisialisasi array favorites
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Fungsi untuk menyimpan array ke localStorage
const saveToLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Fungsi untuk mengupdate warna icon berdasarkan status favorit
const updateIconColor = (button, isFavorited) => {
    const icon = $(button).find("i");
    if (isFavorited) {
        icon.removeClass("text-white").addClass("text-danger");
    } else {
        icon.removeClass("text-danger").addClass("text-white");
    }
};

// Event listener untuk menambah/menghapus favorit
$("body").on("click", "#favorite-button", function (event) {
    const title = $(this).data("fav-title");
    const poster = $(this).data("fav-poster");
    const id = $(this).data("fav-id");
    const type = $(this).data("fav-type");
    const year = $(this).data("fav-year");

    // Cek apakah item sudah ada di favorites array
    const existingIndex = favorites.findIndex((item) => item.id === id);

    if (existingIndex === -1) {
        // Jika belum ada, tambahkan item ke array
        favorites.push({ title, poster, id, type, year });
        updateIconColor(this, true); // Icon jadi merah
    } else {
        // Jika sudah ada, hapus item dari array
        favorites.splice(existingIndex, 1);
        updateIconColor(this, false); // Icon jadi merah
    }

    // Simpan array terbaru ke localStorage
    saveToLocalStorage();
});

/**
 * row list my favorite
 */
const myFavoriteElement = (rowData) => {
    const { title, year, id, type, poster } = rowData;
    return `<div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="m-0">
                        <div class="card-rounded position-relative mb-5">
                            <div class="bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded"
                                style="background-image:url(${poster})">
                            </div>

                            <button class="btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0"
                            id="favorite-button" 
                            data-fav-title="${title}" 
                            data-fav-poster="${poster}" 
                            data-fav-id="${id}" 
                            data-fav-type="${type}" 
                            data-fav-year="${year}">
                                <i class="bi bi-heart-fill text-danger fs-2x"></i>
                            </button>
                        </div>

                        <div class="m-0">
                            <a href="/movie/detail/${id}" class="text-gray-800 text-hover-primary fs-3 fw-bold d-block mb-2">${title}</a>
                            <span class="fw-bold fs-6 text-gray-500 d-block lh-1">${type} (${year})</span>
                        </div>
                    </div>
                </div>`;
};

/**
 * show my favorite modal
 */
$("#my-favorite-button").on("click", () => {
    const favoriteListing = $("#favorite-listing");
    favoriteListing.empty();
    const myFavorite = favorites
        .map((myFavoriteDatas) => myFavoriteElement(myFavoriteDatas))
        .join("");
    favoriteListing.append(myFavorite);
});
