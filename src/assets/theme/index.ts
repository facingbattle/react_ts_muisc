const theme = {
    color: {
        primary: '#C20C0C',
        secondary: '',
    },
    size: {},
    mixin: {
        // 混入这里使用字符串
        wrapv1: `
            width: 1100px;
            margin: 0 auto;
        `,
        textNowrap: `
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `,
    },
}

export default theme
