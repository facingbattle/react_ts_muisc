export function formatCount(count: number) {
    // 这个是根据需求做调整的
    // 超过了 10万 做格式化
    if (count > 100000) {
        // 判断的时候是 > 100000 10万
        // 但是最终展示的时候是以 万 为单位
        return Math.floor(count / 10000) + '万'
    } else {
        return count
    }
}

// 图片传参格式化
export function getImageSize(
    imageUrl: string,
    width: number,
    height: number = width
) {
    let r = ''

    r = imageUrl + `?param=${width}x${height}`

    return r
}
