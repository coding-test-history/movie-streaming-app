/** message */
const msgCancelDelete = "Data Batal Dihapus";
const msgCancelNonaktif = (param) => {
    return `${param} Batal dinonaktifkan`;
};
const msgCancelActivation = (param) => {
    return `${param} Batal diaktifkan`;
};
const msgConfirmDelete = (param) => {
    return `Yakin ingin menghapus ${param}? Data yang telah dihapus tidak dapat dikembalikan`;
};
const msgConfirmNonaktif = (param) => {
    return `Yakin ingin menonaktifkan ${param} ?`;
};
const msgConfirmActivation = (param) => {
    return `Yakin ingin mengaktifkan ${param} kembali?`;
};

/** Auth Message */
const msgSuccessLogin = "Login Berhasil!";
const msgConfirmLogout = "Apakah anda yakin ingin logout ?";

/**
 * alert error
 */
const swalError = (message, handleError) => {
    Swal.fire({
        icon: "error",
        html: message,
        buttonsStyling: false,
        confirmButtonText: "Kembali",
        customClass: {
            confirmButton: "btn btn-danger",
        },
    });
    handleError();
};

/**
 * alert cancel
 */
const swalCancel = (message, handleCancel) => {
    Swal.fire({
        text: message,
        icon: "warning",
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: "Ok! Lanjutkan",
        cancelButtonText: "Batalkan",
        customClass: {
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger",
        },
    }).then((result) => {
        handleCancel();
    });
};

/**
 * alert login
 */
const swalSuccessLogin = (message) => {
    Swal.fire({
        text: message,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    }).then(() => {
        window.location = "/dashboard";
    });
};

const swalLogoutConfirm = (message) => {
    Swal.fire({
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Logout!",
    }).then((result) => {
        if (result.isConfirmed) {
            $("#formLogout").submit();
        }
    });
};

/**
 * alert confirm delete
 */
const swalConfirmDelete = (message, onConfirm) => {
    Swal.fire({
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus!",
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    });
};
