/// <reference types="react-scripts" />

declare namespace NodeJS {
    // 同名的 interface 接口会合并
    // 这里的 ProcessEnv 会和 react-scripts/lib/react-app.d.ts 中的 ProcessEnv 合并
    // 所以 NODE_ENV 和 PUBLIC_URL 不需要重复定义
    interface ProcessEnv {
        readonly REACT_APP_BASE_URL: string
    }
}
