export function showLoader() {
    const loader = document.getElementById("loader");
    loader === null || loader === void 0 ? void 0 : loader.classList.remove("hidden");
}
export function hideLoader() {
    const loader = document.getElementById("loader");
    loader === null || loader === void 0 ? void 0 : loader.classList.add("hidden");
}
//# sourceMappingURL=loader.js.map