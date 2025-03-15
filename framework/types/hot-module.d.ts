// Necessary for hot module replacement to work

declare namespace NodeJS {
    interface Module {
        hot?: {
            accept(path: string, callback: () => void): void;
        }
    }
}