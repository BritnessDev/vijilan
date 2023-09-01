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
