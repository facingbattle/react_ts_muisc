import styled from 'styled-components'

export const RankingWrapper = styled.div`
    .content {
        display: flex;
        /* 这个 height 的背景图的高度, 是确定的, 不能乱写 */
        height: 472px;
        margin-top: 20px;
        background: url(${require('@/assets/img/recommend-top-bg.png')});
    }
`
