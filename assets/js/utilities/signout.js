$("#logout-button").on("click", (event) => {
    swalLogoutConfirm(msgConfirmLogout, () => {
        $("#formLogout").submit();
        removeCookies();
    }); 
});
