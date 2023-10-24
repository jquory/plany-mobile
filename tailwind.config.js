/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'secondary': '#ccf349',
            }
        },
    },
    plugins: [],
}

