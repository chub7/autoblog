/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {
            width: {
                '300': '300px',
                '400': '400px',
                '600': '600px',
                '800': '800px',
                '1100': '1100px',
            },
            height: {
                '300': '300px',
                '400': '400px',
                '500': '500px',
                '600': '600px',
                '800': '800px',
                '1100': '1100px',
            },
            "colors": {
                "hippiblue": {
                    '600': '#3d5d8c',
                },
                "orangehoverarticle": {
                   '100': '#ff6900'
                }
            }

        }
    },
    plugins: [

    ],
}