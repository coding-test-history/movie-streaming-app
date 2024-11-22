// Define form element
const form = document.getElementById("login-form");

// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
const validator = FormValidation.formValidation(form, {
    fields: {
        username: {
            validators: {
                notEmpty: {
                    message: "Username input is required",
                },
            },
        },
        password: {
            validators: {
                notEmpty: {
                    message: "Password input is required",
                },
            },
        },
    },

    plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap: new FormValidation.plugins.Bootstrap5({
            rowSelector: ".fv-row",
            eleInvalidClass: "",
            eleValidClass: "",
        }),
    },
});

export { validator };
