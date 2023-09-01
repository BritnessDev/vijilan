module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                themeBg1: '#F1F2F5',
                textBlue1: '#4880FF',
                textDark1: '#364659',
                textGray1: 'rgba(62, 74, 85, 0.60)',
            },
            boxShadow: {
                card: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
                boxCard: '0px 6px 12px 0px rgba(0, 0, 0, 0.10)',
                blueButton:
                    'box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',
            },
            height: {
                select: '40px !important',
            },
            fontFamily: {
                inter: ['"Inter"'],
            },
        },
    },
    plugins: [],
};
