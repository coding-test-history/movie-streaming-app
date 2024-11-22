/**
 * import component
 */
import { validator } from "../components/widget/validator.js";
import { attributeName } from "../components/attribute/attribute-name.js";

/**
 * Process login
 */
const sendLogin = async () => {
    const formLogin = $(`#${attributeName()[0]["form"]}`);
    const formData = new FormData(formLogin[0]);

    try {
        const response = await sendApiRequest(
            {
                url: "index.php/api/auth/login",
                data: formData,
                type: "POST",
            },
            false
        );

        if (response.status === "OK") {
            setUserData(response.data); // Set user data including token, name, level, and photo
            swalSuccessLogin("Berhasil login, Selamat datang!");
            $(formLogin).off("submit").submit();
            // Additional handling if needed for successful login
        } else {
            swalError(response.message, () => {});
        }

    } catch (error) {
        const { responseJSON } = error;
        const message =
            error instanceof ReferenceError
                ? error.message
                : responseJSON.message;
        if (message) {
            swalError(`${message}`, () => {});
        } else {
            console.error(error);
        }
    }
};

const init = () => {
    $(`#${attributeName()[0]["submitButton"]}`).on("click", async (event) => {
        event.preventDefault();
        if (validator) {
            validator.validate().then(async function (status) {
                console.log("validated!");
                if (status == "Valid") {
                    await sendLogin();
                }
            });
        }
    });
};

export { init };
